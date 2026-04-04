interface MiscProps {
  title: string;
  value?: string;
  showLine?: boolean;
}

export function Misc({ title, value, showLine = true }: MiscProps) {
  return (
    <div className="w-full flex flex-col gap-[4px]">
      <div className="w-full flex flex-row items-end justify-center gap-[8px]">
        <p className="flex-1 text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
          {title}
        </p>
        {value && (
          <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] z-[1]">
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
