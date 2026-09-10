import { useState } from 'react';
import { profile } from '../content/portfolio';
import useSeo from '../lib/seo';

const initialForm = { name: '', email: '', subject: '', message: '', website: '' };

export default function ContactPage() {
  useSeo('Contact', `Contact ${profile.name} about frontend development and web projects.`);
  const [form, setForm] = useState(initialForm); const [status, setStatus] = useState(''); const [sending, setSending] = useState(false);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event) => {
    event.preventDefault(); setStatus('');
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) { setStatus('Please complete every required field.'); return; }
    setSending(true);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || 'Unable to send your message right now.');
      setForm(initialForm); setStatus('Thanks — your message has been sent.');
    } catch (error) { setStatus(error.message || 'Unable to send your message right now.'); } finally { setSending(false); }
  };
  return <div className="page"><div className="container contact-panel"><div><p className="eyebrow">Contact</p><h2>Let’s make something useful.</h2><p>Share your goal, the kind of help you need, and your timeline. You will receive a response through the email address you provide.</p><p className="muted">Prefer email? Replace this placeholder with a verified address before launch: {profile.email}</p></div><form className="form-grid" onSubmit={submit}><label className="field">Name<input name="name" autoComplete="name" maxLength="100" value={form.name} onChange={update} required /></label><label className="field">Email<input name="email" type="email" autoComplete="email" maxLength="254" value={form.email} onChange={update} required /></label><label className="field">Subject<input name="subject" maxLength="150" value={form.subject} onChange={update} required /></label><label className="field">Message<textarea name="message" maxLength="5000" value={form.message} onChange={update} required /></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={update} /></label><button className="button button-primary" disabled={sending} type="submit">{sending ? 'Sending…' : 'Send message'}</button><p className="form-status" aria-live="polite">{status}</p></form></div></div>;
}
