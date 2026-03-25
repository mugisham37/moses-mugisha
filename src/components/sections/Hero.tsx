'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GridOverlay } from '../layout/GridOverlay'
import { Profile } from '../ui/Profile'
import { Button } from '../ui/Button'
import { SpanHeading } from '../layout/SpanHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        height: '100vh',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--light-98)',
          overflow: 'visible',
          padding: '0 48px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1480,
            height: '100%',
            padding: '144px 0 72px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <GridOverlay columns={2} />

          {/* Top content grid */}
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 1fr',
              gap: 0,
              zIndex: 1,
            }}
          >
            {/* Column 1: Profile */}
            <ScrollReveal delay={0.2}>
              <div style={{ width: 138 }}>
                <Profile theme="light" showLinks />
              </div>
            </ScrollReveal>

            {/* Columns 2-3: Newest Projects + CTA */}
            <div
              style={{
                gridColumn: '2 / 4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 24,
                overflow: 'clip',
              }}
            >
              {/* Newest Projects header */}
              <ScrollReveal delay={0.3}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 0,
                  }}
                >
                  <div
                    style={{
                      padding: '0 6px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: 12,
                    }}
                  >
                    <SpanHeading number="1" title="NEWEST PROJECTS" />
                    <p className="text-body" style={{ maxWidth: 180 }}>
                      Recent projects focused on clarity and usability.
                    </p>
                  </div>

                  {/* Project thumbnail placeholder */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', padding: '0 6px' }}>
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '1',
                          borderRadius: 3,
                          overflow: 'hidden',
                          backgroundColor: 'var(--light-92)',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 12,
                            left: 12,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                          }}
                        >
                          <span className="text-span" style={{ color: 'var(--dark-2)' }}>
                            Aerosound
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Button */}
              <ScrollReveal delay={0.4}>
                <Button
                  label="Let's Start a Collaboration"
                  href="/contact"
                  fullWidth
                  bgColor="rgb(5, 5, 5)"
                  textColor="rgb(250, 250, 250)"
                  hoverBgColor="rgb(5, 5, 5)"
                  hoverTextColor="rgb(255, 255, 255)"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* Hero title - NEOZEN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              width: '100%',
              zIndex: 1,
              overflow: 'visible',
            }}
          >
            <h1
              className="text-hero-title"
              style={{
                fontSize: 'clamp(60px, 15vw, 220px)',
                width: '100%',
                textAlign: 'left',
              }}
            >
              NEOZEN
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
