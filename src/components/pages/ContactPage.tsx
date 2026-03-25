'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { Profile } from '../ui/Profile'
import { Button } from '../ui/Button'
import { FAQ } from '../sections/FAQ'
import { Pricing } from '../sections/Pricing'
import { Newsletter } from '../sections/Newsletter'
import { ScrollReveal } from '../animations/ScrollReveal'

const formFields = [
  { label: 'Name', type: 'text', required: true },
  { label: 'Email', type: 'email', required: true },
  { label: 'Phone Number (Optional)', type: 'tel', required: false },
  { label: 'Company/Organization (Optional)', type: 'text', required: false },
  { label: 'Website/Link (Optional)', type: 'url', required: false },
  { label: 'How Did You Hear About Me? (Optional)', type: 'text', required: false },
  { label: 'Project Type', type: 'select', required: true },
  { label: 'Budget Range', type: 'select', required: true },
  { label: 'Timeline', type: 'select', required: true },
  { label: 'Message', type: 'textarea', required: true },
]

const socialLinks = [
  { label: 'Framer', href: 'https://framer.link/UdEP7eA' },
  { label: 'X (Twitter)', href: 'https://x.com/CristianMielu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-mielu-a8b2b3b5/' },
  { label: 'Instagram', href: 'https://www.instagram.com/cristian_mielu/' },
  { label: 'Academy', href: 'https://framer.link/mTQi1ow' },
]

export const ContactPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <>
      <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Divider />
        <div style={{ width: '100%', maxWidth: 1576, padding: '144px 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
          <GridOverlay columns={2} />
          <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'visible' }}>
              {/* Header */}
              <ScrollReveal>
                <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                  <SpanHeading number="2" title="CONTACT" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                    <h1 className="text-h1" style={{ textAlign: 'center' }}>Get in Touch</h1>
                    <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 790 }}>
                      Tell me a bit about your project, your goals, and what you're looking to build, and I'll get back to you as soon as possible to discuss next steps.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact grid */}
              <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
                {/* Left: Profile + Social */}
                <ScrollReveal>
                  <div style={{ gridColumn: '1 / 3', display: 'flex', flexDirection: 'column', gap: 48 }}>
                    <Profile theme="light" showLinks />
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      {socialLinks.map((link) => (
                        <Button key={link.label} label={link.label} href={link.href} external variant="simple-link" textColor="rgb(5, 5, 5)" hoverTextColor="rgb(128, 128, 128)" showArrow={false} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Right: Form */}
                <ScrollReveal delay={0.2}>
                  <div style={{ gridColumn: '3 / 5', display: 'flex', flexDirection: 'column', gap: 48 }}>
                    <SpanHeading number="1" title="PROJECT INQUIRY FORM" />
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      {formFields.map((field) => (
                        <div key={field.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <div style={{ padding: '0 6px' }}>
                            <span className="text-span">{field.label}</span>
                          </div>
                          {field.type === 'textarea' ? (
                            <textarea
                              required={field.required}
                              rows={4}
                              style={{
                                width: '100%', padding: '12px 16px', border: '1px dashed var(--light-92)', backgroundColor: 'var(--white-100)',
                                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em', color: 'var(--dark-2)', outline: 'none', resize: 'vertical',
                              }}
                            />
                          ) : field.type === 'select' ? (
                            <select
                              required={field.required}
                              style={{
                                width: '100%', height: 48, padding: '0 16px', border: '1px dashed var(--light-92)', backgroundColor: 'var(--white-100)',
                                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em', color: 'var(--dark-2)', outline: 'none',
                              }}
                            >
                              <option value="">Select...</option>
                              <option value="option1">Option 1</option>
                              <option value="option2">Option 2</option>
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              required={field.required}
                              style={{
                                width: '100%', height: 48, padding: '0 16px', border: '1px dashed var(--light-92)', backgroundColor: 'var(--white-100)',
                                fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, letterSpacing: '-0.02em', color: 'var(--dark-2)', outline: 'none',
                              }}
                            />
                          )}
                        </div>
                      ))}

                      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <input type="checkbox" required />
                        <span className="text-span">I agree with Neozen's Privacy and Cookie Policy</span>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover="hover"
                        initial="idle"
                        style={{ width: '100%', height: 48, position: 'relative', overflow: 'clip', cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <motion.div variants={{ idle: { backgroundColor: 'rgb(5, 5, 5)' }, hover: { backgroundColor: 'rgb(20, 20, 20)' } }} transition={{ duration: 0.3 }} style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, zIndex: 1 }} />
                        <div style={{ overflow: 'hidden', height: 24, position: 'relative', zIndex: 2 }}>
                          <motion.div variants={{ idle: { y: 0 }, hover: { y: -24 } }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ display: 'flex', alignItems: 'center', height: 24, fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: 'rgb(255, 255, 255)', whiteSpace: 'nowrap' }}>
                              {status === 'success' ? 'Thanks for subscribing!' : 'Send Inquiry'}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', height: 24, fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 18, color: 'rgb(255, 255, 255)', whiteSpace: 'nowrap' }}>
                              {status === 'success' ? 'Thanks for subscribing!' : 'Send Inquiry'}
                            </span>
                          </motion.div>
                        </div>
                      </motion.button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ showNumber={false} />
      <Pricing showNumber={false} />
      <Newsletter showNumber={false} />
    </>
  )
}
