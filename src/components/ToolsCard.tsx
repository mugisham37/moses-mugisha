interface Props {
  name: string;
  description: string;
}

export default function ToolsCard({ name, description }: Props) {
  return (
    <div className="border border-silver p-4 flex gap-3.5 hover:border-ink transition-colors">
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="heading-3">{name}</h3>
        <p className="text-14">{description}</p>
      </div>
    </div>
  );
}
