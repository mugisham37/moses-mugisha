interface ServiceProps {
  title: string;
  description: string;
}

export function Service({ title, description }: ServiceProps) {
  return (
    <div className="w-full flex flex-row items-center gap-[24px] pb-[16px]">
      <div className="flex-1 flex flex-col gap-[8px]">
        <div className="flex flex-row items-center gap-[6px]">
          <h3 className="flex-1 text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            {title}
          </h3>
        </div>
        <p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[520px]">
          {description}
        </p>
      </div>
      <div className="h-[1px] absolute bottom-0 left-0 right-0 bg-[var(--framer-light-gray)] z-[1]" />
    </div>
  );
}

export default Service;
