import React from 'react'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { TextReveal } from '../animations/TextReveal'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../animations/ScrollReveal'

export const About: React.FC = () => {
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
          padding: '0 48px 72px',
          position: 'relative',
          zIndex: 1,
          overflow: 'visible',
        }}
      >
        <GridOverlay />

        <div
          style={{
            width: '100%',
            maxWidth: 1480,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 48,
            padding: '0 6px',
            zIndex: 1,
            position: 'relative',
          }}
        >
          {/* Text reveal content */}
          <div
            style={{
              backgroundColor: 'var(--light-98)',
              padding: '72px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 48,
              alignItems: 'center',
              zIndex: 1,
              overflow: 'clip',
            }}
          >
            <ScrollReveal>
              <SpanHeading number="1" title="ABOUT ME" centered />
            </ScrollReveal>

            <div style={{ width: '100%', padding: '0 24px' }}>
              <TextReveal
                text="From concept to execution, I focus on building thoughtful digital experiences that solve real problems. My approach blends strategy, design, and consistent attention to detail across every project."
                textColor="rgb(204, 204, 204)"
                revealColor="rgb(5, 5, 5)"
                textAlign="center"
              />
            </div>
          </div>

          {/* CTA row */}
          <ScrollReveal>
            <div
              style={{
                width: '100%',
                maxWidth: 1480,
                height: 48,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(50px, 1fr))',
                gap: 24,
                zIndex: 1,
              }}
            >
              {/* CTA text */}
              <div
                style={{
                  backgroundColor: 'var(--light-98)',
                  border: '1px dashed var(--light-92)',
                  overflow: 'clip',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 30px',
                }}
              >
                <span className="text-span">
                  A closer look at who I am and how I work
                </span>
              </div>

              {/* Button */}
              <Button
                label="Know Me Better"
                href="/about-me"
                fullWidth
                bgColor="rgb(250, 250, 250)"
                textColor="rgb(5, 5, 5)"
                hoverBgColor="rgb(255, 255, 255)"
                hoverTextColor="rgb(5, 5, 5)"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
