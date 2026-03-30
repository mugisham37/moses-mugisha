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
          <div className="w-full flex flex-col items-center">
            <AnimatedContainer className="sticky top-35 z-1 w-full flex flex-col gap-4 pb-10 max-tablet:relative max-tablet:top-0">
              <AnimatedItem>
                <h1 className="heading-1">404 — Page Not Found!</h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-16 max-w-130">
                  It seems like you&apos;ve stumbled upon a page that doesn&apos;t exist.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedItem>
              <div className="w-full flex gap-2 items-end">
                <Link href="/" className="primary-button btn-16-semibold">
                  Back to Home
                </Link>
              </div>
            </AnimatedItem>

            <div className="pt-36.5">
              <div className="h-[40vh] opacity-0" />
            </div>
          </div>
        }
        right={<div />}
      />
      <Footer />
    </>
  );
}
