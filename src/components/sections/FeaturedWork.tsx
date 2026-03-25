'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'

export const FeaturedWork: React.FC = () => {
  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          {/* Header */}
          <div style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                <SpanHeading number="2" title="FEATURED WORK" centered />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>Projects Highlights</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 820 }}>
                    A curated overview of projects across product, UI, and digital design, each crafted with a strong focus on clarity, structure, and usability.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
              {['Kudos', 'Aerosound', 'Avenzor', 'Plywood'].map((name, i) => (
                <ScrollReveal key={name} delay={i * 0.1}>
                  <ProjectThumbnail name={name} subtitle={i === 0 ? 'Design Agency Website' : ''} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <ScrollReveal>
            <div style={{ width: '100%', height: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              <div style={{ backgroundColor: 'var(--light-98)', border: '1px dashed var(--light-92)', overflow: 'clip', display: 'flex', alignItems: 'center', padding: '0 30px' }}>
                <span className="text-span">Dive deeper into my process and outcomes</span>
              </div>
              <Button label="All My Projects" href="/projects" fullWidth bgColor="rgb(250, 250, 250)" textColor="rgb(5, 5, 5)" hoverBgColor="rgb(255, 255, 255)" hoverTextColor="rgb(5, 5, 5)" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

const ProjectThumbnail: React.FC<{ name: string; subtitle?: string }> = ({ name, subtitle }) => {
  return (
    <motion.a
      href={`/projects/${name.toLowerCase()}`}
      whileHover="hover"
      style={{ display: 'block', padding: '0 6px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 3, overflow: 'hidden', backgroundColor: 'var(--light-92)', position: 'relative' }}>
          <motion.div
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ width: '100%', height: '100%', backgroundColor: 'var(--light-86)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span className="text-h3" style={{ color: 'var(--neutral-50)' }}>{name}</span>
          </motion.div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span className="text-h3">{name}</span>
          {subtitle && <span className="text-span" style={{ color: 'var(--neutral-50)' }}>{subtitle}</span>}
        </div>
      </div>
    </motion.a>
  )
}
