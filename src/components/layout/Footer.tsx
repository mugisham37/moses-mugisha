'use client';

import { useState } from 'react';
import Link from 'next/link';

// Footer: matches Framer template SG76OHdGT
// Dark mode: hover over ticker section → bg #121212, text white
// Ticker uses CSS @keyframes ticker from globals.css (no react-fast-marquee needed)

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const textColor = isHovered ? '#ffffff' : '#121212';
  const dimColor = isHovered ? 'rgba(255,255,255,0.5)' : '#757575';
  const dividerColor = isHovered ? 'rgba(255,255,255,0.2)' : '#e3e3e3';
  const transition = 'color 0.3s ease, background-color 0.3s ease';

  return (
    <>
      <footer
        className="footer-container"
        style={{
          display: 'flex',
          gap: '32px',
          padding: '0px 20px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Left spacer — matches left column width */}
        <div
          className="footer-spacer"
          style={{ width: '20%', flexShrink: 0, opacity: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        />

        {/* Main container */}
        <div
          className="footer-main"
          style={{
            flex: 1,
            minWidth: 0,
            borderTop: '1px solid #e3e3e3',
            borderLeft: '1px solid #e3e3e3',
            borderRight: '1px solid #e3e3e3',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: isHovered ? '#121212' : '#ffffff',
            transition: 'background-color 0.3s ease',
          }}
        >
          {/* Top spacer */}
          <div style={{ height: '20vh' }} />

          {/* Top divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: dividerColor, transition }} />

          {/* Ticker section — hover triggers dark mode */}
          <Link
            href="/contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              display: 'block',
              textDecoration: 'none',
              overflow: 'hidden',
              height: '100px',
            }}
          >
            <div
              className="ticker-track"
              style={{ animationDuration: '40s' }}
            >
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-flex',
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
                      backgroundColor: dimColor,
                      transform: 'rotate(45deg)',
                      flexShrink: 0,
                      transition: 'background-color 0.3s ease',
                    }}
                  />
                  {/* Text */}
                  <span
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '80px',
                      fontWeight: 500,
                      lineHeight: '1em',
                      letterSpacing: '-0.04em',
                      color: textColor,
                      transition,
                    }}
                  >
                    Let&apos;s Talk
                  </span>
                </span>
              ))}
            </div>
          </Link>

          {/* Bottom divider */}
          <div style={{ width: '100%', height: '1px', backgroundColor: dividerColor, transition }} />

          {/* Bottom spacer */}
          <div style={{ height: '20vh' }} />

          {/* Bottom bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px 8px 16px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '1.4em',
                letterSpacing: '-0.03em',
                color: textColor,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition,
              }}
            >
              Created by{' '}
              <a
                href="https://thaer.shop"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: dimColor,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  transition,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = isHovered ? '#ffffff' : '#121212')}
                onMouseLeave={(e) => (e.currentTarget.style.color = isHovered ? 'rgba(255,255,255,0.5)' : '#757575')}
              >
                Thaer
              </a>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '1.4em',
                letterSpacing: '-0.03em',
                color: textColor,
                transition,
              }}
            >
              © 2025 All rights reserved
            </span>
          </div>
        </div>

        {/* Right spacer */}
        <div
          className="footer-spacer"
          style={{ width: '20%', flexShrink: 0, opacity: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        />
      </footer>

      <style>{`
        @media (max-width: 1199px) {
          .footer-spacer { display: none !important; }
          .footer-container { gap: 0 !important; padding: 0 !important; }
          .footer-main {
            border-left: none !important;
            border-right: none !important;
          }
        }
        @media (max-width: 809px) {
          .ticker-track span[style*="80px"] { font-size: 40px !important; }
        }
      `}</style>
    </>
  );
}
