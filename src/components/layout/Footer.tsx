import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GridOverlay } from './GridOverlay'
import { Profile } from '../ui/Profile'
import { Button } from '../ui/Button'

export const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const dateStr = time.toLocaleDateString('en-US', { weekday: 'long', month: 'long' })
  const timeStr = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })

  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about-me' },
    { label: 'My Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { label: 'Framer', href: 'https://framer.link/UdEP7eA' },
    { label: 'X (Twitter)', href: 'https://x.com/CristianMielu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-mielu-a8b2b3b5/' },
    { label: 'Instagram', href: 'https://www.instagram.com/cristian_mielu/' },
    { label: 'Academy', href: 'https://framer.link/mTQi1ow' },
  ]

  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 800,
        backgroundColor: 'var(--dark-2)',
        zIndex: 1,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top bar with logo and time */}
      <div
        style={{
          height: 96,
          padding: '0 48px',
          borderBottom: '1px dashed var(--dark-8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: 1480,
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: 'var(--white-100)',
              padding: '0 6px',
              width: '25%',
            }}
          >
            NEOZEN
          </Link>

          <div style={{ display: 'flex', gap: 12, padding: '0 6px', alignItems: 'center' }}>
            <span className="text-span" style={{ color: 'var(--neutral-50)' }}>{dateStr}</span>
            <span className="text-span" style={{ color: 'var(--neutral-50)' }}>{timeStr}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: 1576,
          margin: '0 auto',
          width: '100%',
          padding: '144px 48px 0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <GridOverlay columns={2} />

        <div
          style={{
            maxWidth: 1480,
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: 0,
            zIndex: 1,
          }}
        >
          <Profile theme="dark" showLinks />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 24,
              gridColumn: '2 / 4',
            }}
          >
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0 6px',
                }}
              >
                <span
                  className="text-menu-link"
                  style={{ color: 'var(--white-100)' }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div style={{ backgroundColor: 'var(--dark-2)', zIndex: 1 }}>
        {/* Social links */}
        <div
          style={{
            borderTop: '1px dashed var(--dark-8)',
            height: 96,
            padding: '0 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 1480,
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', gap: 12, zIndex: 1 }}>
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  external
                  variant="simple-link"
                  textColor="rgb(255, 255, 255)"
                  hoverTextColor="rgb(128, 128, 128)"
                  showArrow={false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px dashed var(--dark-8)',
            padding: '0 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 1480,
              width: '100%',
              height: 96,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', gap: 8, padding: '0 6px', zIndex: 1 }}>
              <span className="text-span" style={{ color: 'var(--neutral-50)' }}>
                © {new Date().getFullYear()}
              </span>
              <span className="text-span" style={{ color: 'var(--white-100)' }}>
                Alex Neozen
              </span>
            </div>
            <div style={{ display: 'flex', gap: 8, padding: '0 6px', zIndex: 1 }}>
              <span className="text-span" style={{ color: 'var(--neutral-50)' }}>
                Made in
              </span>
              <span className="text-span" style={{ color: 'var(--white-100)' }}>
                Framer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
