'use client';

// DownloadCV from Framer MCP: DownloadCv / cemOwIZ8I
// IconLeft variant: icon (14px) + text (Buttons/14 medium Inter 500), gap:4px
// Used in About page Experience section header

interface DownloadCVProps {
  label?: string;
  href?: string;
}

export function DownloadCV({ label = 'Download CV', href = '#' }: DownloadCVProps) {
  return (
    <a
      href={href}
      download
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontFamily: 'var(--font-inter)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1em',
        letterSpacing: '-0.03em',
        color: '#757575',
        textDecoration: 'none',
        transition: 'color 0.2s ease-out',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#121212')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
    >
      {/* Download icon (Phosphor DownloadSimple, 14×14) */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.625 9.625V11.375H11.375V9.625"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 2.625V8.75"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.375 6.125L7 8.75L9.625 6.125"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </a>
  );
}
