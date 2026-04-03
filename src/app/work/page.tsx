import { projects } from "@/data/work";
import { ProjectCard } from "@/components/ProjectCard";

export default function WorkPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">

        {/* LEFT SIDEBAR — empty on work page */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen pt-[140px] pb-[8px] z-[3] hidden lg:block" aria-hidden="true" />

        {/* MIDDLE COLUMN */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pt-[140px] px-[16px]">

          {/* Title + Categories header — sticky */}
          <div className="lg:sticky lg:top-[140px] z-[1] w-full flex flex-col lg:flex-row items-start gap-[24px] pb-[40px]">
            <h1 className="flex-1 text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              My Work.
            </h1>
            {/* Category pills */}
            <div className="flex flex-wrap gap-[6px]">
              <span className="text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] cursor-pointer">
                All
              </span>
              <span className="text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)] text-[var(--framer-gray)] cursor-pointer hover:text-[var(--framer-black)] transition-colors">
                Photography
              </span>
              <span className="text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)] text-[var(--framer-gray)] cursor-pointer hover:text-[var(--framer-black)] transition-colors">
                Web design
              </span>
              <span className="text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)] text-[var(--framer-gray)] cursor-pointer hover:text-[var(--framer-black)] transition-colors">
                Visual Identity
              </span>
            </div>
          </div>

          {/* 2-column project grid */}
          <div className="w-full z-[2] grid grid-cols-1 md:grid-cols-2 gap-[12px] pb-[50px] bg-[var(--framer-white)]">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                category={project.briefDescription}
                year={project.year}
                href={`/work/${project.slug}`}
                imageSrc={project.previewImage}
              />
            ))}
          </div>

          {/* Bottom spacer */}
          <div className="w-full pt-[146px]">
            <div className="w-full h-[40vh] opacity-0 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDEBAR — empty on work page */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen pt-[140px] pb-[8px] z-[3] hidden lg:block" aria-hidden="true" />
      </div>
    </div>
  );
}
