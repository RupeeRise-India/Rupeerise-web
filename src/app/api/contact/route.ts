import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { type, email, name, phone, company, interest, message, service, timeline } = data;

    let adminSubject = 'New Enquiry Received';
    
    const row = (label: string, value: string) => `
      <tr>
        <td style="padding: 12px 10px; border-bottom: 1px solid #eaeaea; color: #555; width: 120px; vertical-align: top;"><strong>${label}:</strong></td>
        <td style="padding: 12px 10px; border-bottom: 1px solid #eaeaea; color: #111; vertical-align: top;">${value}</td>
      </tr>
    `;
    
    let adminDetails = '';
    
    let userSubject = 'We have received your enquiry';
    let userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #c7a468; margin-top: 0;">Rupee Rise Ventures</h2>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">Thank you for reaching out to us. We have received your enquiry and a member of our team will get back to you shortly.</p>
        <p style="color: #333; font-size: 16px; line-height: 1.5;">Best regards,<br/>The Rupee Rise Team</p>
        <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
        <p style="font-size: 12px; color: #999; margin-bottom: 0;">This is an automated message, please do not reply directly to this email.</p>
      </div>
    `;

    if (type === 'Contact') {
      adminSubject = `New Contact Form Submission from ${name}`;
      adminDetails = `
        ${row('Name', name || 'N/A')}
        ${row('Email', email || 'N/A')}
        ${row('Phone', phone || 'N/A')}
        ${row('Company', company || 'N/A')}
        ${row('Interest', interest || 'N/A')}
        ${row('Message', message ? String(message).replace(/\\n/g, '<br/>') : 'N/A')}
      `;
    } else if (type === 'Investor') {
      adminSubject = `New Investor Consultation Request from ${name}`;
      adminDetails = `
        ${row('Name', name || 'N/A')}
        ${row('Email', email || 'N/A')}
        ${row('Phone', phone || 'N/A')}
        ${row('Service', service || 'N/A')}
        ${row('Timeline', timeline || 'N/A')}
        ${row('Message', message ? String(message).replace(/\\n/g, '<br/>') : 'N/A')}
      `;
    } else if (type === 'Learning') {
      adminSubject = `New Learning Notification Signup: ${email}`;
      adminDetails = `
        ${row('Email', email || 'N/A')}
      `;
      userSubject = 'You are on the list!';
      userHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #c7a468; margin-top: 0;">Rupee Rise Ventures</h2>
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Thank you for signing up! You're on the list to receive updates about our learning programs.</p>
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Best regards,<br/>The Rupee Rise Team</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999; margin-bottom: 0;">This is an automated message, please do not reply directly to this email.</p>
        </div>
      `;
    }

    let adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #fafafa;">
        <h2 style="color: #c7a468; margin-top: 0; padding-bottom: 15px; border-bottom: 2px solid #eaeaea;">New Enquiry: ${type}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          ${adminDetails}
        </table>
        <p style="font-size: 12px; color: #999; margin-top: 30px; text-align: center;">This notification was sent securely from Rupee Rise Ventures.</p>
      </div>
    `;

    try {
      await resend.emails.send({
        from: 'Rupee Rise <onboarding@resend.dev>',
        to: ['karthikdude0022@gmail.com', 'rupeerise15@gmail.com'],
        subject: adminSubject,
        html: adminHtml,
      });
    } catch (e) {
      console.error("Admin email failed to send (this is expected in sandbox mode if these emails are not verified):", e);
    }

    try {
      await resend.emails.send({
        from: 'Rupee Rise <onboarding@resend.dev>',
        to: [email],
        subject: userSubject,
        html: userHtml,
      });
    } catch (e) {
      console.error("User email failed to send (this is expected in sandbox mode if the user's email is not verified):", e);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact route:', error);
    return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
  }
}
