interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({ title, company, period, description }: Props) {
  return (
    <div className="flex gap-6 pb-4 w-full relative max-phone:flex-col max-phone:gap-4">
      <div className="flex-1 flex flex-col gap-0.5">
        <h3 className="heading-3">{title}</h3>
        <p className="text-14">{company}</p>
        <p className="text-14">{period}</p>
      </div>
      <div className="flex-1 flex items-center">
        <p className="text-16">{description}</p>
      </div>
      <div className="divider absolute bottom-0 left-0 right-0" />
    </div>
  );
}
