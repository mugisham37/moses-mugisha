'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import { Footer } from '@/components/layout/Footer';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { MiscItem } from '@/components/sections/MiscItem';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';
import { projects, homeServiceTags } from '@/lib/data';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  return (
    <motion.div
      ref={ref}
      variants={fadeSlideUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <ThreeColumnLayout
        left={
          <>
            {/* "Hello! I'm Maelle." — Heading 1 */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <motion.h1
                variants={fadeSlideUp}
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '56px',
                  fontWeight: 500,
                  lineHeight: '1em',
                  letterSpacing: '-0.05em',
                  color: '#121212',
                  width: '100%',
                }}
              >
                Hello! I&apos;m Maelle.
              </motion.h1>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '400px' }}
            >
              {(['x', 'instagram', 'dribbble'] as const).map((platform) => (
                <motion.div key={platform} variants={fadeSlideUp}>
                  <SocialIcon
                    platform={platform}
                    href={platform === 'x' ? 'https://x.com' : platform === 'instagram' ? 'https://instagram.com' : 'https://dribbble.com'}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Service tags */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}
            >
              {homeServiceTags.map((tag) => (
                <motion.div key={tag.label} variants={fadeSlideUp}>
                  <MiscItem label={tag.label} active={tag.active} />
                </motion.div>
              ))}
            </motion.div>
          </>
        }
        middle={
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Sticky description block */}
            <div
              style={{
                position: 'sticky',
                top: '140px',
                zIndex: 1,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingBottom: '8px',
              }}
            >
              <ScrollReveal>
                <h2
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '26px',
                    fontWeight: 500,
                    lineHeight: '1.1em',
                    letterSpacing: '-0.04em',
                    color: '#121212',
                    maxWidth: '600px',
                  }}
                >
                  A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.
                </h2>
              </ScrollReveal>

              {/* 30vh invisible spacer — creates the scroll depth before work appears */}
              <div style={{ height: '30vh', opacity: 0, pointerEvents: 'none' }} />

              {/* Selected work title */}
              <ScrollReveal>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '18px',
                      fontWeight: 500,
                      lineHeight: '1.4em',
                      letterSpacing: '-0.03em',
                      color: '#121212',
                      flex: 1,
                    }}
                  >
                    Selected work
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '1.4em',
                      letterSpacing: '-0.03em',
                      color: '#121212',
                    }}
                  >
                    (10)
                  </span>
                </div>
              </ScrollReveal>
            </div>

            {/* Project cards */}
            <div
              style={{
                backgroundColor: '#ffffff',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {projects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.04}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom spacer */}
            <div style={{ paddingTop: '146px' }}>
              <div style={{ height: '40vh' }} />
            </div>
          </div>
        }
        right={
          <>
            {/* Profile */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Available badge */}
                <motion.div variants={fadeSlideUp} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '5px',
                      backgroundColor: '#757575',
                      transform: 'rotate(45deg)',
                      flexShrink: 0,
                    }}
                  />
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
                    Available for work
                  </span>
                </motion.div>

                {/* Profile photo — 186px h, aspect 0.758 */}
                <motion.div variants={fadeSlideUp} style={{ width: '100%' }}>
                  <div style={{ width: '100%', height: '186px', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src="/images/profile-home.jpg"
                      alt="Maelle profile"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="25vw"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Info lines */}
                <motion.div variants={fadeSlideUp} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {['Digital Designer', 'Based in France', 'Since 2013'].map((line) => (
                    <span
                      key={line}
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '1.4em',
                        letterSpacing: '-0.03em',
                        color: '#121212',
                      }}
                    >
                      {line}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Contact + copyright */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', width: '100%' }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px', overflow: 'hidden' }}>
                <motion.div variants={fadeSlideUp}>
                  <PrimaryButton label="hello@maelle.design" href="mailto:hello@maelle.design" size="16" />
                </motion.div>
                <motion.div variants={fadeSlideUp}>
                  <PrimaryButton label="(123) 456-7890" href="tel:+1234567890" size="14" />
                </motion.div>
              </div>
              <motion.span
                variants={fadeSlideUp}
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '1.4em',
                  letterSpacing: '-0.03em',
                  color: '#121212',
                  flexShrink: 0,
                }}
              >
                © 2025
              </motion.span>
            </motion.div>
          </>
        }
      />
      <Footer />
    </>
  );
}
