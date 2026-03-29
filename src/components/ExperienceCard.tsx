import styles from './ExperienceCard.module.css';

interface Props {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function ExperienceCard({ title, company, period, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.titleSection}>
        <h3 className="heading-3">{title}</h3>
        <p className="text-14">{company}</p>
        <p className="text-14">{period}</p>
      </div>
      <div className={styles.info}>
        <p className="text-16">{description}</p>
      </div>
      <div className="divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </div>
  );
}
