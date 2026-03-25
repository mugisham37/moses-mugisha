'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface ToolProgressProps {
  name: string
  percentage: number
  icon?: string
}

export const ToolProgress: React.FC<ToolProgressProps> = ({
  name,
  percentage,
  icon,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [count, setCount] = useState(70)

  useEffect(() => {
    if (!isInView) return
    const start = 70
    const end = percentage
    const duration = 3000
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, percentage])

  return (
    <div
      ref={ref}
      style={{
        width: 126,
        height: 264,
        backgroundColor: 'var(--light-92)',
        borderRadius: 3,
        border: '1px dashed var(--light-86)',
        overflow: 'clip',
        position: 'relative',
        padding: '0 0 2px 0',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      {/* Progress bar fill */}
      <motion.div
        initial={{ height: '0%' }}
        animate={isInView ? { height: `${percentage}%` } : { height: '0%' }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'var(--dark-20)',
          borderRadius: 3,
          zIndex: 1,
          overflow: 'clip',
        }}
      >
        {/* Counter inside bar */}
        <span
          style={{
            position: 'absolute',
            top: 12,
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: 'rgb(255, 255, 255)',
            whiteSpace: 'nowrap',
          }}
        >
          {count}%
        </span>
      </motion.div>

      {/* Tool icon and name */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          alignItems: 'center',
          padding: '12px 6px',
          width: '100%',
        }}
      >
        {icon && (
          <div
            style={{
              width: 32,
              height: 24,
              borderRadius: 8,
              backgroundColor: 'var(--white-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span className="text-span-tiny" style={{ color: 'var(--dark-2)' }}>
              {icon}
            </span>
          </div>
        )}
        <span
          className="text-span-tiny"
          style={{ color: 'var(--dark-2)', textAlign: 'center' }}
        >
          {name}
        </span>
      </div>
    </div>
  )
}
