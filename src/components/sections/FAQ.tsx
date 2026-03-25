'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { DotArrow } from '../ui/DotArrow'
import { ScrollReveal } from '../animations/ScrollReveal'

const faqs = [
  { question: 'How does the subscription model work?', answer: 'The subscription model lets you submit unlimited design requests one at a time. Once your current request is completed, the next one starts automatically. You get consistent, high-quality output without the overhead of hiring.' },
  { question: 'What if I need more than one request at a time?', answer: 'If you need parallel workstreams, we can discuss a custom plan or project-based engagement that fits your pace and team structure.' },
  { question: 'How fast will I receive my designs?', answer: 'Most requests are delivered within 2–4 business days, depending on complexity. Larger projects like full websites or brand systems follow a structured timeline discussed upfront.' },
  { question: 'What tools do you use for design and delivery?', answer: 'I primarily use Figma for design, Framer for web builds, and Adobe Creative Suite for brand assets. Deliverables are shared via organized project folders.' },
  { question: 'Can I cancel my subscription at any time?', answer: 'Yes, you can cancel anytime with no hidden fees or long-term commitments. Your subscription simply ends at the current billing cycle.' },
]

interface FAQProps {
  sectionNumber?: string
  showNumber?: boolean
}

export const FAQ: React.FC<FAQProps> = ({ sectionNumber = '6', showNumber = true }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                {showNumber && <SpanHeading number={sectionNumber} title="FAQ" centered />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>Common Questions</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 680 }}>
                    Answers to the most common questions about working together, timelines, and what to expect.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* FAQ Items */}
            <div style={{ width: '100%' }}>
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <FAQItem
                    {...faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQItem: React.FC<{
  question: string; answer: string; isOpen: boolean; onToggle: () => void
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
      {/* Question */}
      <button
        onClick={onToggle}
        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: '48px 30px', overflow: 'visible' }}
      >
        <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
        <div style={{ zIndex: 2, position: 'relative', display: 'flex', gap: 12 }}>
          <span className="text-question" style={{ flex: 1 }}>{question}</span>
        </div>
      </button>

      {/* Answer */}
      <div style={{ position: 'relative', overflow: 'clip', borderTop: isOpen ? 'none' : '1px dashed var(--light-92)' }}>
        <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ padding: '48px 30px', zIndex: 2, position: 'relative' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <DotArrow direction="up" size={36} />
                </div>
                <p className="text-body" style={{ color: 'var(--dark-30)' }}>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
