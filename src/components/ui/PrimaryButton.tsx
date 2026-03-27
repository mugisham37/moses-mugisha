'use client';

// Primary button from Framer MCP: Primary / r1VqttKFg
// Two variants:
//   fwN_UQ2Tn (16px semibold) — email / main CTA
//   JB2E87_zQ (14px medium)  — phone / secondary
// Both are essentially styled text links with no background, padding 2px 0

interface PrimaryButtonProps {
  label: string;
  href: string;
  size?: '16' | '14';
  newTab?: boolean;
}

export function PrimaryButton({ label, href, size = '14', newTab = false }: PrimaryButtonProps) {
  const is16 = size === '16';

  return (
    <a
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      style={{
        fontFamily: 'var(--font-inter)',
        fontSize: is16 ? '16px' : '14px',
        fontWeight: is16 ? 600 : 500,
        lineHeight: '1em',
        letterSpacing: '-0.03em',
        color: '#757575',
        textDecoration: 'none',
        padding: '2px 0',
        transition: 'color 0.2s ease-out',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#121212')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
    >
      {label}
    </a>
  );
}
