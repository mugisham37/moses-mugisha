import styles from './AwardRow.module.css';

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
