import React from 'react'
import { Divider } from '../layout/Divider'
import { GridOverlay } from '../layout/GridOverlay'
import { SpanHeading } from '../layout/SpanHeading'
import { ToolProgress } from '../animations/ToolProgress'
import { ScrollReveal } from '../animations/ScrollReveal'

const coreTools = [
  { name: 'React', percentage: 95, icon: '⚛️' },
  { name: 'Framer', percentage: 100, icon: '▲' },
  { name: 'Adobe', percentage: 85, icon: 'Ai' },
  { name: 'Rive', percentage: 80, icon: 'R' },
]

const otherTools = [
  'Figma', 'Webflow', 'Tailwind', 'TypeScript',
  'Next.js', 'GSAP', 'Blender', 'Notion',
]

export const TechStack: React.FC = () => {
  return (
    <section
      style={{
        width: '100%',
        position: 'relative',
        zIndex: 1,
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
            zIndex: 2,
            position: 'relative',
          }}
        >
          <div
            style={{
              padding: '72px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 48,
              alignItems: 'center',
            }}
          >
            {/* Header */}
            <ScrollReveal>
              <div
                style={{
                  padding: '0 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 48,
                  alignItems: 'center',
                }}
              >
                <SpanHeading number="4" title="TECH STACK" centered />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                    alignItems: 'center',
                  }}
                >
                  <h2 className="text-h2" style={{ textAlign: 'center' }}>
                    Design &amp; Build Tools
                  </h2>
                  <p
                    className="text-subtitle"
                    style={{ textAlign: 'center', maxWidth: 690 }}
                  >
                    The tools, platforms, and technologies I use to design,
                    build, and ship modern digital products from concept to
                    launch.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tools content - 2 column split */}
            <div
              style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 0,
                borderTop: '1px dashed var(--light-92)',
              }}
            >
              {/* Left: Core Stack with progress bars */}
              <div
                style={{
                  padding: '48px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  borderRight: '1px dashed var(--light-92)',
                }}
              >
                <ScrollReveal>
                  <div style={{ padding: '0 6px' }}>
                    <span className="text-body">My Core Stack</span>
                  </div>
                </ScrollReveal>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 12,
                    padding: '0 6px',
                  }}
                >
                  {coreTools.map((tool, i) => (
                    <ScrollReveal key={tool.name} delay={i * 0.15}>
                      <ToolProgress
                        name={tool.name}
                        percentage={tool.percentage}
                        icon={tool.icon}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Right: Other tools grid */}
              <div
                style={{
                  padding: '48px 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                <ScrollReveal>
                  <div style={{ padding: '0 6px' }}>
                    <span className="text-body">Other tools I use</span>
                  </div>
                </ScrollReveal>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 12,
                    padding: '0 6px',
                  }}
                >
                  {otherTools.map((tool, i) => (
                    <ScrollReveal key={tool} delay={i * 0.05}>
                      <div
                        style={{
                          backgroundColor: 'var(--white-100)',
                          borderRadius: 3,
                          padding: '12px 12px 6px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 6,
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 24,
                            borderRadius: 8,
                            backgroundColor: 'var(--light-92)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <span
                            className="text-span-tiny"
                            style={{ color: 'var(--neutral-50)' }}
                          >
                            {tool.substring(0, 2)}
                          </span>
                        </div>
                        <span className="text-span-tiny">{tool}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
