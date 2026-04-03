import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  role: string;
  company: string;
  years: string;
  description: string;
  className?: string;
}

export function ExperienceCard({
  role,
  company,
  years,
  description,
  className,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-[0px] pb-[16px] overflow-visible relative",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row items-start gap-[24px]">
        <div className="flex flex-col gap-[2px] flex-shrink-0 lg:w-[40%]">
          <h3 className="text-[18px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {role}
          </h3>
          <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {company}
          </p>
          <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {years}
          </p>
        </div>
        <p className="flex-1 text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
    </div>
  );
}

export default ExperienceCard;
