'use client';

import { useState } from 'react';

// Contact form from Framer MCP: Contact page / HideSIC3k
// Fields: Name*, Email*, Phone, Message*
// Submit button: Form / ca98dNjoE — "Send Message", Inter SemiBold 16px
// Field labels: 14 medium Geist

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #e3e3e3',
  padding: '12px 0',
  fontFamily: 'var(--font-geist)',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '1.4em',
  letterSpacing: '-0.03em',
  color: '#121212',
  backgroundColor: 'transparent',
  outline: 'none',
  transition: 'border-color 0.2s ease-out',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-geist)',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '1.4em',
  letterSpacing: '-0.03em',
  color: '#757575',
  display: 'block',
  marginBottom: '4px',
};

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    // Simulate send — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Name */}
      <div>
        <label htmlFor="name" style={labelStyle}>Name*</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#121212')}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e3e3e3')}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" style={labelStyle}>Email*</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#121212')}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e3e3e3')}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" style={labelStyle}>Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(optional)"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#121212')}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e3e3e3')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>Message*</label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project…"
          rows={5}
          style={{ ...inputStyle, resize: 'none', lineHeight: '1.6em' }}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#121212')}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#e3e3e3')}
        />
      </div>

      {/* Submit */}
      <div style={{ paddingTop: '8px', paddingBottom: '8px' }}>
        {status === 'success' ? (
          <p
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              color: '#121212',
            }}
          >
            Message sent — I'll be in touch soon.
          </p>
        ) : (
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '1em',
              letterSpacing: '-0.03em',
              color: status === 'loading' ? '#757575' : '#121212',
              background: 'none',
              border: 'none',
              cursor: status === 'loading' ? 'default' : 'pointer',
              padding: '0',
              transition: 'color 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
              if (status !== 'loading') e.currentTarget.style.color = '#757575';
            }}
            onMouseLeave={(e) => {
              if (status !== 'loading') e.currentTarget.style.color = '#121212';
            }}
          >
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        )}
      </div>
    </form>
  );
}
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="divider" />
      <div className={styles.fields}>
        <div className={styles.field}>
          <label className="text-14">Name*</label>
          <input
            type="text"
            className="form-field"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className={styles.field}>
          <label className="text-14">Email*</label>
          <input
            type="email"
            className="form-field"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className={styles.field}>
          <label className="text-14">Phone</label>
          <input
            type="tel"
            className="form-field"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div className={styles.field}>
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
          className={`primary-button btn-16-semibold ${styles.submitBtn}`}
          disabled={isDisabled || status === 'loading'}
          style={{ opacity: isDisabled ? 0.5 : 1 }}
        >
          {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error — Try Again' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
.form {
  width: 100%;
  padding: 32px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 1;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.submitBtn {
  padding: 8px 0;
  text-align: left;
  transition: opacity 0.2s ease;
}

.submitBtn:disabled {
  cursor: not-allowed;
}
