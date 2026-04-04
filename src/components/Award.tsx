interface AwardProps {
  title: string;
  organization: string;
  year: string;
  showLine?: boolean;
}

export function Award({ title, organization, year, showLine = true }: AwardProps) {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <div className="w-full flex flex-row items-end justify-center gap-[8px]">
        <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] z-[1] whitespace-nowrap">
          {year}
        </span>
        <div className="flex-1 flex flex-col gap-[1px]">
          <p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {title}
          </p>
          <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {organization}
          </p>
        </div>
      </div>
      {showLine && (
        <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
      )}
    </div>
  );
}

export default Award;
