import React from 'react'

interface GridOverlayProps {
  columns?: 4 | 2
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ columns = 4 }) => {
  const lineCount = columns + 1

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 48,
        bottom: 0,
        left: 48,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'clip',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {Array.from({ length: lineCount }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 1,
            height: '100%',
            backgroundColor: 'rgba(235, 235, 235, 0.6)',
          }}
        />
      ))}
    </div>
  )
}
