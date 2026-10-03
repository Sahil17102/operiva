'use client';

import { ArrowUpRight } from 'lucide-react';
import { SyntheticEvent, useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string, fallback = '') => {
      const entry = data.get(name);
      return typeof entry === 'string' && entry.trim() ? entry : fallback;
    };
    const message = [
      'Hi Opervia, I would like to discuss a project.',
      `Name: ${value('name')}`,
      `Business: ${value('business', 'Not specified')}`,
      `Requirement: ${value('requirement')}`,
      `Details: ${value('details', 'I would like to connect.')}`,
    ].join('\n');
    setSent(true);
    window.open(`https://wa.me/919588358750?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>Your name<input name="name" placeholder="What should we call you?" required /></label>
        <label>Business / brand<input name="business" placeholder="Your company name" /></label>
      </div>
      <label>What do you need?
        <select name="requirement" defaultValue="Website design & development">
          <option>Website design & development</option>
          <option>Business automation</option>
          <option>E-commerce experience</option>
          <option>Dashboard or web app</option>
          <option>SEO & conversion optimisation</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Tell us about the goal<textarea name="details" placeholder="What are you looking to build or improve?" rows={5} /></label>
      <button type="submit">Send on WhatsApp <ArrowUpRight size={18} /></button>
      <small>{sent ? 'WhatsApp opened with your project brief.' : 'No spam. Your details are only used to respond to this enquiry.'}</small>
    </form>
  );
}
