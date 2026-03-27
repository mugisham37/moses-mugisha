'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/lib/data';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });
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

// All unique categories + "All"
const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageLayout
        left={undefined}
        middle={
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Sticky title + category filters */}
            <div
              style={{
                position: 'sticky',
                top: '140px',
                zIndex: 1,
                backgroundColor: '#ffffff',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                paddingBottom: '40px',
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'var(--font-geist)',
                  fontSize: '56px',
                  fontWeight: 500,
                  lineHeight: '1em',
                  letterSpacing: '-0.05em',
                  color: '#121212',
                  flex: 1,
                }}
              >
                My Work.
              </motion.h1>

              {/* Category filters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <CategoryFilter
                  categories={allCategories}
                  active={activeCategory}
                  onChange={setActiveCategory}
                />
              </motion.div>
            </div>

            {/* 2-column project grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                paddingBottom: '50px',
                zIndex: 2,
                backgroundColor: '#ffffff',
              }}
            >
              {filtered.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 0.05}>
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
        right={undefined}
      />
      <Footer />
    </>
  );
}
'use client';

import { useState, useMemo } from 'react';
import ThreeColumnLayout from '../../components/ThreeColumnLayout';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../components/AnimatedPage';
import { projects } from '../../data/projects';
import styles from './Work.module.css';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <ThreeColumnLayout
        left={<div />}
        middle={
          <div className={styles.middleContent}>
            <AnimatedContainer className={styles.titleArea}>
              <AnimatedItem>
                <h1 className="heading-1">My Work.</h1>
              </AnimatedItem>
              <AnimatedItem>
                <div className={styles.categories}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`btn-14-medium ${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </AnimatedItem>
            </AnimatedContainer>

            <div className={styles.projectsGrid}>
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

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
  gap: 24px;
  padding-bottom: 40px;
  background: var(--white);
}

.categories {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.categoryBtn {
  padding: 4px 0;
  cursor: pointer;
  color: var(--gray);
  transition: color 0.2s ease;
  background: none;
  border: none;
}

.categoryBtn:hover {
  color: var(--black);
}

.categoryBtn.active {
  color: var(--black);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.projectsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  padding-bottom: 50px;
  position: relative;
  z-index: 2;
  background: var(--white);
}

@media (max-width: 1199px) {
  .titleArea {
    position: relative;
    top: 0;
  }
}

@media (max-width: 809px) {
  .projectsGrid {
    grid-template-columns: 1fr;
  }
}
