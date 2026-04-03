import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects, getProjectBySlug } from "@/data/work"
import { PrimaryButton } from "@/components/PrimaryButton"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">

        {/* LEFT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          {/* Title */}
          <div className="overflow-hidden flex flex-col gap-[24px]">
            <h1 className="text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {project.title}
            </h1>
          </div>

          {/* Small preview image */}
          <div className="w-[60%] flex flex-col gap-[8px] overflow-visible">
            <div className="relative w-full" style={{ height: "120px", aspectRatio: "1.333" }}>
              <Image
                src={project.previewImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {project.briefDescription}
            </span>
          </div>

          {/* Project meta info */}
          <div className="w-full flex flex-col gap-[4px] overflow-hidden">
            {/* Year */}
            <div className="w-full flex flex-col gap-[4px] overflow-hidden">
              <div className="w-full flex flex-row items-end justify-between gap-[8px]">
                <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">{project.year}</span>
                <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">Year</span>
              </div>
              <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
            </div>
            {/* Client */}
            <div className="w-full flex flex-col gap-[4px] overflow-hidden">
              <div className="w-full flex flex-row items-end justify-between gap-[8px]">
                <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">{project.client}</span>
                <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">Client</span>
              </div>
              <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
            </div>
            {/* Service */}
            <div className="w-full flex flex-col gap-[4px] overflow-hidden">
              <div className="w-full flex flex-row items-end justify-between gap-[8px]">
                <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">{project.service}</span>
                <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">Service</span>
              </div>
            </div>
          </div>
        </aside>

        {/* MIDDLE COLUMN */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pt-[140px] px-[16px]">

          {/* Sticky description */}
          <div className="lg:sticky lg:top-[160px] z-[1] w-full flex flex-col gap-[8px] pb-[8px]">
            <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {project.overview}
            </p>
            <div className="w-full h-[30vh] opacity-0 pointer-events-none" />
            {/* Copyright */}
            <span className="text-[12px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">©</span>
          </div>

          {/* Image gallery */}
          <div className="w-full z-[2] flex flex-col gap-[12px] pb-[16px] bg-[var(--framer-white)]">
            {project.gallery.map((img, i) => (
              <div key={i} className="w-full relative" style={{ height: "500px" }}>
                <Image src={img} alt={`${project.title} gallery ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Project detail text */}
          <div className="w-full flex flex-col gap-[40px] py-[40px]">
            {project.title1 && (
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">{project.title1}</h2>
                <p className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[600px]">{project.paragraph1}</p>
              </div>
            )}
            {project.title2 && (
              <div className="flex flex-col gap-[16px]">
                <h2 className="text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">{project.title2}</h2>
                <p className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[600px]">{project.paragraph2}</p>
              </div>
            )}
          </div>

          {/* Bottom spacer */}
          <div className="w-full pt-[146px]">
            <div className="w-full h-[40vh] opacity-0 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between items-center gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          <div className="w-full" />
          {/* Next project */}
          <div className="w-full flex flex-row items-center justify-end gap-[8px] overflow-hidden">
            <div className="w-full flex flex-col gap-[6px] bg-[var(--framer-white)] overflow-hidden">
              <p className="text-[12px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-gray)] font-[family-name:var(--font-geist)]">Next</p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] hover:opacity-70 transition-opacity"
              >
                {nextProject.title}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
