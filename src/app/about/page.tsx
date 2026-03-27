'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import { Footer } from '@/components/layout/Footer';
import { LogosTicker } from '@/components/sections/LogosTicker';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { ToolCard } from '@/components/sections/ToolCard';
import { ExperienceCard } from '@/components/sections/ExperienceCard';
import { AwardItem } from '@/components/sections/AwardItem';
import { MiscItem } from '@/components/sections/MiscItem';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { DownloadCV } from '@/components/sections/DownloadCV';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';
import { services, tools, experiences, awards, stats } from '@/lib/data';

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

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '16px', zIndex: 1, position: 'relative' }}>
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
        {title}
      </h2>
      <div style={{ height: '1px', backgroundColor: '#e3e3e3', width: '100%' }} />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <ThreeColumnLayout
        left={
          <>
            {/* "About Me." heading */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              style={{ width: '100%', overflow: 'hidden' }}
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
                }}
              >
                About Me.
              </motion.h1>
            </motion.div>

            {/* Profile photo — 213px h, aspect 0.751 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ width: '55%', overflow: 'hidden' }}
            >
              <div style={{ width: '100%', height: '213px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src="/images/profile-about.jpg"
                  alt="Maelle profile"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="15vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Bottom contact + socials */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}
            >
              <motion.div variants={fadeSlideUp}>
                <span
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    color: '#121212',
                  }}
                >
                  © 2013-25
                </span>
              </motion.div>
              <motion.div variants={fadeSlideUp} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <PrimaryButton label="hello@maelle.design" href="mailto:hello@maelle.design" size="16" />
                <PrimaryButton label="(123) 456-7890" href="tel:+1234567890" size="14" />
              </motion.div>
              <motion.div variants={fadeSlideUp} style={{ display: 'flex', gap: '8px' }}>
                <SocialIcon platform="x" href="https://x.com" />
                <SocialIcon platform="instagram" href="https://instagram.com" />
                <SocialIcon platform="dribbble" href="https://dribbble.com" />
              </motion.div>
            </motion.div>
          </>
        }
        middle={
          <div style={{ display: 'flex', flexDirection: 'column', gap: '120px', width: '100%' }}>
            {/* Bio text */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                  I&apos;m Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '1.4em',
                    letterSpacing: '-0.03em',
                    color: '#121212',
                    maxWidth: '520px',
                  }}
                >
                  Whether I&apos;m designing a brand&apos;s digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.
                </p>
              </div>
            </ScrollReveal>

            {/* Logos ticker */}
            <ScrollReveal>
              <LogosTicker />
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <SectionTitle title="Services" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {services.map((s, i) => (
                    <ScrollReveal key={s.title} delay={i * 0.06}>
                      <ServiceCard title={s.title} description={s.description} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Software Stack */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '26px',
                    fontWeight: 500,
                    lineHeight: '1.1em',
                    letterSpacing: '-0.04em',
                    color: '#121212',
                  }}
                >
                  Software Stack
                </h2>
                {/* Grid: auto-fill, minWidth 300px, gap 8px */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '8px',
                  }}
                >
                  {tools.map((tool, i) => (
                    <ScrollReveal key={tool.name} delay={i * 0.05}>
                      <ToolCard name={tool.name} description={tool.description} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Experience */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                    <h2
                      style={{
                        fontFamily: 'var(--font-geist)',
                        fontSize: '26px',
                        fontWeight: 500,
                        lineHeight: '1.1em',
                        letterSpacing: '-0.04em',
                        color: '#121212',
                        flex: 1,
                      }}
                    >
                      Experience
                    </h2>
                    <DownloadCV label="Download CV" href="#" />
                  </div>
                  <div style={{ height: '1px', backgroundColor: '#e3e3e3', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {experiences.map((exp, i) => (
                    <ScrollReveal key={exp.title} delay={i * 0.06}>
                      <ExperienceCard
                        title={exp.title}
                        company={exp.company}
                        dates={exp.dates}
                        description={exp.description}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* FAQs */}
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <SectionTitle title="FAQs" />
                <FAQAccordion />
              </div>
            </ScrollReveal>

            {/* Bottom spacer */}
            <div style={{ paddingTop: '146px' }}>
              <div style={{ height: '40vh' }} />
            </div>
          </div>
        }
        right={
          <>
            {/* Stats — MiscItem W5dONdDp9 variant */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}
            >
              {stats.map((stat, i) => (
                <motion.div key={stat.label} variants={fadeSlideUp}>
                  <MiscItem label={stat.label} value={stat.value} active={i < stats.length - 1} />
                </motion.div>
              ))}
            </motion.div>

            {/* Awards */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}
            >
              <motion.div variants={fadeSlideUp}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
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
                    Achievements
                  </span>
                  <div style={{ height: '1px', backgroundColor: '#e3e3e3', width: '100%' }} />
                </div>
              </motion.div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {awards.map((award, i) => (
                  <motion.div key={award.title} variants={fadeSlideUp}>
                    <AwardItem
                      title={award.title}
                      organization={award.organization}
                      year={award.year}
                      last={award.last}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        }
      />
      <Footer />
    </>
  );
}
