import nodemailer from 'nodemailer';

/**
 * Basic HTML entity escaping to prevent XSS in emails.
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  // Check email credentials configured
  if (!process.env.EMAIL_SENDER || !process.env.EMAIL_PASSWORD) {
    console.warn('[Contact] Email credentials not configured in env');
    return res.status(503).json({
      success: false,
      message: 'Email service is not configured. Please email spillai.developer@gmail.com directly.',
    });
  }

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_SMTP_PORT || '587', 10),
    secure: false, // STARTTLS on port 587
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f8fafc; padding:24px; border-radius:12px;">
      <h2 style="color: #6366f1; margin-bottom: 16px;">?? New Portfolio Message</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0; color:#64748b; font-weight:bold; width:80px;">Name:</td>
          <td style="padding:8px 0; color:#1e293b;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#64748b; font-weight:bold;">Email:</td>
          <td style="padding:8px 0; color:#1e293b;">
            <a href="mailto:${escapeHtml(email)}" style="color:#6366f1;">${escapeHtml(email)}</a>
          </td>
        </tr>
      </table>
      <hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0;" />
      <p style="color:#64748b; font-weight:bold; margin-bottom:8px;">Message:</p>
      <div style="white-space:pre-wrap; background:#ffffff; padding:16px; border-radius:8px; border:1px solid #e2e8f0; color:#1e293b; line-height:1.6;">
        ${escapeHtml(message)}
      </div>
      <p style="margin-top:24px; font-size:12px; color:#94a3b8;">
        Sent via Sharath Pillai Portfolio Contact Form
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_SENDER}>`,
      to: process.env.EMAIL_RECIPIENT || 'spillai.developer@gmail.com',
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio Contact from ${name}`,
      html: htmlBody,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (err) {
    console.error('[Contact] Email send error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email directly.',
    });
  }
}
