import React from 'react'
import { useParams } from 'react-router-dom'
import { Divider } from '../components/layout/Divider'
import { GridOverlay } from '../components/layout/GridOverlay'
import { ScrollReveal } from '../components/animations/ScrollReveal'

export const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const title = slug === 'privacy' ? 'Privacy Policy' : slug === 'terms' ? 'Terms of Service' : 'Legal'

  return (
    <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Divider />
      <div style={{ width: '100%', maxWidth: 1576, padding: '144px 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
        <GridOverlay />
        <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <ScrollReveal>
            <h1 className="text-h1" style={{ padding: '0 6px', marginBottom: 48 }}>{title}</h1>
            <div style={{ padding: '0 6px', maxWidth: 740 }}>
              <p className="text-body" style={{ color: 'var(--dark-30)' }}>
                This page contains the {title.toLowerCase()} for the Neozen website. Content is managed through Framer's CMS.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export const NotFoundPage: React.FC = () => (
  <section style={{ width: '100%', minHeight: '80vh', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center', padding: '0 48px' }}>
      <ScrollReveal>
        <h1 className="text-h1" style={{ marginBottom: 24 }}>404</h1>
        <p className="text-subtitle" style={{ color: 'var(--neutral-50)', marginBottom: 48 }}>
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-button" style={{ color: 'var(--dark-2)', textDecoration: 'underline' }}>
          Go back home
        </a>
      </ScrollReveal>
    </div>
  </section>
)
