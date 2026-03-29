import styles from './ServiceCard.module.css';

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3 className="heading-3">{title}</h3>
        <p className="text-16" style={{ maxWidth: 520 }}>{description}</p>
      </div>
      <div className="divider" />
    </div>
  );
}
