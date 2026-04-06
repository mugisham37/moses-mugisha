"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Icon } from "@/components/Icon";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const serviceFilters = [
  { label: "Software Engineering", filter: "Software Engineering" },
  { label: "Web Design", filter: "Web Design" },
  { label: "Motion Graphics", filter: "Motion Graphics" },
  { label: "VFX", filter: "VFX" },
  { label: "3D Design & Rendering", filter: "3D Design" },
];

function LeftDesktop({ selected, onSelect }: { selected: string; onSelect: (f: string) => void }) {
  return (<>
    <div className="w-full"><h1 className="text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">Hello! I&apos;m Moses.</h1></div>
    <div className="w-full flex flex-col gap-[8px] max-w-[400px]">
      <Icon variant="Social button / X" href="https://x.com/mugisham37" />
      <Icon variant="Social button / instagram" href="https://instagram.com/mugisham37" />
      <Icon variant="Social button / dribbble" href="https://github.com/mugisham37" />
    </div>
    <div className="w-full flex flex-col gap-[0px]">
      {serviceFilters.map(({ label, filter }, i) => {
        const isActive = selected === filter;
        return (
          <div
            key={filter}
            onClick={() => onSelect(isActive ? "All" : filter)}
            className="w-full flex flex-col gap-[4px] cursor-pointer group"
          >
            <div className="w-full flex flex-row items-center gap-[6px] py-[2px]">
              <div
                className={`w-[5px] h-[5px] flex-shrink-0 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                style={{ backgroundColor: "var(--framer-black)", transform: "rotate(45deg)" }}
              />
              <p className={`flex-1 text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] transition-colors ${isActive ? "text-[var(--framer-black)]" : "text-[var(--framer-gray)] group-hover:text-[var(--framer-black)]"}`}>
                {label}
              </p>
            </div>
            {i < serviceFilters.length - 1 && <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />}
          </div>
        );
      })}
    </div>
  </>);
}

function MiddleDesktop({ filtered, selected }: { filtered: typeof projects; selected: string }) {
  return (<>
    <div className="flex flex-col gap-[8px] pb-[8px]">
      <h2 className="text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px]">A full-stack software engineer &amp; creative technologist — building scalable systems, crafting immersive 3D worlds, and designing motion that tells stories.</h2>
      <div className="flex flex-row items-end justify-center gap-[8px]">
        <h3 className="flex-1 text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
          {selected === "All" ? "Selected work" : selected}
        </h3>
        <span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">({filtered.length})</span>
      </div>
    </div>
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[20px]">
        {filtered.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
      </div>
    </div>
  </>);
}

function RightDesktop() {
  return (<>
    <div className="w-full flex flex-col gap-[32px]">
      <div className="w-full flex flex-col gap-[8px]">
        <div className="flex flex-row items-center gap-[4px]">
          <div className="w-[5px] h-[5px] bg-[var(--framer-gray)]" style={{ transform: "rotate(45deg)" }} />
          <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Available for work</span>
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <img src="/images/Moses.png" alt="Moses" className="w-full h-[186px] object-cover" style={{ aspectRatio: "0.758" }} />
          <div className="flex flex-col gap-[2px]">
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Full-Stack Engineer</p>
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Based in Kigali, Rwanda</p>
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Since 2022</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-row items-end justify-start gap-[8px]">
      <div className="flex-1 flex flex-col gap-[4px]">
        <PrimaryButton text="mugisham505@gmail.com" href="mailto:mugisham505@gmail.com" />
        <PrimaryButton text="+250 786 768 418" href="tel:+250786768418" size="14" />
      </div>
      <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">© 2025</span>
    </div>
  </>);
}

export default function HomePage() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <PageTransition>
      <Navigation />
      {/* Desktop */}
      <div className="hidden lg:block">
        <ThreeColumnLayout
          left={<LeftDesktop selected={selected} onSelect={setSelected} />}
          middle={<MiddleDesktop filtered={filtered} selected={selected} />}
          right={<RightDesktop />}
        />
      </div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
          <h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)] mb-[24px]">Hello! I&apos;m Moses.</h1>
          <div className="flex flex-row gap-[24px] mb-[24px]">
            <div className="flex flex-row md:flex-col gap-[12px] md:gap-[8px]">
              <Icon variant="Social button / X" href="https://x.com/mugisham37" />
              <Icon variant="Social button / instagram" href="https://instagram.com/mugisham37" />
              <Icon variant="Social button / dribbble" href="https://github.com/mugisham37" />
            </div>
            <div className="flex-1 flex flex-col gap-[0px]">
              {serviceFilters.map(({ label, filter }, i) => {
                const isActive = selected === filter;
                return (
                  <div
                    key={filter}
                    onClick={() => setSelected(isActive ? "All" : filter)}
                    className="w-full flex flex-col gap-[4px] cursor-pointer group"
                  >
                    <div className="flex flex-row items-center gap-[5px] py-[2px]">
                      <div
                        className={`w-[4px] h-[4px] flex-shrink-0 transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundColor: "var(--framer-black)", transform: "rotate(45deg)" }}
                      />
                      <p className={`flex-1 text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] transition-colors ${isActive ? "text-[var(--framer-black)]" : "text-[var(--framer-gray)] group-hover:text-[var(--framer-black)]"}`}>
                        {label}
                      </p>
                    </div>
                    {i < serviceFilters.length - 1 && <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-start gap-[16px] mb-[24px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <div className="flex flex-row items-center gap-[4px]"><div className="w-[5px] h-[5px] bg-[var(--framer-gray)]" style={{ transform: "rotate(45deg)" }} /><span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Available for work</span></div>
              <div className="flex flex-col gap-[2px] mt-[8px]">
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Full-Stack Engineer</p>
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Based in Kigali, Rwanda</p>
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Since 2022</p>
              </div>
            </div>
            <img src="/images/Moses.png" alt="Moses" className="w-[130px] md:w-[160px] h-auto object-cover" style={{ aspectRatio: "0.758" }} />
          </div>
          <div className="flex flex-row items-end gap-[8px] mb-[32px] pb-[16px] border-b border-[var(--framer-light-gray)]">
            <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="mugisham505@gmail.com" href="mailto:mugisham505@gmail.com" /><PrimaryButton text="+250 786 768 418" href="tel:+250786768418" size="14" /></div>
            <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">© 2025</span>
          </div>
          <h2 className="text-[20px] md:text-[24px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px] mb-[32px]">A full-stack software engineer &amp; creative technologist — building scalable systems, crafting immersive 3D worlds, and designing motion that tells stories.</h2>
          <div className="flex flex-row items-end justify-center gap-[8px] mb-[16px]">
            <h3 className="flex-1 text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
              {selected === "All" ? "Selected work" : selected}
            </h3>
            <span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">({filtered.length})</span>
          </div>
          <div className="flex flex-col gap-[20px] mb-[40px]">
            {filtered.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
