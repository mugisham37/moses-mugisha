import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

interface NewsletterProps {
  showNumber?: boolean
}

export const Newsletter: React.FC<NewsletterProps> = ({ showNumber = true }) => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  const buttonLabel = status === 'success' ? 'Thanks for subscribing!' : status === 'error' ? 'Something went wrong!' : 'Subscribe'

  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--light-92)' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 1, position: 'relative' }}>
          <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                {showNumber && <SpanHeading number="7" title="NEWSLETTER" centered />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>Notes &amp; Updates</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 620 }}>
                    A short email from time to time with design thoughts, new work, and behind-the-scenes updates.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', gap: 0 }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    height: 48,
                    padding: '0 16px',
                    border: '1px dashed var(--light-86)',
                    borderRight: 'none',
                    backgroundColor: 'var(--white-100)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: '-0.02em',
                    color: 'var(--dark-2)',
                    outline: 'none',
                  }}
                />
                <motion.button
                  type="submit"
                  whileHover="hover"
                  initial="idle"
                  disabled={status === 'loading'}
                  style={{
                    height: 48,
                    padding: '0 24px',
                    position: 'relative',
                    overflow: 'clip',
                    cursor: 'pointer',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: 180,
                  }}
                >
                  <motion.div
                    variants={{ idle: { backgroundColor: 'rgb(5, 5, 5)' }, hover: { backgroundColor: 'rgb(20, 20, 20)' } }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, zIndex: 1 }}
                  />
                  <div style={{ overflow: 'hidden', height: 24, position: 'relative', zIndex: 2 }}>
                    <motion.div
                      variants={{ idle: { y: 0 }, hover: { y: -24 } }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', height: 24, fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: 'rgb(255, 255, 255)', whiteSpace: 'nowrap' }}>{buttonLabel}</span>
                      <span style={{ display: 'flex', alignItems: 'center', height: 24, fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: 'rgb(255, 255, 255)', whiteSpace: 'nowrap' }}>{buttonLabel}</span>
                    </motion.div>
                  </div>
                </motion.button>
              </form>
            </ScrollReveal>

            <span className="text-span-italic-tiny" style={{ color: 'var(--neutral-50)' }}>
              No spam. Unsubscribe anytime.
            </span>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, borderBottom: '1px dashed var(--light-86)' }} />
    </section>
  )
}
