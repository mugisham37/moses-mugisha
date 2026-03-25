import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'

const testimonials = [
  {
    quote: 'Working with Alex was a seamless experience. He understood our vision immediately and translated it into a design that exceeded expectations.',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'Luminary Studios',
  },
  {
    quote: 'The attention to detail and strategic thinking behind every design decision made a huge difference in our product launch.',
    name: 'James Cooper',
    role: 'Product Lead',
    company: 'TechVenture',
  },
  {
    quote: 'Alex brings a rare combination of creativity and precision. Our website redesign drove a 40% increase in conversions.',
    name: 'Elena Voss',
    role: 'Marketing Director',
    company: 'BrightPath',
  },
]

interface SocialProofProps {
  sectionNumber?: string
  showNumber?: boolean
}

export const SocialProof: React.FC<SocialProofProps> = ({ sectionNumber = '4' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                <SpanHeading number={sectionNumber} title="SOCIAL PROOF" centered />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>Client Stories</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 680 }}>
                    A collection of feedback from people I've worked with, sharing their experience of the process and the results.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial Card */}
            <ScrollReveal>
              <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 0 }}>
                {/* Quote area */}
                <div style={{ border: '1px dashed var(--light-92)', borderRight: 'none', padding: '48px 24px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 300 }}>
                  <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
                  <div style={{ zIndex: 2, position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {/* Quote icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 21V14.5C3 10.36 6.36 7 10.5 7H11V9H10.5C7.46 9 5 11.46 5 14.5V15H9V21H3ZM13 21V14.5C13 10.36 16.36 7 20.5 7H21V9H20.5C17.46 9 15 11.46 15 14.5V15H19V21H13Z" fill="var(--dark-2)" /></svg>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="text-quotes"
                      >
                        {current.quote}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <div style={{ zIndex: 2, position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span className="text-name">{current.name}</span>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <span className="text-span" style={{ color: 'var(--neutral-50)' }}>{current.role}</span>
                        <span className="text-span" style={{ color: 'var(--neutral-50)' }}>{current.company}</span>
                      </div>
                    </div>
                    {/* Navigation arrows */}
                    <div style={{ display: 'flex', gap: 0 }}>
                      <TapArrow direction="left" onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)} />
                      <TapArrow direction="right" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)} />
                    </div>
                  </div>
                </div>
                {/* Image area */}
                <div style={{ padding: '0 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '100%', height: 400, borderRadius: 3, backgroundColor: 'var(--light-86)', aspectRatio: '0.75' }} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Ticker marquee */}
          <ScrollReveal>
            <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', height: 96, overflow: 'hidden', position: 'relative', marginTop: 48 }}>
              <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
              <div style={{ display: 'flex', alignItems: 'center', height: '100%', zIndex: 2, position: 'relative' }}>
                <motion.div
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
                  style={{ display: 'flex', gap: 96, whiteSpace: 'nowrap', paddingRight: 96 }}
                >
                  {[...Array(2)].map((_, setIdx) =>
                    ['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((name, i) => (
                      <div key={`${setIdx}-${i}`} style={{ width: 96, height: 30, backgroundColor: 'var(--light-86)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-span-tiny" style={{ color: 'var(--neutral-50)' }}>{name}</span>
                      </div>
                    ))
                  )}
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div style={{ width: '100%', height: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }}>
              <div style={{ backgroundColor: 'var(--light-98)', border: '1px dashed var(--light-92)', overflow: 'clip', display: 'flex', alignItems: 'center', padding: '0 30px' }}>
                <span className="text-span">Ready to start your next project?</span>
              </div>
              <Button label="Let's work together" href="https://cal.com/" external fullWidth bgColor="rgb(250, 250, 250)" textColor="rgb(5, 5, 5)" hoverBgColor="rgb(255, 255, 255)" hoverTextColor="rgb(5, 5, 5)" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

const TapArrow: React.FC<{ direction: 'left' | 'right'; onClick: () => void }> = ({ direction, onClick }) => {

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'none', border: 'none', position: 'relative' }}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const pos = i === 0 ? { x: direction === 'right' ? -4 : 4, y: -8 }
          : i === 1 ? { x: direction === 'right' ? 0 : 0, y: -4 }
          : i === 2 ? { x: direction === 'right' ? 4 : -4, y: 0 }
          : i === 3 ? { x: direction === 'right' ? 0 : 0, y: 4 }
          : { x: direction === 'right' ? -4 : 4, y: 8 }
        return (
          <div key={i} style={{ position: 'absolute', width: 4, height: 4, backgroundColor: 'var(--dark-2)', left: `calc(50% + ${pos.x}px - 2px)`, top: `calc(50% + ${pos.y}px - 2px)` }} />
        )
      })}
    </motion.button>
  )
}
