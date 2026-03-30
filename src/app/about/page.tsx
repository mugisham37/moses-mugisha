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
    <AnimatedContainer className="w-full h-full flex flex-col justify-between">
      {/* Top */}
      <AnimatedItem>
        <h1 className="heading-1">About Me.</h1>
      </AnimatedItem>

      {/* Middle — Profile photo */}
      <AnimatedItem>
        <div className="flex flex-col gap-2 w-[55%]">
          <div className="w-full h-53.25 overflow-hidden [&_img]:w-full [&_img]:h-full [&_img]:object-cover">
            <Image src={images.profileAbout} alt="Maelle" width={400} height={400} />
          </div>
          <span className="text-14">© 2013-25</span>
        </div>
      </AnimatedItem>

      {/* Bottom — Contact + Socials */}
      <AnimatedItem>
        <div className="flex gap-2 items-end w-full">
          <ContactButtons />
          <SocialIcons direction="horizontal" />
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}

function AboutMiddle() {
  return (
    <div className="w-full flex flex-col gap-30 items-center max-tablet:gap-20 max-phone:gap-15">
      {/* Section 1 — Intro */}
      <AnimatedContainer className="w-full flex flex-col gap-4">
        <AnimatedItem>
          <p className="heading-2 max-w-150">
            I&apos;m Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-16 max-w-130">
            Whether I&apos;m designing a brand&apos;s digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.
          </p>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 2 — Logos Ticker */}
      <AnimatedItem className="w-full">
        <LogosTicker />
      </AnimatedItem>

      {/* Section 3 — Services */}
      <AnimatedContainer className="w-full flex flex-col gap-4">
        <AnimatedItem>
          <div className="w-full flex flex-col gap-4 pb-4 z-1">
            <h2 className="heading-2">Services</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className="flex flex-col gap-4 w-full">
          {serviceDetails.map((s) => (
            <AnimatedItem key={s.title}>
              <ServiceCard title={s.title} description={s.description} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* Section 4 — Software Stack */}
      <AnimatedContainer className="w-full flex flex-col gap-4">
        <AnimatedItem>
          <h2 className="heading-2">Software Stack</h2>
        </AnimatedItem>
        <AnimatedItem>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 w-full max-phone:grid-cols-1">
            {tools.map((t) => (
              <ToolsCard key={t.name} name={t.name} description={t.description} />
            ))}
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 5 — Experience */}
      <AnimatedContainer className="w-full flex flex-col gap-4">
        <AnimatedItem>
          <div className="w-full flex flex-col gap-4 pb-4 z-1">
            <div className="flex gap-2 items-end w-full">
              <h2 className="heading-2 flex-1">Experience</h2>
              <a href="#" className="primary-button btn-14-medium inline-flex gap-1 items-center whitespace-nowrap">
                <DownloadSimple size={14} weight="regular" />
                <span>Download CV</span>
              </a>
            </div>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className="flex flex-col gap-4 w-full">
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
      <AnimatedContainer className="w-full flex flex-col gap-4">
        <AnimatedItem>
          <div className="w-full flex flex-col gap-4 pb-4 z-1">
            <h2 className="heading-2">FAQs</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <FAQAccordion items={faqs} />
        </AnimatedItem>
      </AnimatedContainer>

      {/* Bottom spacer */}
      <div className="pt-36.5">
        <div className="h-[40vh] opacity-0" />
      </div>
    </div>
  );
}

function AboutRight() {
  return (
    <AnimatedContainer className="w-full h-full flex flex-col justify-between">
      {/* Stats */}
      <AnimatedItem>
        <div className="flex flex-col gap-1 w-full">
          {stats.map((s) => (
            <MiscRow key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </AnimatedItem>

      {/* Awards */}
      <AnimatedItem>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-0.5 w-full">
            <span className="text-14">Achievements</span>
            <div className="divider" />
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            {awards.map((a) => (
              <AwardRow key={a.title} title={a.title} org={a.org} year={a.year} hasLine={a.hasLine} />
            ))}
          </div>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
