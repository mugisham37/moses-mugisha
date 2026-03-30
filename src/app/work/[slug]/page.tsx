'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ThreeColumnLayout from '../../../components/ThreeColumnLayout';
import ProjectCard from '../../../components/ProjectCard';
import Footer from '../../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../../components/AnimatedPage';
import { projects } from '../../../data/projects';

export default function WorkDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="px-5 py-50 text-center">
        <h1 className="heading-1">Project Not Found</h1>
        <Link href="/work" className="primary-button btn-16-semibold mt-5 inline-block">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <ThreeColumnLayout
        left={
          <AnimatedContainer className="w-full h-full flex flex-col justify-between">
            {/* Top — Title */}
            <AnimatedItem>
              <h1 className="heading-1">{project.title}</h1>
            </AnimatedItem>

            {/* Middle — Cover + Category */}
            <AnimatedItem>
              <div className="flex flex-col gap-2 w-[60%]">
                <div className="w-full h-30 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
                  <img src={project.image} alt={project.title} />
                </div>
                <span className="text-14">{project.category}</span>
              </div>
            </AnimatedItem>

            {/* Bottom — Metadata */}
            <AnimatedItem>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end">
                    <span className="text-14 text-right">Year</span>
                    <span className="text-16 flex-1">{project.year}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end">
                    <span className="text-14 text-right">Client</span>
                    <span className="text-16 flex-1">{project.client}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-end">
                    <span className="text-14 text-right">Service</span>
                    <span className="text-16 flex-1">{project.service}</span>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        }
        middle={
          <div className="w-full flex flex-col items-center">
            {/* Sticky description */}
            <AnimatedContainer className="sticky top-40 z-1 w-full flex flex-col gap-2 pb-2 max-tablet:relative max-tablet:top-0">
              <AnimatedItem>
                <p className="heading-2 max-w-150">{project.description}</p>
              </AnimatedItem>
              <div className="h-[30vh] opacity-0" />
              <AnimatedItem>
                <span className="text-12">©</span>
              </AnimatedItem>
            </AnimatedContainer>

            {/* Image gallery */}
            <div className="relative z-2 bg-white w-full flex flex-col gap-3 pb-4">
              {project.galleryImages.length > 0 ? (
                project.galleryImages.map((img, i) => (
                  <div key={i} className="w-full overflow-hidden [&_img]:w-full [&_img]:h-auto [&_img]:block">
                    <img src={img} alt={`${project.title} ${i + 1}`} />
                  </div>
                ))
              ) : (
                <div className="w-full overflow-hidden [&_img]:w-full [&_img]:h-auto [&_img]:block">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>

            <div className="pt-36.5">
              <div className="h-[40vh] opacity-0" />
            </div>
          </div>
        }
        right={
          <AnimatedContainer className="w-full h-full flex flex-col justify-end">
            <AnimatedItem>
              <div className="flex flex-col w-full">
                <span className="text-12 mb-2">Next Project</span>
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
