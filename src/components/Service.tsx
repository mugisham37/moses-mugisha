import { cn } from "@/lib/utils";

interface ServiceProps {
  title: string;
  description: string;
  className?: string;
}

export function Service({ title, description, className }: ServiceProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-[0px] pb-[16px] overflow-visible relative",
        className
      )}
    >
      <div className="flex flex-row items-start gap-[24px]">
        <div className="flex flex-col gap-[8px] flex-1 overflow-visible">
          <div className="flex flex-row items-center gap-[6px] w-full">
            <h3 className="flex-1 text-[18px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {title}
            </h3>
          </div>
          <p className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[520px]">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
    </div>
  );
}

export default Service;
