'use client';

// "Let's Talk" scrolling ticker banner
// From Framer: FooterTicket / eaQplVLns
// Heading 2 L: Geist 500, 80px, center, lh:1em, ls:-0.04em
// Ticker speed: 50 → animationDuration 50s
// Diamond separator: ◆ (Gray, 10×11px rotated 45°)

export function FooterTicket({ href = '/contact' }: { href?: string }) {
  const items = Array(8).fill('Let\u2019s Talk');

  return (
    <a
      href={href}
      style={{ display: 'block', textDecoration: 'none', overflow: 'hidden' }}
    >
      <div
        style={{
          borderTop: '1px solid #e3e3e3',
          borderBottom: '1px solid #e3e3e3',
          height: '100px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="ticker-track"
          style={{
            display: 'flex',
            gap: '0px',
            alignItems: 'center',
            width: 'max-content',
            animationDuration: '50s',
          }}
        >
          {[...items, ...items].map((text, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                paddingRight: '20px',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Diamond separator */}
              <span
                style={{
                  display: 'inline-block',
                  width: '10px',
                  height: '11px',
                  backgroundColor: '#757575',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                }}
              />
              {/* "Let's Talk" */}
              <span
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '80px',
                  fontWeight: 500,
                  lineHeight: '1em',
                  letterSpacing: '-0.04em',
                  color: '#121212',
                }}
              >
                {text}
              </span>
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
