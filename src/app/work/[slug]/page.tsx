'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { use, useRef } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Footer } from '@/components/Footer';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/lib/data';

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  return (
    <motion.div ref={ref} variants={fadeSlideUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

export default function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <PageLayout
        left={
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              width: '100%',
            }}
          >
            {/* Project title */}
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
              {project.title}
            </motion.h1>

            {/* Thumbnail image — 120px h, aspect 1.333 */}
            <motion.div variants={fadeSlideUp} style={{ width: '60%' }}>
              <div style={{ width: '100%', height: '120px', overflow: 'hidden', position: 'relative' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="15vw"
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '1.4em',
                  letterSpacing: '-0.03em',
                  color: '#121212',
                  display: 'block',
                  marginTop: '8px',
                }}
              >
                {project.category}
              </span>
            </motion.div>

            {/* Metadata: Year, Client, Service */}
            <motion.div
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}
            >
              {[
                { label: 'Year', value: project.year },
                { label: 'Client', value: project.client ?? '—' },
                { label: 'Service', value: project.service ?? '—' },
              ].map(({ label, value }) => (
                <motion.div key={label} variants={fadeSlideUp}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-geist)',
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '1.4em',
                          letterSpacing: '-0.03em',
                          color: '#121212',
                          flex: 1,
                        }}
                      >
                        {value}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-geist)',
                          fontSize: '14px',
                          fontWeight: 500,
                          lineHeight: '1.4em',
                          letterSpacing: '-0.03em',
                          color: '#121212',
                          flexShrink: 0,
                          zIndex: 1,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                    <div style={{ height: '1px', backgroundColor: '#e3e3e3' }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        }
        middle={
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Description — sticky */}
            <div
              style={{
                position: 'sticky',
                top: '160px',
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
                  {project.description}
                </h2>
              </ScrollReveal>

              {/* 30vh spacer */}
              <div style={{ height: '30vh', opacity: 0, pointerEvents: 'none' }} />

              <ScrollReveal>
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
                  ©{' '}
                </span>
              </ScrollReveal>
            </div>

            {/* Image gallery — stacked vertically, gap 12px */}
            <div
              style={{
                backgroundColor: '#ffffff',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                paddingBottom: '16px',
              }}
            >
              {/* Primary project image */}
              <ScrollReveal>
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 810px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
              {/* Second image (same src for now — in production, use project.gallery) */}
              <ScrollReveal>
                <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
                  <Image
                    src={project.image}
                    alt={`${project.title} detail`}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 810px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom spacer */}
            <div style={{ paddingTop: '146px' }}>
              <div style={{ height: '40vh' }} />
            </div>
          </div>
        }
        right={
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              height: '100%',
              width: '100%',
              gap: '8px',
            }}
          >
            {/* Next project */}
            <motion.div variants={fadeSlideUp}>
              <Link
                href={`/work/${nextProject.slug}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '1.4em',
                    letterSpacing: '-0.03em',
                    color: '#757575',
                  }}
                >
                  Next
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '1.4em',
                    letterSpacing: '-0.03em',
                    color: '#121212',
                    transition: 'color 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#757575')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#121212')}
                >
                  {nextProject.title} →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        }
      />
      <Footer />
    </>
  );
}
'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ThreeColumnLayout from '../../../components/ThreeColumnLayout';
import ProjectCard from '../../../components/ProjectCard';
import Footer from '../../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../../components/AnimatedPage';
import { projects } from '../../../data/projects';
import styles from './WorkDetail.module.css';

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h1 className="heading-1">Project Not Found</h1>
        <Link href="/work" className="primary-button btn-16-semibold" style={{ marginTop: 20, display: 'inline-block' }}>
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <ThreeColumnLayout
        left={
          <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Top — Title */}
            <AnimatedItem>
              <h1 className="heading-1">{project.title}</h1>
            </AnimatedItem>

            {/* Middle — Cover + Category */}
            <AnimatedItem>
              <div className={styles.leftCover}>
                <div className={styles.coverImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <span className="text-14">{project.category}</span>
              </div>
            </AnimatedItem>

            {/* Bottom — Metadata */}
            <AnimatedItem>
              <div className={styles.metadata}>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Year</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.year}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Client</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.client}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Service</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.service}</span>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        }
        middle={
          <div className={styles.middleContent}>
            {/* Sticky description */}
            <AnimatedContainer className={styles.description}>
              <AnimatedItem>
                <p className="heading-2" style={{ maxWidth: 600 }}>{project.description}</p>
              </AnimatedItem>
              <div style={{ height: '30vh', opacity: 0 }} />
              <AnimatedItem>
                <span className="text-12">©</span>
              </AnimatedItem>
            </AnimatedContainer>

            {/* Image gallery */}
            <div className={styles.gallery}>
              {project.galleryImages.length > 0 ? (
                project.galleryImages.map((img, i) => (
                  <div key={i} className={styles.galleryImage}>
                    <img src={img} alt={`${project.title} ${i + 1}`} />
                  </div>
                ))
              ) : (
                <div className={styles.galleryImage}>
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>

            <div style={{ paddingTop: 146 }}>
              <div style={{ height: '40vh', opacity: 0 }} />
            </div>
          </div>
        }
        right={
          <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <AnimatedItem>
              <div className={styles.nextProject}>
                <span className="text-12" style={{ marginBottom: 8 }}>Next Project</span>
                <ProjectCard project={nextProject} />
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        }
      />
      <Footer />
    </>
  );
}
.middleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description {
  position: sticky;
  top: 160px;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
}

.gallery {
  position: relative;
  z-index: 2;
  background: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
}

.galleryImage {
  width: 100%;
  overflow: hidden;
}

.galleryImage img {
  width: 100%;
  height: auto;
  display: block;
}

.leftCover {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 60%;
}

.coverImage {
  width: 100%;
  height: 120px;
  overflow: hidden;
}

.coverImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.metadata {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.metaRow {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.metaContent {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.nextProject {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media (max-width: 1199px) {
  .description {
    position: relative;
    top: 0;
  }
}
