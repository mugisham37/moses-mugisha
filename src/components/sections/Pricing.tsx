'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'

const pricingPlans = [
  {
    name: 'Subscription',
    price: '4,499',
    period: '/month',
    delivery: 'Delivery: Ongoing',
    description: 'Perfect for Startups, scale-ups, or growing teams needing reliable creative without hiring full-time.',
    features: [
      '1 active request at a time',
      'Unlimited design tasks (one by one)',
      'Web, brand, content, motion support',
      'Weekly updates + async reviews',
      'Cancel anytime, no hidden fees',
    ],
  },
  {
    name: 'Project',
    price: '9,499',
    period: '/project',
    delivery: 'Delivery: 4 weeks',
    description: 'Perfect for website launches, brand identity, product design, campaign creative.',
    features: [
      'Fixed scope & timeline',
      'Dedicated creative team',
      'Weekly calls + Framer access',
      'Full delivery & handoff',
      'Optional dev support',
    ],
  },
]

interface PricingProps {
  sectionNumber?: string
  showNumber?: boolean
}

export const Pricing: React.FC<PricingProps> = ({ sectionNumber = '5', showNumber = true }) => {
  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', backgroundColor: 'var(--dark-2)', padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        {/* Grid overlay behind */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'clip', padding: '0 48px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 1480, height: '100%', position: 'relative' }}>
            <GridOverlay />
          </div>
        </div>

        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 1, position: 'relative' }}>
          <div style={{ padding: '72px 0 48px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
            <ScrollReveal>
              <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
                {showNumber && <SpanHeading number={sectionNumber} title="PRICING" centered />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                  <h2 className="text-h2" style={{ textAlign: 'center', color: 'var(--white-100)' }}>Service Options</h2>
                  <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 730, color: 'var(--neutral-50)' }}>
                    Transparent pricing built around project scope, complexity, and the level of involvement required to deliver high-quality results.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pricing Cards */}
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
              {pricingPlans.map((plan, i) => (
                <ScrollReveal key={plan.name} delay={i * 0.15}>
                  <PricingCard {...plan} />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div style={{ width: '100%', height: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              <div style={{ backgroundColor: 'var(--dark-2)', border: '1px dashed var(--dark-8)', overflow: 'clip', display: 'flex', alignItems: 'center', padding: '0 30px' }}>
                <span className="text-span" style={{ color: 'var(--neutral-50)' }}>Have questions about pricing or scope?</span>
              </div>
              <Button label="Schedule a Call" href="https://cal.com/" external fullWidth bgColor="rgb(5, 5, 5)" textColor="rgb(255, 255, 255)" hoverBgColor="rgb(10, 10, 10)" hoverTextColor="rgb(128, 128, 128)" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

const PricingCard: React.FC<{
  name: string; price: string; period: string; delivery: string; description: string; features: string[]
}> = ({ name, price, period, delivery, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
      style={{ padding: '0 6px' }}
    >
      <div style={{
        backgroundColor: 'var(--dark-4)', borderRadius: 3, padding: '48px 24px',
        display: 'flex', flexDirection: 'column', gap: 96, overflow: 'clip',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="text-h3" style={{ color: 'var(--white-100)' }}>{name}</span>
          <div style={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
            <span className="text-currency" style={{ color: 'var(--white-100)', paddingTop: 17 }}>$</span>
            <span className="text-price" style={{ color: 'var(--white-100)' }}>{price}</span>
            <span className="text-span" style={{ color: 'var(--neutral-50)', alignSelf: 'flex-end', paddingBottom: 4 }}>{period}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {features.map((f) => (
              <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <div style={{ width: 4, height: 4, backgroundColor: 'var(--neutral-50)', borderRadius: 1, flexShrink: 0 }} />
                <span className="text-span" style={{ color: 'var(--light-80)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <p className="text-span" style={{ color: 'var(--neutral-50)', maxWidth: 320 }}>{description}</p>
          <span className="text-span-italic-tiny" style={{ color: 'var(--neutral-50)' }}>{delivery}</span>
        </div>
      </div>
    </motion.div>
  )
}
