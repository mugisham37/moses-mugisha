'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import { Footer } from '@/components/layout/Footer';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
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
      <ThreeColumnLayout
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

            {/* 2-column project grid — minWidth:0 prevents overflow into right sticky column */}
            <div
              className="work-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                paddingBottom: '50px',
                zIndex: 2,
                backgroundColor: '#ffffff',
                minWidth: 0,
                width: '100%',
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

      <style>{`
        @media (max-width: 809px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
