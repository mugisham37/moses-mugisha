import { cn } from "@/lib/utils";

interface ToolsProps {
  name: string;
  description: string;
  className?: string;
}

export function Tools({ name, description, className }: ToolsProps) {
  return (
    <div
      className={cn(
        "bg-[var(--framer-white)] border border-[var(--framer-light-gray)] flex flex-row items-start gap-[14px] p-[16px] overflow-visible",
        className
      )}
    >
      <div className="w-[20px] h-[20px] flex-shrink-0 bg-[var(--framer-light-gray)] rounded-full mt-[2px]" />
      <div className="flex flex-col gap-[4px] flex-1 overflow-hidden">
        <h3 className="text-[18px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
          {name}
        </h3>
        <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[700px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Tools;
