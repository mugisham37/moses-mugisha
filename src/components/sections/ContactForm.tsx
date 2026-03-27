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
