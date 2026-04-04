interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row items-start gap-[16px] md:gap-[24px] pb-[16px] relative">
      <div className="flex-1 flex flex-col gap-[2px]">
        <h3 className="text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
          {title}
        </h3>
        <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
          {company}
        </p>
        <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
          {period}
        </p>
      </div>
      <div className="flex-1 flex flex-row items-center gap-[8px]">
        <p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
    </div>
  );
}

export default ExperienceCard;
