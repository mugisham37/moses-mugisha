'use client';

import { useState, useMemo } from 'react';
import ThreeColumnLayout from '../../components/ThreeColumnLayout';
import ProjectCard from '../../components/ProjectCard';
import Footer from '../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../components/AnimatedPage';
import { projects } from '../../data/projects';

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
          <div className="w-full flex flex-col items-center">
            <AnimatedContainer className="sticky top-35 z-1 w-full flex flex-col gap-6 pb-10 bg-white max-tablet:relative max-tablet:top-0">
              <AnimatedItem>
                <h1 className="heading-1">My Work.</h1>
              </AnimatedItem>
              <AnimatedItem>
                <div className="flex gap-1.5 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`btn-14-medium py-1 cursor-pointer transition-colors duration-200 ${activeCategory === cat ? 'text-ink underline underline-offset-[3px]' : 'text-slate hover:text-ink'}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </AnimatedItem>
            </AnimatedContainer>

            <div className="grid grid-cols-2 gap-3 w-full pb-[50px] z-2 bg-white max-phone:grid-cols-1">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

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
