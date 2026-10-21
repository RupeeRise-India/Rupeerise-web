import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  FormSubmission,
  generateUserAcknowledgementEmail,
  generateAdminNotificationEmail,
} from '@/lib/emailTemplates';

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables.');
    return NextResponse.json(
      { success: false, error: 'Email service configuration missing' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const data = await req.json();
    const {
      type = 'Contact',
      subType,
      name = '',
      email = '',
      phone = '',
      company = '',
      interest = '',
      service = '',
      timeline = '',
      experience = '',
      message = '',
    } = data;

    // Validate minimum required fields
    if (!email && !phone && !name) {
      return NextResponse.json(
        { success: false, error: 'Please provide at least a contact email or phone number.' },
        { status: 400 }
      );
    }

    const submission: FormSubmission = {
      type,
      subType,
      name,
      email,
      phone,
      company,
      interest,
      service,
      timeline,
      experience,
      message,
    };

    // Sender address using verified domain rupeeriseventures.com
    const fromAddress =
      process.env.RESEND_FROM_EMAIL || 'Rupee Rise Ventures <info@rupeeriseventures.com>';

    // Parse admin notification recipients
    const envAdminEmails = process.env.ADMIN_NOTIFICATION_EMAIL
      ? process.env.ADMIN_NOTIFICATION_EMAIL.split(',').map((e) => e.trim()).filter(Boolean)
      : [];

    const defaultAdminRecipients = [
      'support@rupeeriseventures.com',
      'info@rupeeriseventures.com',
      'poojaraj@rupeeriseventures.com',
      'yuuvraj45@rupeeriseventures.com',
      'parameswar@rupeeriseventures.com',
      'info@salhurry.in',
    ];

    const adminRecipients = envAdminEmails.length > 0 ? envAdminEmails : defaultAdminRecipients;

    // 1. Generate Email Contents from Brand Templates
    const userEmailData = generateUserAcknowledgementEmail(submission);
    const adminEmailData = generateAdminNotificationEmail(submission);

    // 2. Dispatch Admin Notification Email
    let adminEmailSent = false;
    try {
      const adminResult = await resend.emails.send({
        from: fromAddress,
        to: adminRecipients,
        replyTo: email ? `${name || 'Website Lead'} <${email}>` : undefined,
        subject: adminEmailData.subject,
        html: adminEmailData.html,
      });

      if (adminResult.error) {
        console.warn('Primary admin send returned warning/error:', adminResult.error);
        // If Resend sandbox restricted recipients to account owner (user1.salhurry@gmail.com), retry with just that email
        if (
          adminResult.error.message &&
          adminResult.error.message.includes('only send testing emails to your own email address')
        ) {
          console.log('Retrying admin alert to verified sandbox account (user1.salhurry@gmail.com)...');
          await resend.emails.send({
            from: 'Rupee Rise Ventures <onboarding@resend.dev>',
            to: ['user1.salhurry@gmail.com'],
            replyTo: email ? `${name || 'Website Lead'} <${email}>` : undefined,
            subject: adminEmailData.subject,
            html: adminEmailData.html,
          });
          adminEmailSent = true;
        }
      } else {
        adminEmailSent = true;
      }
    } catch (adminErr: any) {
      console.error('Error dispatching admin notification email:', adminErr?.message || adminErr);
      // Attempt fallback to verified account email if available
      try {
        await resend.emails.send({
          from: 'Rupee Rise Ventures <onboarding@resend.dev>',
          to: ['user1.salhurry@gmail.com'],
          replyTo: email ? `${name || 'Website Lead'} <${email}>` : undefined,
          subject: adminEmailData.subject,
          html: adminEmailData.html,
        });
        adminEmailSent = true;
      } catch (fallbackErr) {
        console.error('Fallback admin email also failed:', fallbackErr);
      }
    }

    // 3. Dispatch Automated User Acknowledgement Email (if user provided an email)
    let userEmailSent = false;
    if (email && email.includes('@')) {
      try {
        const userResult = await resend.emails.send({
          from: fromAddress,
          to: [email],
          replyTo: 'Rupee Rise Ventures <support@rupeeriseventures.com>',
          subject: userEmailData.subject,
          html: userEmailData.html,
        });

        if (userResult.error) {
          console.warn(
            `[User Acknowledgement Note]: Could not deliver acknowledgement to ${email}: ${userResult.error.message}.`
          );
        } else {
          userEmailSent = true;
          console.log(`Automated acknowledgement email successfully sent to ${email} (ID: ${userResult.data?.id})`);
        }
      } catch (userErr: any) {
        console.warn(
          `[User Acknowledgement Note]: Delivery to ${email} failed: ${userErr?.message}. Verify custom domain in Resend to enable external deliveries.`
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry received successfully',
      meta: {
        adminAlertDispatched: adminEmailSent,
        acknowledgementDispatched: userEmailSent,
      },
    });
  } catch (error: any) {
    console.error('Error in /api/contact route:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
