import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  year,
  href,
  imageSrc,
  imageAlt,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block w-full overflow-hidden bg-[var(--framer-white)] flex flex-col gap-[6px]",
        className
      )}
    >
      <div className="w-full h-[387px] aspect-[1.333] overflow-hidden relative">
        <Image
          src={imageSrc || "/images/profile-home.jpg"}
          alt={imageAlt || title}
          fill
          className="object-cover scale-[1.02]"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-between overflow-hidden px-[0px] gap-[8px]">
        <div className="flex flex-row items-center gap-[4px] flex-1 overflow-hidden">
          <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] whitespace-nowrap">
            {title}
          </span>
          <div className="w-[3px] h-[4px] bg-[var(--framer-gray)] flex-shrink-0 rotate-[-45deg]" />
          <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {category}
          </span>
        </div>
        <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">
          {year}
        </span>
      </div>
    </Link>
  );
}

export default ProjectCard;
