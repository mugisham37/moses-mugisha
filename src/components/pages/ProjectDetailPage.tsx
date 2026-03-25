import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Divider } from '../components/layout/Divider'
import { GridOverlay } from '../components/layout/GridOverlay'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { Newsletter } from '../components/sections/Newsletter'

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const projectName = slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Project'

  return (
    <>
      <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Divider />
        <div style={{ width: '100%', maxWidth: 1576, padding: '144px 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
          <GridOverlay />
          <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 48, padding: '0 6px' }}>
                <Link to="/projects" className="text-span" style={{ color: 'var(--neutral-50)' }}>← Back to Projects</Link>
                <h1 className="text-h1">{projectName}</h1>
                <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 3, backgroundColor: 'var(--light-92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="text-h2" style={{ color: 'var(--neutral-50)' }}>{projectName}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <Newsletter showNumber={false} />
    </>
  )
}
