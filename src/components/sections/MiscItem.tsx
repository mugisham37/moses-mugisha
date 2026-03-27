// Misc component — two variants from Framer MCP: Misc / JFTXrh6U3
// Variant "Left" (HNG5iPH9S): label text in 16medium + optional right value in 14medium, bottom divider
// Variant "Right" (W5dONdDp9): same but used for stats — value is the bigger number

interface MiscItemProps {
  label: string;
  value?: string;
  active?: boolean; // last item has no bottom border in some usages
}

export function MiscItem({ label, value, active = true }: MiscItemProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: value ? 'space-between' : 'flex-start',
          gap: '8px',
        }}
      >
        {/* Title / label */}
        <span
          style={{
            fontFamily: 'var(--font-geist)',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '1.4em',
            letterSpacing: '-0.03em',
            color: '#121212',
            flex: 1,
          }}
        >
          {label}
        </span>
        {/* Optional right value */}
        {value && (
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
            {value}
          </span>
        )}
      </div>
      {/* Divider line */}
      {active && (
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#e3e3e3',
          }}
        />
      )}
    </div>
  );
}
