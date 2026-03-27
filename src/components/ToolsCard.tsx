import styles from './ToolsCard.module.css';

interface Props {
  name: string;
  description: string;
}

export default function ToolsCard({ name, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className="heading-3">{name}</h3>
        <p className="text-14">{description}</p>
      </div>
    </div>
  );
}
