export interface FormSubmission {
  type: 'Contact' | 'Investor' | 'Learning' | 'AcademyEnrolment' | 'AcademyCertification' | string;
  subType?: string;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  interest?: string;
  service?: string;
  timeline?: string;
  experience?: string;
  message?: string;
}

const INTEREST_LABELS: Record<string, string> = {
  'capitals': 'Capitals & Asset Management',
  'real-estate-india': 'Real Estate – India',
  'real-estate-dubai': 'Real Estate – Dubai',
  'investors': 'Investors & Portfolio Management',
  'consulting': 'Business Consulting & Strategy',
  'learning': 'Forex Trading Academy',
  'other': 'General / Other',
};

const SERVICE_LABELS: Record<string, string> = {
  'portfolio': 'Portfolio Management',
  'consulting': 'Business Consulting',
  'both': 'Both Portfolio Management & Business Consulting',
};

const TIMELINE_LABELS: Record<string, string> = {
  'short': 'Short Term (1 - 3 years)',
  'medium': 'Medium Term (3 - 7 years)',
  'long': 'Long Term (7+ years)',
};

function escapeHtml(text?: string): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function cleanPhoneForWhatsApp(phone?: string): string {
  if (!phone) return '917736680099';
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length > 0 ? digits : '917736680099';
}

/**
 * Generates an automated acknowledgement email sent to the user/submitter
 */
export function generateUserAcknowledgementEmail(submission: FormSubmission): {
  subject: string;
  html: string;
} {
  const { type, subType, name, email, phone, company, interest, service, timeline, experience, message } = submission;
  const firstName = name ? escapeHtml(name.split(' ')[0]) : 'there';
  const cleanPhone = cleanPhoneForWhatsApp(phone);

  const isInvestor = type === 'Investor';
  const isAcademy = type === 'Learning' || type === 'AcademyEnrolment' || type === 'AcademyCertification';
  const isCertification = type === 'AcademyCertification' || subType === 'Certification';

  let subject = 'Enquiry Received – Rupee Rise Ventures';
  let badgeText = 'ENQUIRY CONFIRMED';
  let mainHeading = 'Thank You for Reaching Out';
  let subHeading = 'A Multi-Business Venture Ecosystem';
  let introParagraph = `Thank you for contacting Rupee Rise Ventures. We have successfully logged your submission. A dedicated member of our team is reviewing your requirements and will reach out to you within 24 business hours.`;

  if (isInvestor) {
    subject = 'Consultation Request Received – Rupee Rise Investors';
    badgeText = 'PORTFOLIO & ASSET ADVISORY';
    mainHeading = 'Strategic Consultation Request Received';
    subHeading = 'Rupee Rise Ventures · Investors & Portfolio';
    introParagraph = `Thank you for requesting an investment consultation with Rupee Rise Ventures. We assist high-net-worth clients, business leaders, and family offices with disciplined capital structuring, portfolio management, and strategic growth. Our advisory desk will contact you shortly to schedule an initial discussion.`;
  } else if (isAcademy) {
    if (isCertification) {
      subject = 'Certification Enquiry Received – Rupee Rise Forex Trading Academy';
      badgeText = 'ACADEMY CERTIFICATION';
      mainHeading = 'Certification Enquiry Confirmed';
      subHeading = 'Rupee Rise Forex Trading Academy';
      introParagraph = `Thank you for reaching out regarding certification standards at the Rupee Rise Forex Trading Academy. An academic advisor will connect with you to review syllabus verification, assessment criteria, and credential issuance terms.`;
    } else {
      subject = 'Application Confirmed – Rupee Rise Forex Trading Academy';
      badgeText = 'ACADEMY ENROLMENT';
      mainHeading = 'Your Enrolment Request Is In';
      subHeading = 'Rupee Rise Forex Trading Academy';
      introParagraph = `Thank you for applying to the Rupee Rise Forex Trading Academy. We are thrilled to welcome you to our structured curriculum covering Price Action, Smart Money Concepts (SMC), and Inner Circle Trader (ICT) methodologies. Our academic coordinator will contact you within 24 hours with batch start dates, onboarding guides, and session details.`;
    }
  } else if (interest) {
    const formattedInterest = INTEREST_LABELS[interest] || interest;
    subject = `Enquiry Received (${formattedInterest}) – Rupee Rise Ventures`;
    badgeText = formattedInterest.toUpperCase();
  }

  // Build the details summary rows
  const summaryRows: { label: string; value: string }[] = [];
  if (name) summaryRows.push({ label: 'Full Name', value: escapeHtml(name) });
  if (email) summaryRows.push({ label: 'Email Address', value: escapeHtml(email) });
  if (phone) summaryRows.push({ label: 'Phone Number', value: escapeHtml(phone) });
  if (company) summaryRows.push({ label: 'Company / Org', value: escapeHtml(company) });
  if (interest) summaryRows.push({ label: 'Interest Area', value: escapeHtml(INTEREST_LABELS[interest] || interest) });
  if (service) summaryRows.push({ label: 'Service Required', value: escapeHtml(SERVICE_LABELS[service] || service) });
  if (timeline) summaryRows.push({ label: 'Investment Horizon', value: escapeHtml(TIMELINE_LABELS[timeline] || timeline) });
  if (experience) summaryRows.push({ label: 'Trading Experience', value: escapeHtml(experience) });
  if (message) summaryRows.push({ label: 'Your Notes / Message', value: escapeHtml(message).replace(/\n/g, '<br/>') });

  const summaryRowsHtml = summaryRows
    .map(
      (row) => `
      <tr>
        <td style="padding: 10px 14px; font-size: 13px; color: #a5a7ad; width: 38%; border-bottom: 1px solid #23252c; vertical-align: top;">
          <strong>${row.label}</strong>
        </td>
        <td style="padding: 10px 14px; font-size: 13px; color: #f2eee7; border-bottom: 1px solid #23252c; vertical-align: top;">
          ${row.value}
        </td>
      </tr>
    `
    )
    .join('');

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0a0b0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f2eee7; }
    table { border-collapse: collapse; }
    a { color: #c9a96a; text-decoration: none; }
    @media only screen and (max-width: 620px) {
      .container { width: 100% !important; padding: 12px !important; }
      .header-pad { padding: 28px 20px !important; }
      .content-pad { padding: 24px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0b0d; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0a0b0d; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Email Container (Max 600px) -->
        <table class="container" width="600" border="0" cellspacing="0" cellpadding="0" style="width: 600px; max-width: 600px; background-color: #121317; border: 1px solid #26272e; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
          
          <!-- Top Accent Gold Line -->
          <tr>
            <td style="height: 4px; background: linear-gradient(90deg, #c9a96a 0%, #ecd9b3 50%, #c9a96a 100%); font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td class="header-pad" style="padding: 36px 36px 24px 36px; background-color: #121317; text-align: center; border-bottom: 1px solid #1f2026;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <!-- Brand Name / Logo Text -->
                    <div style="font-size: 20px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #f2eee7;">
                      RUPEE RISE <span style="color: #c9a96a;">VENTURES</span>
                    </div>
                    <div style="font-size: 10px; color: #8e9097; letter-spacing: 0.25em; text-transform: uppercase; margin-top: 6px;">
                      FINANCE · STRATEGY · GROWTH
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td class="content-pad" style="padding: 36px 36px 28px 36px; background-color: #121317;">
              
              <!-- Badge -->
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="background-color: rgba(201, 169, 106, 0.12); border: 1px solid rgba(201, 169, 106, 0.3); border-radius: 20px; padding: 4px 12px; font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a96a;">
                    ${escapeHtml(badgeText)}
                  </td>
                </tr>
              </table>

              <!-- Heading -->
              <h1 style="margin: 0 0 10px 0; font-size: 26px; font-weight: 600; color: #ffffff; letter-spacing: -0.02em; line-height: 1.25;">
                ${escapeHtml(mainHeading)}
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 13px; color: #c9a96a; font-weight: 500; letter-spacing: 0.05em;">
                ${escapeHtml(subHeading)}
              </p>

              <!-- Greeting & Message -->
              <p style="margin: 0 0 16px 0; font-size: 15px; line-height: 1.6; color: #e2ded7;">
                Hello ${firstName},
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.65; color: #a9abb1;">
                ${introParagraph}
              </p>

              <!-- Submission Summary Card -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #17181e; border: 1px solid #23252c; border-radius: 12px; margin: 24px 0 28px 0; overflow: hidden;">
                <tr>
                  <td style="padding: 12px 14px; background-color: #1c1d24; border-bottom: 1px solid #282a33; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #c9a96a;">
                    Summary of Your Submission
                  </td>
                </tr>
                <tr>
                  <td style="padding: 4px 0;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      ${summaryRowsHtml}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What to Expect Box -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, rgba(201, 169, 106, 0.08) 0%, rgba(18, 19, 23, 0) 100%); border-left: 3px solid #c9a96a; padding: 18px 20px; border-radius: 0 12px 12px 0; margin-bottom: 30px;">
                <tr>
                  <td>
                    <div style="font-size: 13px; font-weight: 700; color: #f2eee7; margin-bottom: 6px; letter-spacing: 0.02em;">
                      What happens next?
                    </div>
                    <div style="font-size: 13px; line-height: 1.55; color: #a2a4aa;">
                      Our advisory desk has been notified. A partner or specialist will evaluate your request and get in touch with relevant materials, scheduling options, or next steps.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Direct Contact Buttons -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding-top: 10px;">
                    <table border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 30px; background-color: #c9a96a; padding: 12px 28px;">
                          <a href="https://wa.me/917736680099" target="_blank" style="color: #0a0b0d; font-size: 12px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; text-decoration: none; display: inline-block;">
                            Chat on WhatsApp &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #0e0f12; padding: 30px 36px; border-top: 1px solid #1f2026; text-align: center;">
              <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #f2eee7;">
                Rupee Rise Ventures
              </p>
              <p style="margin: 0 0 14px 0; font-size: 12px; color: #8e9097; line-height: 1.5;">
                Kochi · Trivandrum · Hyderabad · Bangalore · Dubai
              </p>
              <p style="margin: 0 0 14px 0; font-size: 12px; color: #8e9097;">
                Email: <a href="mailto:info@rupeeriseventures.com" style="color: #c9a96a;">info@rupeeriseventures.com</a> &nbsp;|&nbsp; 
                Phone: <a href="tel:+917736680099" style="color: #c9a96a;">+91 77366 80099</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #58595f;">
                &copy; 2026 Rupee Rise Ventures. All rights reserved.<br/>
                This is an automated confirmation sent regarding your website submission.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return { subject, html };
}

/**
 * Generates an internal notification email sent to the Rupee Rise admin/advisory team
 */
export function generateAdminNotificationEmail(submission: FormSubmission): {
  subject: string;
  html: string;
} {
  const { type, subType, name, email, phone, company, interest, service, timeline, experience, message } = submission;
  const isInvestor = type === 'Investor';
  const isAcademy = type === 'Learning' || type === 'AcademyEnrolment' || type === 'AcademyCertification';
  const isCertification = type === 'AcademyCertification' || subType === 'Certification';

  let formLabel = 'General Contact Form';
  if (isInvestor) formLabel = 'Investor & Portfolio Consultation';
  else if (isAcademy) formLabel = isCertification ? 'Academy Certification Enquiry' : 'Academy Course Enrolment';
  else if (interest) formLabel = `Contact Form (${INTEREST_LABELS[interest] || interest})`;

  const subject = `[New Lead - ${formLabel}] ${name || email} · Rupee Rise Web`;
  const cleanPhone = cleanPhoneForWhatsApp(phone);
  const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });

  const rows: { label: string; value: string }[] = [
    { label: 'Form Source', value: `<strong>${escapeHtml(formLabel)}</strong>` },
    { label: 'Submission Time', value: `${now} (IST)` },
    { label: 'Name', value: escapeHtml(name || 'Not provided') },
    { label: 'Email', value: email ? `<a href="mailto:${escapeHtml(email)}" style="color: #c9a96a; font-weight: bold;">${escapeHtml(email)}</a>` : 'Not provided' },
    { label: 'Phone', value: phone ? `<a href="tel:${escapeHtml(phone)}" style="color: #c9a96a; font-weight: bold;">${escapeHtml(phone)}</a>` : 'Not provided' },
  ];

  if (company) rows.push({ label: 'Company / Org', value: escapeHtml(company) });
  if (interest) rows.push({ label: 'Selected Interest', value: escapeHtml(INTEREST_LABELS[interest] || interest) });
  if (service) rows.push({ label: 'Requested Service', value: escapeHtml(SERVICE_LABELS[service] || service) });
  if (timeline) rows.push({ label: 'Investment Horizon', value: escapeHtml(TIMELINE_LABELS[timeline] || timeline) });
  if (experience) rows.push({ label: 'Trading Experience', value: escapeHtml(experience) });
  if (message) rows.push({ label: 'Message / Notes', value: escapeHtml(message).replace(/\n/g, '<br/>') });

  const tableRowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding: 12px 14px; font-size: 13px; color: #777; width: 34%; border-bottom: 1px solid #eee; vertical-align: top;">
          <strong>${r.label}</strong>
        </td>
        <td style="padding: 12px 14px; font-size: 13px; color: #111; border-bottom: 1px solid #eee; vertical-align: top;">
          ${r.value}
        </td>
      </tr>
    `
    )
    .join('');

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="width: 600px; max-width: 600px; background: #ffffff; border: 1px solid #e1e4e8; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 4px; background-color: #c9a96a; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 24px 28px 18px 28px; background-color: #0a0b0d; color: #ffffff;">
              <div style="font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a96a; margin-bottom: 6px;">
                NEW INBOUND LEAD NOTIFICATION
              </div>
              <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff;">
                ${escapeHtml(formLabel)}
              </h2>
            </td>
          </tr>

          <!-- Content Table -->
          <tr>
            <td style="padding: 24px 28px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                ${tableRowsHtml}
              </table>

              <!-- Quick Action Buttons -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td>
                    ${
                      email
                        ? `<a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20Enquiry%20to%20Rupee%20Rise%20Ventures" style="display: inline-block; background-color: #0a0b0d; color: #c9a96a; padding: 10px 18px; border-radius: 6px; font-size: 12px; font-weight: 700; text-decoration: none; margin-right: 10px;">
                            Reply via Email &rarr;
                          </a>`
                        : ''
                    }
                    ${
                      phone
                        ? `<a href="https://wa.me/${cleanPhone}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; padding: 10px 18px; border-radius: 6px; font-size: 12px; font-weight: 700; text-decoration: none;">
                            Chat on WhatsApp
                          </a>`
                        : ''
                    }
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 16px 28px; background-color: #fafbfc; border-top: 1px solid #eaeaea; font-size: 11px; color: #888; text-align: center;">
              Rupee Rise Ventures Web Engine · Secure Inbound Dispatch
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  return { subject, html };
}
