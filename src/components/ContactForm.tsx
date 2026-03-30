'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const isDisabled = !form.name || !form.email || !form.message;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <form className="w-full pt-8 pb-5 flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="divider" />
      <div className="flex flex-col gap-6 z-1">
        <div className="flex flex-col gap-1">
          <label className="text-14">Name*</label>
          <input
            type="text"
            className="form-field"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-14">Email*</label>
          <input
            type="email"
            className="form-field"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-14">Phone</label>
          <input
            type="tel"
            className="form-field"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-14">Message*</label>
          <textarea
            className="form-field"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className={`primary-button btn-16-semibold py-2 text-left transition-opacity duration-200 disabled:cursor-not-allowed ${isDisabled ? 'opacity-50' : 'opacity-100'}`}
          disabled={isDisabled || status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error — Try Again' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
