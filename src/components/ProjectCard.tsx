"use client";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  href: string;
}

export function ProjectCard({ title, category, year, image, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-[6px] w-full bg-[var(--framer-white)] overflow-hidden"
    >
      {/* Image container */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1.333" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="absolute inset-[-7px] w-[calc(100%+18px)] h-[calc(100%+14px)] object-cover z-[1] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Info row */}
      <div className="flex flex-row items-end justify-center gap-[8px] w-full">
        <div className="flex-1 flex flex-row items-center gap-[4px] overflow-hidden">
          <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] whitespace-nowrap">
            {title}
          </span>
          <span
            className="w-[3px] h-[4px] bg-[var(--framer-gray)] flex-shrink-0"
            style={{ transform: "rotate(-45deg)" }}
          />
          <span className="flex-1 text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] truncate">
            {category}
          </span>
        </div>
        <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] whitespace-nowrap">
          {year}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
