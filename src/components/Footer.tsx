'use client';

import Link from 'next/link';
import { FooterTicket } from './FooterTicket';

// Footer from Framer MCP: Footer / SG76OHdGT
// Structure: invisible left spacer (25%) | container (flex-1) with ticker + bottom bar
// Container: border top+left+right Light Gray
// Bottom bar: "Created by Thaer" (left) + "© 2025 All rights reserved" (right)
// 14 medium: Geist 500, 14px, lh:1.4em, ls:-0.03em

export function Footer() {
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
        style={{
          width: '25%',
          flexShrink: 0,
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Container */}
      <div
        className="footer-main"
        style={{
          flex: 1,
          borderTop: '1px solid #e3e3e3',
          borderLeft: '1px solid #e3e3e3',
          borderRight: '1px solid #e3e3e3',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* 20vh spacer above ticker */}
        <div style={{ height: '20vh' }} />

        {/* "Let's Talk" ticker */}
        <FooterTicket href="/contact" />

        {/* 20vh spacer below ticker */}
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
              color: '#121212',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Created by{' '}
            <a
              href="https://thaer.shop"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#757575',
                textDecoration: 'none',
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                transition: 'color 0.2s ease-out',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#121212')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
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
              color: '#121212',
            }}
          >
            © 2025 All rights reserved
          </span>
        </div>
      </div>

      {/* Right spacer */}
      <div
        className="footer-spacer"
        style={{
          width: '25%',
          flexShrink: 0,
          opacity: 0,
          pointerEvents: 'none',
        }}
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
    `}</style>
    </>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import styles from './Footer.module.css';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Spacer */}
        <div style={{ height: '20vh' }} />

        {/* Let's Talk Ticker */}
        <Link
          href="/contact"
          className={`${styles.tickerSection} ${isHovered ? styles.tickerHovered : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
          <div className={styles.tickerWrap}>
            <Marquee speed={50} direction="left" gradient={false} pauseOnHover={false}>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let&apos;s Talk</span>
              </div>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let&apos;s Talk</span>
              </div>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let&apos;s Talk</span>
              </div>
            </Marquee>
          </div>
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
        </Link>

        {/* Spacer */}
        <div style={{ height: '20vh' }} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.createdBy}>
            <span className="text-14">Created by</span>
            <a
              href="https://thaer.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button btn-14-medium"
            >
              Thaer
            </a>
          </div>
          <div className={styles.copyright}>
            <span className="text-14">© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
.footer {
  display: flex;
  gap: 32px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.footer::before,
.footer::after {
  content: '';
  width: 25%;
  flex-shrink: 0;
}

.container {
  flex: 1;
  background: var(--white);
  border: 1px solid var(--light-gray);
  border-bottom: none;
  z-index: 1;
  overflow: hidden;
  padding-bottom: 8px;
}

.tickerSection {
  display: block;
  text-decoration: none;
  color: var(--black);
  background: var(--white);
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.tickerHovered {
  background-color: var(--black) !important;
  color: var(--white) !important;
}

.tickerWrap {
  height: 100px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.tickerItem {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
}

.tickerText {
  white-space: nowrap;
}

.bottom {
  display: flex;
  gap: 8px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
}

.createdBy {
  display: flex;
  gap: 2px;
  align-items: center;
  flex: 1;
}

.copyright {
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  flex: 1;
}

@media (max-width: 1199px) {
  .footer::before,
  .footer::after {
    display: none;
  }
}

@media (max-width: 809px) {
  .bottom {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }

  .tickerWrap {
    height: 70px;
  }

  .tickerText {
    font-size: 40px !important;
  }
}
