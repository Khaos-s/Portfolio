import { useId, useRef, useState } from 'react';
import { profile } from '../../content/portfolio';
import useReveal from '../../lib/useReveal';
import Button from '../ui/Button';

const topics = ['Web development', 'Interface design', 'Collaboration', 'Something else'];
const initialForm = { name: '', email: '', subject: topics[0], message: '', website: '' };
export default function ContactPanel({ headingAs = 'h2' }) {
  const Heading = headingAs;
  const revealRef = useReveal();
  const statusId = useId();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: '', message: '' });
  const [sending, setSending] = useState(false);
  const submitting = useRef(false);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = async (event) => {
    event.preventDefault();
    if (submitting.current) return;
    if (['name', 'email', 'subject', 'message'].some((field) => !form[field].trim())) {
      setStatus({ state: 'error', message: 'Please complete every required field.' }); return;
    }
    submitting.current = true;
    setSending(true);
    setStatus({ state: '', message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
        signal: AbortSignal.timeout(15000),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || body?.ok !== true) throw new Error('Your message could not be sent. Please try again later. Your draft is still here.');
      setForm(initialForm);
      setStatus({ state: 'success', message: 'Thanks — your message has been sent. I’ll reply to the email you provided.' });
    } catch {
      setStatus({ state: 'error', message: 'Your message could not be sent. Please try again later. Your draft is still here.' });
    } finally { setSending(false); submitting.current = false; }
  };
  return (
    <div className="container contact-panel" ref={revealRef}>
      <div className="contact-copy">
        <Heading>Let’s build<br />something good.</Heading>
        <p className="contact-intro">A new project, an interface that needs a little care, or a conversation about what’s possible. I’d like to hear it.</p>
        <dl className="contact-details">
          <div><dt>Based in</dt><dd>{profile.location} <span className="timezone">GMT+8</span></dd></div>
          {profile.email && <div><dt>Email</dt><dd><a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>}
          {profile.socials.filter((social) => !social.isPlaceholder).map((social) => <div key={social.label}><dt>Elsewhere</dt><dd><a className="text-link" href={social.href} target="_blank" rel="noreferrer">{social.label} ↗<span className="sr-only"> (new tab)</span></a></dd></div>)}
        </dl>
      </div>
      <form className="form-grid" onSubmit={submit} aria-busy={sending} aria-describedby={statusId}>
        <div className="form-heading"><h3>Tell me a little about it.</h3><p className="form-note">All fields are required.</p></div>
        <div className="form-row">
          <label className="field">Your name<input name="name" autoComplete="name" placeholder="Your full name" maxLength={100} value={form.name} onChange={update} required disabled={sending} /></label>
          <label className="field">Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} value={form.email} onChange={update} required disabled={sending} /></label>
        </div>
        <fieldset className="topic-field" disabled={sending}><legend>What’s this about?</legend><div className="topic-options">{topics.map((topic) => <label key={topic}><input type="radio" name="subject" value={topic} checked={form.subject === topic} onChange={update} required /><span>{topic}</span></label>)}</div></fieldset>
        <label className="field">Your message<textarea name="message" placeholder="The idea, the goal, and what you have in mind…" maxLength={5000} value={form.message} onChange={update} required disabled={sending} /></label>
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} /></label>
        <Button disabled={sending} type="submit">{sending ? 'Sending…' : 'Send message ↗'}</Button>
        <p className="form-note privacy-note">Your email is only used to reply to this conversation.</p>
        <p id={statusId} className="form-status" data-state={status.state} role="status">{status.message}</p>
      </form>
    </div>
  );
}
