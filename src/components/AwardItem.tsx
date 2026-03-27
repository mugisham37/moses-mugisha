// Award item from Framer MCP: Award / KY7OdS9B8
// Default: year (right, 14 medium gray) + title (16 medium) + details (14 medium), bottom border

interface AwardItemProps {
  title: string;
  organization: string;
  year: string;
  last?: boolean;
}

export function AwardItem({ title, organization, year, last = false }: AwardItemProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
        }}
      >
        {/* Title + details (left side) */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '1.4em',
              letterSpacing: '-0.03em',
              color: '#121212',
            }}
          >
            {title}
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
            {organization}
          </span>
        </div>

        {/* Year (right side) */}
        <span
          style={{
            fontFamily: 'var(--font-geist)',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '1.4em',
            letterSpacing: '-0.03em',
            color: '#121212',
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {year}
        </span>
      </div>

      {/* Divider — no bottom border on last item */}
      {!last && (
        <div style={{ width: '100%', height: '1px', backgroundColor: '#e3e3e3' }} />
      )}
    </div>
  );
}


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
