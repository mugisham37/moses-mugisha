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
