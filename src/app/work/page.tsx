"use client";
import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

function MiddleDesktop() {
  return (<>
    <div className="flex flex-row items-start justify-center gap-[24px] pb-[40px]">
      <h1 className="flex-1 text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">My Work.</h1>
      <span className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] px-[8px] py-[4px] border border-[var(--framer-light-gray)] cursor-pointer hover:bg-[var(--framer-black)] hover:text-[var(--framer-white)] transition-colors">All</span>
    </div>
    <div className="grid grid-cols-2 gap-[12px] pb-[50px]">
      {projects.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
    </div>
  </>);
}
export default function WorkPage() {
  return (
    <PageTransition><Navigation />
      <div className="hidden lg:block"><ThreeColumnLayout left={<div />} middle={<MiddleDesktop />} right={<div />} /></div>
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
          <div className="flex flex-row items-start justify-between gap-[16px] mb-[24px]"><h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">My Work.</h1><span className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] px-[8px] py-[4px] border border-[var(--framer-light-gray)] flex-shrink-0">All</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] pb-[40px]">
            {projects.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
