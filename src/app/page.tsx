import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Misc } from "@/components/Misc";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">
        {/* LEFT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          {/* Top: Intro */}
          <div className="w-full overflow-hidden flex flex-col gap-[6px]">
            <h1 className="w-full text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              Hello! I&apos;m Maelle.
            </h1>
          </div>

          {/* Middle: Socials */}
          <div className="w-full max-w-[400px] overflow-hidden flex flex-col gap-[8px]">
            <Icon href="x.com" label="Social button / X" />
            <Icon href="instagram.com" label="Social button / instagram" />
            <Icon href="https://dribbble.com/" label="Social button / dribbble" />
          </div>

          {/* Services (bottom middle) */}
          <div className="w-full overflow-hidden flex flex-col gap-[4px]">
            <Misc title="Visual Identity" showLine={true} variant="left" />
            <Misc title="Web design" showLine={true} variant="left" />
            <Misc title="Photography" showLine={true} variant="left" />
            <Misc title="Graphic design" showLine={false} variant="left" />
          </div>
        </aside>

        {/* MIDDLE COLUMN */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pt-[140px] px-[16px]">
          {/* Sticky description */}
          <div className="lg:sticky lg:top-[140px] z-[1] w-full flex flex-col gap-[8px] pb-[8px]">
            <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.
            </p>
            {/* 30vh invisible spacer */}
            <div className="w-full h-[30vh] opacity-0 pointer-events-none" />
            {/* Section title */}
            <div className="w-full flex flex-row items-end gap-[8px]">
              <h3 className="flex-1 text-[18px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                Selected work
              </h3>
              <span className="text-[12px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                (10)
              </span>
            </div>
          </div>

          {/* Projects list */}
          <div className="w-full z-[2] flex flex-col gap-[12px] bg-[var(--framer-white)]">
            <div className="w-full flex flex-col gap-[20px]">
              <ProjectCard
                title="Neon Flux"
                category="Fashion Editorial"
                year="'22"
                href="/work/neon-flux"
                imageSrc="/images/profile-home.jpg"
              />
              <ProjectCard
                title="Lumina City"
                category="Conceptual Series"
                year="2024"
                href="/work/lumina-city"
                imageSrc="/images/profile-about.jpg"
              />
              <ProjectCard
                title="Bloom Identity"
                category="Brand Identity"
                year="'23"
                href="/work/bloom-identity"
                imageSrc="/images/profile-home.jpg"
              />
              <ProjectCard
                title="Echo Studio"
                category="Web Design"
                year="'23"
                href="/work/echo-web"
                imageSrc="/images/profile-about.jpg"
              />
            </div>
          </div>

          {/* Bottom spacer */}
          <div className="w-full flex items-center justify-center pt-[146px]">
            <div className="w-full h-[40vh] opacity-0 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between items-center gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          {/* Top: Profile */}
          <div className="w-full flex flex-col gap-[32px] overflow-visible">
            {/* Available indicator + profile */}
            <div className="w-full flex flex-col gap-[8px]">
              {/* Available for work */}
              <div className="w-full flex flex-row items-center gap-[4px] overflow-visible">
                <div className="w-[5px] h-[5px] bg-[var(--framer-gray)] rotate-45 flex-shrink-0" />
                <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                  Available for work
                </span>
              </div>
              {/* Profile */}
              <div className="w-full flex flex-col gap-[32px] overflow-hidden">
                <div className="w-full relative" style={{ height: "186px" }}>
                  <Image
                    src="/images/profile-home.jpg"
                    alt="Maelle profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full flex flex-col gap-[2px] overflow-hidden">
                  <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Digital Designer</p>
                  <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Based in France</p>
                  <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Since 2013</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Contact + Copyright */}
          <div className="w-full flex flex-row items-end justify-start gap-[8px] overflow-visible">
            <div className="flex-1 flex flex-col gap-[4px] overflow-hidden">
              <PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" size="16" />
              <PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" />
            </div>
            <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">
              © 2025
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
