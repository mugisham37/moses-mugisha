import React from 'react'

interface AvailabilityProps {
  textColor?: string
  dotColor?: string
}

export const Availability: React.FC<AvailabilityProps> = ({
  textColor = 'rgb(5, 5, 5)',
  dotColor = 'rgb(128, 128, 128)',
}) => {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
      <div
        style={{
          width: 4,
          height: 17,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: 24,
            backgroundColor: dotColor,
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
        <div
          style={{
            width: 4,
            height: 4,
            borderRadius: 24,
            backgroundColor: dotColor,
            animation: 'pulse 2s ease-in-out infinite 1s',
          }}
        />
      </div>
      <span className="text-span" style={{ color: textColor }}>
        Available for work
      </span>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
