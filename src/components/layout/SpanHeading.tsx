import React from 'react'

interface SpanHeadingProps {
  number: string | number
  title: string
  centered?: boolean
}

export const SpanHeading: React.FC<SpanHeadingProps> = ({ number, title, centered = false }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: centered ? 'center' : 'flex-start',
        width: centered ? 'fit-content' : '100%',
      }}
    >
      <span className="text-span" style={{ color: 'var(--dark-2)' }}>
        //
      </span>
      <span className="text-span" style={{ color: 'var(--dark-2)' }}>
        {number}
      </span>
      <span className="text-span" style={{ color: 'var(--dark-2)', textTransform: 'uppercase' }}>
        {title}
      </span>
    </div>
  )
}
