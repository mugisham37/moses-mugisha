"use client";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const categories = ["All", "Software Engineering", "Web Design", "Motion Graphics", "VFX", "3D Design"];

function FilterButtons({ selected, onSelect }: { selected: string; onSelect: (cat: string) => void }) {
  return (
    <div className="flex flex-row flex-wrap gap-[8px]">
      {categories.map((cat) => (
        <span
          key={cat}
          onClick={() => onSelect(cat)}
          className={`text-[14px] font-medium tracking-[-0.03em] px-[8px] py-[4px] border border-[var(--framer-light-gray)] cursor-pointer transition-colors whitespace-nowrap ${
            selected === cat
              ? "bg-[var(--framer-black)] text-[var(--framer-white)]"
              : "text-[var(--framer-black)] hover:bg-[var(--framer-black)] hover:text-[var(--framer-white)]"
          }`}
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

function MiddleDesktop() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);
  return (<>
    <div className="flex flex-col gap-[16px] pb-[40px]">
      <h1 className="text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">My Work.</h1>
      <div className="flex flex-row items-center justify-between gap-[16px]">
        <FilterButtons selected={selected} onSelect={setSelected} />
        <span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] flex-shrink-0">({filtered.length})</span>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-[12px] pb-[50px]">
      {filtered.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
    </div>
  </>);
}

export default function WorkPage() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <PageTransition><Navigation />
      <div className="hidden lg:block"><ThreeColumnLayout left={<div />} middle={<MiddleDesktop />} right={<div />} /></div>
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
          <div className="flex flex-col gap-[16px] mb-[24px]">
            <h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">My Work.</h1>
            <div className="flex flex-row items-center justify-between gap-[16px]">
              <FilterButtons selected={selected} onSelect={setSelected} />
              <span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] flex-shrink-0">({filtered.length})</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] pb-[40px]">
            {filtered.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
