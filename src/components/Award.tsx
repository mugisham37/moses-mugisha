import { cn } from "@/lib/utils";

interface AwardProps {
  title: string;
  organization: string;
  year: string;
  showLine?: boolean;
  className?: string;
}

export function Award({
  title,
  organization,
  year,
  showLine = true,
  className,
}: AwardProps) {
  return (
    <div className={cn("w-full flex flex-col gap-[6px] overflow-hidden", className)}>
      <div className="w-full flex flex-row items-end justify-between gap-[8px]">
        <div className="flex flex-col gap-[1px]">
          <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {title}
          </span>
          <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {organization}
          </span>
        </div>
        <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0 self-end">
          {year}
        </span>
      </div>
      {showLine && (
        <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
      )}
    </div>
  );
}

export default Award;
