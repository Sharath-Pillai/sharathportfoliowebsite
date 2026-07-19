import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/emailService.js';

const router = express.Router();

// ─── POST /api/contact ─────────────────────────────────────────────────────────
// Validates input, saves to MongoDB, and sends notification email.
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // ── Validation ────────────────────────────────────────────────────────────────
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  // ── Check email credentials configured ───────────────────────────────────────
  const emailConfigured =
    process.env.EMAIL_SENDER && process.env.EMAIL_PASSWORD;

  if (!emailConfigured) {
    console.warn('[Contact] Email credentials not configured in .env');
    return res.status(503).json({
      success: false,
      message:
        'Email service is not configured yet. Please email spillai.developer@gmail.com directly.',
    });
  }

  // ── Save to MongoDB ───────────────────────────────────────────────────────────
  let savedContact;
  try {
    savedContact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ip: req.ip || null,
      emailSent: false,
    });
  } catch (dbErr) {
    console.error('[Contact] MongoDB save error:', dbErr);
    return res.status(500).json({
      success: false,
      message: 'Failed to save your message. Please try again.',
    });
  }

  // ── Send Email ────────────────────────────────────────────────────────────────
  try {
    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });

    // Mark as sent in DB
    savedContact.emailSent = true;
    await savedContact.save();

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (emailErr) {
    console.error('[Contact] Email send error:', emailErr);
    // Message was saved to DB even if email failed
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email directly.',
    });
  }
});

// ─── GET /api/contact ──────────────────────────────────────────────────────────
// Returns all stored contact messages (admin/debugging use).
router.get('/', async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: contacts });
  } catch (err) {
    console.error('[Contact] Fetch error:', err);
    return res.status(500).json({ success: false, message: 'Failed to fetch contacts.' });
  }
});

export default router;
