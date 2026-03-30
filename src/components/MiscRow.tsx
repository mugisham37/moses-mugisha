interface Props {
  label: string;
  value?: string;
  hasLine?: boolean;
}

export default function MiscRow({ label, value, hasLine = true }: Props) {
  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex gap-2 justify-between items-end w-full">
        <span className="text-16 flex-1">{label}</span>
        {value && <span className="text-14">{value}</span>}
      </div>
      {hasLine && <div className="divider" />}
    </div>
  );
}
