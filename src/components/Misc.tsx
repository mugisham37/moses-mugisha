import { cn } from "@/lib/utils";

interface MiscProps {
  title: string;
  value?: string;
  variant?: "left" | "right";
  showLine?: boolean;
  className?: string;
}

export function Misc({
  title,
  value,
  variant = "left",
  showLine = true,
  className,
}: MiscProps) {
  return (
    <div className={cn("w-full flex flex-col gap-[4px] overflow-hidden", className)}>
      <div className="w-full flex flex-row items-end justify-between gap-[8px]">
        <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
          {title}
        </span>
        {value && (
          <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] flex-shrink-0">
            {value}
          </span>
        )}
      </div>
      {showLine && (
        <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
      )}
    </div>
  );
}

export default Misc;
