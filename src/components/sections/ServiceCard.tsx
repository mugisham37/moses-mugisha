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
