'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Footer } from '@/components/Footer';
import { SocialIcon } from '@/components/SocialIcon';
import { MiscItem } from '@/components/MiscItem';
import { ProjectCard } from '@/components/ProjectCard';
import { PrimaryButton } from '@/components/PrimaryButton';
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
      <PageLayout
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
'use client';

import Image from 'next/image';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import ProjectCard from '../components/ProjectCard';
import MiscRow from '../components/MiscRow';
import SocialIcons from '../components/SocialIcons';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
import { projects, services, images } from '../data/projects';



export default function Home() {
  return (
    <>
      <ThreeColumnLayout
        left={<HomeLeft />}
        middle={<HomeMiddle />}
        right={<HomeRight />}
      />
      <Footer />
    </>
  );
}

function HomeLeft() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <AnimatedItem>
        <div className={styles.intro}>
          <h1 className="heading-1">Hello! I&apos;m Maelle.</h1>
        </div>
      </AnimatedItem>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <AnimatedItem>
          <SocialIcons direction="vertical" />
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.servicesList}>
            {services.map((s) => (
              <MiscRow key={s.title} label={s.title} hasLine={s.hasLine} />
            ))}
          </div>
        </AnimatedItem>
      </div>
    </AnimatedContainer>
  );
}

function HomeMiddle() {
  return (
    <div className={styles.middleContent}>
      <AnimatedContainer className={styles.description}>
        <AnimatedItem>
          <p className="heading-2" style={{ maxWidth: 600 }}>
            A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.
          </p>
        </AnimatedItem>
        <div className={styles.spacer30vh} />
        <AnimatedItem>
          <div className={styles.selectedWorkHeader}>
            <span className="heading-3" style={{ flex: 1 }}>Selected work</span>
            <span className="text-12">({projects.length})</span>
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      <div className={styles.projectsContainer}>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className={styles.bottomSpacer}>
        <div className={styles.spacer40vh} />
      </div>
    </div>
  );
}

function HomeRight() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>
        <AnimatedItem>
          <div className={styles.available}>
            <span className="diamond diamond-md" />
            <span className="text-14">Available for work</span>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <Image src={images.profileHome} alt="Maelle" width={400} height={400} />
            </div>
            <div className={styles.profileInfo}>
              <span className="text-14">Digital Designer</span>
              <span className="text-14">Based in France</span>
              <span className="text-14">Since 2013</span>
            </div>
          </div>
        </AnimatedItem>
      </div>

      <AnimatedItem>
        <div className={styles.contactRow}>
          <ContactButtons />
          <span className="text-14">© 2025</span>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
/* Home Page Styles */

.intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.servicesList {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.middleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 120px;
  align-items: center;
}

.description {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.spacer30vh {
  height: 30vh;
}

.selectedWorkHeader {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  z-index: 1;
}

.projectsContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.projectsList {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.bottomSpacer {
  width: 100%;
}

.spacer40vh {
  height: 40vh;
}

.available {
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;
}

.profile {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
}

.profileImage {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 4px;
}

.profileImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileInfo {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contactRow {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: flex-end;
}
