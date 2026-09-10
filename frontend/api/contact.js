/* global process */
const MAX_LENGTHS = { name: 100, email: 254, subject: 150, message: 5000 };
const clean = (value) => typeof value === 'string' ? value.trim() : '';

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });
  const origin = request.headers.origin; const allowedOrigin = process.env.SITE_URL;
  if (allowedOrigin && origin && origin !== allowedOrigin) return response.status(403).json({ error: 'Invalid request origin.' });
  const name = clean(request.body?.name); const email = clean(request.body?.email); const subject = clean(request.body?.subject); const message = clean(request.body?.message); const website = clean(request.body?.website);
  if (website) return response.status(200).json({ ok: true });
  if (!name || !email || !subject || !message || !email.includes('@')) return response.status(400).json({ error: 'Please provide valid contact details.' });
  if (Object.entries({ name, email, subject, message }).some(([key, value]) => value.length > MAX_LENGTHS[key])) return response.status(400).json({ error: 'One or more fields are too long.' });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) return response.status(503).json({ error: 'The contact service has not been configured yet.' });
  try {
    const mailResponse = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: email, subject: `[Portfolio] ${subject}`, text: `From: ${name}\nEmail: ${email}\n\n${message}` }) });
    if (!mailResponse.ok) throw new Error('Provider error');
    return response.status(200).json({ ok: true });
  } catch { return response.status(502).json({ error: 'Unable to deliver your message right now.' }); }
}
