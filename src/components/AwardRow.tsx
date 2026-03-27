

interface Props {
  title: string;
  org: string;
  year: string;
  hasLine?: boolean;
}

export default function AwardRow({ title, org, year, hasLine = true }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <div className={styles.titleCol}>
          <span className="text-16">{title}</span>
          <span className="text-14">{org}</span>
        </div>
        <span className="text-14">{year}</span>
      </div>
      {hasLine && <div className="divider" />}
    </div>
  );
}
.row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.content {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-end;
}

.titleCol {
  display: flex;
  flex-direction: column;
  gap: 1px;
  flex: 1;
}
