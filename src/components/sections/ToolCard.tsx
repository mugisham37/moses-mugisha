// Tools card from Framer MCP: Tools / gwInlO2il
// Default: bordered box (1px Light Gray), 16px padding, name (Heading 3) + description (14 medium)
// Width: 355px default, grid auto-fill minWidth 300px

interface ToolCardProps {
  name: string;
  description: string;
}

export function ToolCard({ name, description }: ToolCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e3e3e3',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        width: '100%',
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
        {name}
      </h3>
      <p
        style={{
          fontFamily: 'var(--font-geist)',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '1.4em',
          letterSpacing: '-0.03em',
          color: '#757575',
          maxWidth: '700px',
        }}
      >
        {description}
      </p>
    </div>
  );
}
