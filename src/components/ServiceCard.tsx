interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="flex flex-col gap-6 pb-4 w-full max-phone:gap-4">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="heading-3">{title}</h3>
        <p className="text-16 max-w-[520px]">{description}</p>
      </div>
      <div className="divider" />
    </div>
  );
}
