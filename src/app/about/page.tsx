'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Footer } from '@/components/Footer';
import { LogosTicker } from '@/components/LogosTicker';
import { ServiceCard } from '@/components/ServiceCard';
import { ToolCard } from '@/components/ToolCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { AwardItem } from '@/components/AwardItem';
import { MiscItem } from '@/components/MiscItem';
import { FAQAccordion } from '@/components/FAQAccordion';
import { DownloadCV } from '@/components/DownloadCV';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SocialIcon } from '@/components/SocialIcon';
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
      <PageLayout
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
'use client';

import Image from 'next/image';
import ThreeColumnLayout from '../../components/ThreeColumnLayout';
import ServiceCard from '../../components/ServiceCard';
import ToolsCard from '../../components/ToolsCard';
import ExperienceCard from '../../components/ExperienceCard';
import MiscRow from '../../components/MiscRow';
import AwardRow from '../../components/AwardRow';
import LogosTicker from '../../components/LogosTicker';
import FAQAccordion from '../../components/FAQAccordion';
import SocialIcons from '../../components/SocialIcons';
import ContactButtons from '../../components/ContactButtons';
import Footer from '../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../components/AnimatedPage';
import { images, serviceDetails, tools, experience, stats, awards, faqs } from '../../data/projects';
import { DownloadSimple } from '@phosphor-icons/react';


export default function About() {
  return (
    <>
      <ThreeColumnLayout
        left={<AboutLeft />}
        middle={<AboutMiddle />}
        right={<AboutRight />}
      />
      <Footer />
    </>
  );
}

function AboutLeft() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Top */}
      <AnimatedItem>
        <h1 className="heading-1">About Me.</h1>
      </AnimatedItem>

      {/* Middle — Profile photo */}
      <AnimatedItem>
        <div className={styles.leftPhoto}>
          <div className={styles.leftProfileImg}>
            <Image src={images.profileAbout} alt="Maelle" width={400} height={400} />
          </div>
          <span className="text-14">© 2013-25</span>
        </div>
      </AnimatedItem>

      {/* Bottom — Contact + Socials */}
      <AnimatedItem>
        <div className={styles.leftBottom}>
          <ContactButtons />
          <SocialIcons direction="horizontal" />
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}

function AboutMiddle() {
  return (
    <div className={styles.middleContent}>
      {/* Section 1 — Intro */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <p className="heading-2" style={{ maxWidth: 600 }}>
            I&apos;m Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-16" style={{ maxWidth: 520 }}>
            Whether I&apos;m designing a brand&apos;s digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.
          </p>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 2 — Logos Ticker */}
      <AnimatedItem className={styles.section} style={{ width: '100%' }}>
        <LogosTicker />
      </AnimatedItem>

      {/* Section 3 — Services */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <h2 className="heading-2">Services</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className={styles.serviceCards}>
          {serviceDetails.map((s) => (
            <AnimatedItem key={s.title}>
              <ServiceCard title={s.title} description={s.description} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* Section 4 — Software Stack */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <h2 className="heading-2">Software Stack</h2>
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.toolsGrid}>
            {tools.map((t) => (
              <ToolsCard key={t.name} name={t.name} description={t.description} />
            ))}
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 5 — Experience */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <div className={styles.experienceHeader}>
              <h2 className="heading-2" style={{ flex: 1 }}>Experience</h2>
              <a href="#" className={`primary-button btn-14-medium ${styles.downloadCv}`}>
                <DownloadSimple size={14} weight="regular" />
                <span>Download CV</span>
              </a>
            </div>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className={styles.experienceCards}>
          {experience.map((e) => (
            <AnimatedItem key={e.title}>
              <ExperienceCard
                title={e.title}
                company={e.company}
                period={e.period}
                description={e.description}
              />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* Section 6 — FAQs */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <h2 className="heading-2">FAQs</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <FAQAccordion items={faqs} />
        </AnimatedItem>
      </AnimatedContainer>

      {/* Bottom spacer */}
      <div style={{ paddingTop: 146 }}>
        <div style={{ height: '40vh', opacity: 0 }} />
      </div>
    </div>
  );
}

function AboutRight() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Stats */}
      <AnimatedItem>
        <div className={styles.statsBlock}>
          {stats.map((s) => (
            <MiscRow key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </AnimatedItem>

      {/* Awards */}
      <AnimatedItem>
        <div className={styles.awardsBlock}>
          <div className={styles.awardsTitle}>
            <span className="text-14">Achievements</span>
            <div className="divider" />
          </div>
          <div className={styles.awardsList}>
            {awards.map((a) => (
              <AwardRow key={a.title} title={a.title} org={a.org} year={a.year} hasLine={a.hasLine} />
            ))}
          </div>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
.middleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sectionTitle {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 16px;
  z-index: 1;
}

.experienceHeader {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  width: 100%;
}

.downloadCv {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  white-space: nowrap;
}

.serviceCards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.toolsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 8px;
  width: 100%;
}

.experienceCards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

/* Left column */
.leftPhoto {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 55%;
}

.leftProfileImg {
  width: 100%;
  height: 213px;
  overflow: hidden;
}

.leftProfileImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.leftBottom {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  width: 100%;
}

/* Right column */
.statsBlock {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.awardsBlock {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.awardsTitle {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
}

.awardsList {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

@media (max-width: 1199px) {
  .middleContent {
    gap: 80px;
  }
}

@media (max-width: 809px) {
  .middleContent {
    gap: 60px;
  }
  .toolsGrid {
    grid-template-columns: 1fr;
  }
}
