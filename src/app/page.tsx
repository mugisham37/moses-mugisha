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
    <AnimatedContainer className="w-full h-full flex flex-col justify-between">
      <AnimatedItem>
        <div className="flex flex-col gap-4 w-full">
          <h1 className="heading-1">Hello! I&apos;m Maelle.</h1>
        </div>
      </AnimatedItem>

      <div className="flex flex-col gap-2">
        <AnimatedItem>
          <SocialIcons direction="vertical" />
        </AnimatedItem>
        <AnimatedItem>
          <div className="flex flex-col gap-2 w-full">
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
    <div className="w-full flex flex-col gap-30 items-center">
      <AnimatedContainer className="w-full flex flex-col gap-6">
        <AnimatedItem>
          <p className="heading-2 max-w-150">
            A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.
          </p>
        </AnimatedItem>
        <div className="h-[30vh]" />
        <AnimatedItem>
          <div className="w-full flex items-center gap-4 pb-4 z-1">
            <span className="heading-3 flex-1">Selected work</span>
            <span className="text-12">({projects.length})</span>
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-4 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="h-[40vh]" />
      </div>
    </div>
  );
}

function HomeRight() {
  return (
    <AnimatedContainer className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-8 w-full">
        <AnimatedItem>
          <div className="flex gap-2 items-center w-full">
            <span className="diamond diamond-md" />
            <span className="text-14">Available for work</span>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <div className="flex gap-4 items-start w-full">
            <div className="shrink-0 w-20 h-20 overflow-hidden rounded-sm [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
              <Image src={images.profileHome} alt="Maelle" width={400} height={400} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-14">Digital Designer</span>
              <span className="text-14">Based in France</span>
              <span className="text-14">Since 2013</span>
            </div>
          </div>
        </AnimatedItem>
      </div>

      <AnimatedItem>
        <div className="w-full flex gap-2 items-end">
          <ContactButtons />
          <span className="text-14">© 2025</span>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
