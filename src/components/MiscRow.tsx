import styles from './MiscRow.module.css';

interface Props {
  label: string;
  value?: string;
  hasLine?: boolean;
}

export default function MiscRow({ label, value, hasLine = true }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.content}>
        <span className={value ? 'text-16' : 'text-16'} style={{ flex: 1 }}>{label}</span>
        {value && <span className="text-14">{value}</span>}
      </div>
      {hasLine && <div className="divider" />}
    </div>
  );
}
.row {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.content {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
}
