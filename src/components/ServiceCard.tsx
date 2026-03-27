// Service card from Framer MCP: Service / mvV7OcAOG
// DesktopTablet variant: title (Heading 3) + description (16 medium), bottom border
// gap:24px horizontal, padding:0 0 16px 0

interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e3e3e3',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '1.4em',
          letterSpacing: '-0.03em',
          color: '#121212',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.4em',
          letterSpacing: '-0.03em',
          color: '#121212',
          maxWidth: '520px',
        }}
      >
        {description}
      </p>
    </div>
  );
}
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
.card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 16px;
  width: 100%;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

@media (max-width: 809px) {
  .card {
    gap: 16px;
  }
}
