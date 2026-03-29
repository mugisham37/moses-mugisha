'use client';

import Link from 'next/link';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
import styles from './NotFound.module.css';

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
