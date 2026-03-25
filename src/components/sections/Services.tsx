'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { Button } from '../ui/Button'
import { DotArrow } from '../ui/DotArrow'
import { ScrollReveal } from '../animations/ScrollReveal'

const services = [
  { number: '01', title: 'Brand Identity', description: 'From logos and visual systems to messaging and brand strategy — I build cohesive identities that stand out.' },
  { number: '02', title: 'Web Design', description: 'Custom websites that balance aesthetics with performance, built for clarity, conversion, and long-term growth.' },
  { number: '03', title: 'UI/UX Design', description: 'User-centered interfaces designed with research, wireframes, and tested flows that solve real problems.' },
  { number: '04', title: 'Product Design', description: 'End-to-end product thinking — from discovery and ideation through design systems and scalable interfaces.' },
  { number: '05', title: 'Motion & Interaction', description: 'Purposeful animations and micro-interactions that elevate the user experience and bring interfaces to life.' },
]

interface ServicesProps {
  sectionNumber?: string
  showNumber?: boolean
}

export const Services: React.FC<ServicesProps> = ({ sectionNumber = '3' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                <SpanHeading number={sectionNumber} title="SERVICES" centered />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>What I Can Do for You</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 740 }}>
                    Combining product thinking, interface design, and visual systems to create digital experiences that are both useful and well-crafted.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service Tabs */}
            <div style={{ width: '100%', borderTop: '1px dashed var(--light-92)' }}>
              {services.map((service, i) => (
                <ServiceTab
                  key={service.number}
                  {...service}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div style={{ width: '100%', height: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }}>
              <div style={{ backgroundColor: 'var(--light-98)', border: '1px dashed var(--light-92)', overflow: 'clip', display: 'flex', alignItems: 'center', padding: '0 30px' }}>
                <span className="text-span">Want to talk about what we could create?</span>
              </div>
              <Button label="Book a Discovery Call" href="https://cal.com/" external fullWidth bgColor="rgb(250, 250, 250)" textColor="rgb(5, 5, 5)" hoverBgColor="rgb(255, 255, 255)" hoverTextColor="rgb(5, 5, 5)" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

const ServiceTab: React.FC<{
  number: string; title: string; description: string; isOpen: boolean; onToggle: () => void
}> = ({ number, title, description, isOpen, onToggle }) => {
  return (
    <div style={{ borderBottom: '1px dashed var(--light-92)', overflow: 'visible' }}>
      {/* Header row */}
      <button
        onClick={onToggle}
        style={{ width: '100%', padding: '48px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '0 6px', zIndex: 2 }}>
          <div style={{ width: 24 }}>
            <span className="text-number">{number}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="text-h3">{title}</span>
              <DotArrow direction={isOpen ? 'down' : 'right'} size={36} />
            </div>
          </div>
        </div>
        <div style={{ padding: '0 6px', zIndex: 2 }}>
          <DotArrow direction={isOpen ? 'up' : 'down'} size={24} />
        </div>
      </button>

      {/* Expandable content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'clip' }}
          >
            <div style={{ padding: '0 6px 48px 46px' }}>
              <p className="text-body" style={{ maxWidth: 500, color: 'var(--neutral-50)' }}>
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
