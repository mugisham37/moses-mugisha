import React from 'react'
import { Divider } from '../components/layout/Divider'
import { GridOverlay } from '../components/layout/GridOverlay'
import { SpanHeading } from '../components/layout/SpanHeading'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Newsletter } from '../components/sections/Newsletter'

export const ProjectsPage: React.FC = () => (
  <>
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '144px 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', padding: '0 6px' }}>
              <SpanHeading number="1" title="PROJECTS" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                <h1 className="text-h1" style={{ textAlign: 'center' }}>All Projects</h1>
                <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 700 }}>
                  A complete collection of work across product, UI, and digital design.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
            {['Kudos', 'Aerosound', 'Avenzor', 'Plywood', '+XZERO®', 'Charmant'].map((name, i) => (
              <ScrollReveal key={name} delay={i * 0.1}>
                <a href={`/projects/${name.toLowerCase()}`} style={{ display: 'block', padding: '0 6px', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 3, backgroundColor: 'var(--light-92)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-h3" style={{ color: 'var(--neutral-50)' }}>{name}</span>
                  </div>
                  <span className="text-h3">{name}</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Newsletter showNumber={false} />
  </>
)
