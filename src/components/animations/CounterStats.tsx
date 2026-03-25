'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterStatsProps {
  label: string
  value: string
  duration?: number
}

export const CounterStats: React.FC<CounterStatsProps> = ({
  label,
  value,
  duration = 2,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState('0')

  // Extract numeric part and suffix
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const targetNumber = numericMatch ? parseInt(numericMatch[1]) : 0
  const suffix = numericMatch ? numericMatch[2] : value

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const durationMs = duration * 1000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * targetNumber)

      setDisplayValue(`${current}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, targetNumber, suffix, duration])

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        padding: '0 6px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(255, 255, 255)',
          borderRadius: 3,
          padding: '48px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
          overflow: 'clip',
        }}
      >
        <span className="text-span" style={{ textTransform: 'uppercase' }}>
          {label}
        </span>
        <span className="text-stat-number">{displayValue}</span>
      </div>
    </div>
  )
}
