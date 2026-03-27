// Cards/Experience from Framer MCP: RD2AMAqQq
// DesktopTablet variant: title (Heading 3) + company + dates (14 medium) + description (16 medium)
// Layout: horizontal, gap:24px, padding:0 0 16px 0, bottom border

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
}

export function ExperienceCard({ title, company, dates, description }: ExperienceCardProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e3e3e3',
      }}
    >
      {/* Title row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          marginBottom: '8px',
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
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1.4em',
              letterSpacing: '-0.03em',
              color: '#757575',
            }}
          >
            {company}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1.4em',
              letterSpacing: '-0.03em',
              color: '#757575',
            }}
          >
            {dates}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.4em',
          letterSpacing: '-0.03em',
          color: '#121212',
        }}
      >
        {description}
      </p>
    </div>
  );
}
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
.card {
  display: flex;
  gap: 24px;
  padding-bottom: 16px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid var(--light-gray);
}

.titleSection {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info {
  flex: 1;
  display: flex;
  align-items: center;
}

@media (max-width: 809px) {
  .card {
    flex-direction: column;
    gap: 16px;
  }
}
