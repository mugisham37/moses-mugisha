'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        gap: '16px',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '56px',
          fontWeight: 500,
          lineHeight: '1em',
          letterSpacing: '-0.05em',
          color: '#121212',
        }}
      >
        404.
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.4em',
          letterSpacing: '-0.03em',
          color: '#757575',
        }}
      >
        Page not found.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '1em',
          letterSpacing: '-0.03em',
          color: '#757575',
          textDecoration: 'none',
          marginTop: '8px',
          transition: 'color 0.2s ease-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#121212')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
      >
        ← Back home
      </Link>
    </div>
  );
}
