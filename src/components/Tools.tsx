interface ToolsProps {
  name: string;
  description: string;
}

export function Tools({ name, description }: ToolsProps) {
  return (
    <div className="flex flex-row items-start gap-[14px] p-[16px] border border-[var(--framer-light-gray)] bg-[var(--framer-white)]">
      <div className="flex-1 flex flex-col gap-[4px]">
        <div className="flex flex-row items-center gap-[4px]">
          <h3 className="flex-1 text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {name}
          </h3>
        </div>
        <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Tools;
