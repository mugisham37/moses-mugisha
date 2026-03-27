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
'use client';

import Link from 'next/link';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';


export default function NotFound() {
  return (
    <>
      <ThreeColumnLayout
        left={<div />}
        middle={
          <div className={styles.middleContent}>
            <AnimatedContainer className={styles.titleArea}>
              <AnimatedItem>
                <h1 className="heading-1">404 — Page Not Found!</h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-16" style={{ maxWidth: 520 }}>
                  It seems like you&apos;ve stumbled upon a page that doesn&apos;t exist.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedItem>
              <div className={styles.buttonRow}>
                <Link href="/" className="primary-button btn-16-semibold">
                  Back to Home
                </Link>
              </div>
            </AnimatedItem>

            <div style={{ paddingTop: 146 }}>
              <div style={{ height: '40vh', opacity: 0 }} />
            </div>
          </div>
        }
        right={<div />}
      />
      <Footer />
    </>
  );
}
/* 404 Not Found Page Styles */

.middleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titleArea {
  position: sticky;
  top: 140px;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 40px;
}

.buttonRow {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

@media (max-width: 1199px) {
  .titleArea {
    position: relative;
    top: 0;
  }
}
