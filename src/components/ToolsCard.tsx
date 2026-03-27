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
.card {
  border: 1px solid var(--light-gray);
  border-radius: 0;
  padding: 16px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: border-color 0.2s ease;
}

.card:hover {
  border-color: var(--black);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
