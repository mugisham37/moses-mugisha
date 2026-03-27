'use client';

// Category filter from Framer MCP: Category / XIgopXyNe
// Default + Active variants, Inter Medium 14px, gap:6px between buttons

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        alignItems: 'flex-start',
      }}
    >
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1em',
              letterSpacing: '-0.03em',
              color: isActive ? '#121212' : '#757575',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              transition: 'color 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = '#121212';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = '#757575';
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
