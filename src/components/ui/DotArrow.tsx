import React from 'react'
import { motion } from 'framer-motion'

interface DotArrowProps {
  direction?: 'right' | 'down' | 'up' | 'left'
  color?: string
  size?: number
}

const dotSize = 4

// Dot positions for each direction (relative to a center container)
const positions: Record<string, { x: number; y: number }[]> = {
  right: [
    { x: -10, y: -12 },
    { x: -4, y: -6 },
    { x: 0, y: 0 },
    { x: -4, y: 6 },
    { x: -10, y: 12 },
  ],
  down: [
    { x: -12, y: -6 },
    { x: -6, y: 0 },
    { x: 0, y: 4 },
    { x: 6, y: 0 },
    { x: 12, y: -6 },
  ],
  up: [
    { x: -12, y: 6 },
    { x: -6, y: 0 },
    { x: 0, y: -4 },
    { x: 6, y: 0 },
    { x: 12, y: 6 },
  ],
  left: [
    { x: 10, y: -12 },
    { x: 4, y: -6 },
    { x: 0, y: 0 },
    { x: 4, y: 6 },
    { x: 10, y: 12 },
  ],
}

export const DotArrow: React.FC<DotArrowProps> = ({
  direction = 'right',
  color = 'rgb(5, 5, 5)',
  size = 36,
}) => {
  const dots = positions[direction] || positions.right

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
    >
      {dots.map((pos, i) => (
        <motion.div
          key={i}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            borderRadius: 0,
          }}
        />
      ))}
    </div>
  )
}
