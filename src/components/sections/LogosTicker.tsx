'use client';

import { logoTickers } from '@/lib/data';

// Infinite horizontal marquee ticker
// From Framer: gap:20, speed:20 (maps to CSS animation duration)
export function LogosTicker() {
  // Duplicate logos for seamless infinite scroll
  const logos = [...logoTickers, ...logoTickers];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid #e3e3e3',
        borderBottom: '1px solid #e3e3e3',
        padding: '24px 0',
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
          width: 'max-content',
          animationDuration: '20s',
        }}
      >
        {logos.map((src, i) => (
          <div
            key={i}
            style={{
              height: '39px',
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Brand logo ${(i % logoTickers.length) + 1}`}
              style={{ height: '39px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
