interface Props {
  title: string;
  org: string;
  year: string;
  hasLine?: boolean;
}

export default function AwardRow({ title, org, year, hasLine = true }: Props) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="flex gap-2 justify-between items-end">
        <div className="flex flex-col gap-px flex-1">
          <span className="text-16">{title}</span>
          <span className="text-14">{org}</span>
        </div>
        <span className="text-14">{year}</span>
      </div>
      {hasLine && <div className="divider" />}
    </div>
  );
}
