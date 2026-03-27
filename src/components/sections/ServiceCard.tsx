import Image from 'next/image';

// Service card from Framer MCP: Service / mvV7OcAOG
// Layout: title + description on left, optional 180×150px image on right
// gap:24px horizontal, padding:0 0 16px 0, bottom border

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e3e3e3',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
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
            maxWidth: '420px',
          }}
        >
          {description}
        </p>
      </div>
      {image && (
        <div
          style={{
            width: '180px',
            height: '150px',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="180px"
          />
        </div>
      )}
    </div>
  );
}
