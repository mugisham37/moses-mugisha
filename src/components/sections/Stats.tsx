import React from 'react'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { CounterStats } from '../animations/CounterStats'
import { ScrollReveal } from '../animations/ScrollReveal'

const stats = [
  { label: 'PROJECTS COMPLETED', value: '40+' },
  { label: 'REPEAT CLIENTS', value: '90%' },
  { label: 'YEARS OF EXPERIENCE', value: '12+' },
  { label: 'CLIENT SATISFACTION', value: '99%' },
]

export const Stats: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Divider />

      <div
        style={{
          width: '100%',
          maxWidth: 1576,
          padding: '0 48px',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        <GridOverlay />

        <div
          style={{
            width: '100%',
            maxWidth: 1480,
            margin: '0 auto',
            padding: '72px 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(50px, 1fr))',
            gap: 0,
            zIndex: 1,
            position: 'relative',
          }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <CounterStats label={stat.label} value={stat.value} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
