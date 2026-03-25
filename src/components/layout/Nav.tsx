import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GridOverlay } from './GridOverlay'
import { Profile } from '../ui/Profile'
import { Button } from '../ui/Button'

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

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
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'var(--light-98)',
        overflow: 'hidden',
      }}
    >
      {/* Top bar - always visible */}
      <div
        style={{
          height: 96,
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1480,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 18,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              color: 'var(--dark-2)',
              padding: '0 6px',
              width: '25%',
            }}
            onClick={() => setIsOpen(false)}
          >
            NEOZEN
          </Link>

          {/* Time, Date, Menu */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 12,
                padding: '0 6px',
                alignItems: 'center',
              }}
            >
              <span className="text-span" style={{ color: 'var(--neutral-50)' }}>
                {dateStr}
              </span>
              <span className="text-span" style={{ color: 'var(--neutral-50)' }}>
                {timeStr}
              </span>
            </div>

            {/* Menu button with dot icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                zIndex: 10,
              }}
              aria-label="Toggle menu"
            >
              <MenuDotIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider below nav bar */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 95,
            left: 0,
            right: 0,
            height: 1,
            borderTop: '1px dashed var(--light-92)',
            zIndex: 5,
          }}
        />
      )}

      {/* Fullscreen menu content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'calc(100vh - 96px)' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: 'hidden',
              backgroundColor: 'var(--light-98)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: 1576,
                margin: '0 auto',
                width: '100%',
                padding: '48px 48px 0',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <GridOverlay columns={2} />

              {/* Menu grid */}
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
                {/* Profile */}
                <Profile theme="light" showLinks />

                {/* Menu links */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 24,
                    gridColumn: '2 / 4',
                  }}
                >
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: 'block',
                          width: '100%',
                          height: '100%',
                          padding: '0 6px',
                        }}
                      >
                        <span className="text-menu-link">{link.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom links and copyright */}
            <div
              style={{
                backgroundColor: 'var(--light-98)',
                borderTop: '1px dashed var(--light-92)',
                zIndex: 1,
              }}
            >
              <div
                style={{
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
                  <GridOverlay columns={2} />
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      zIndex: 1,
                    }}
                  >
                    {socialLinks.map((link) => (
                      <Button
                        key={link.label}
                        label={link.label}
                        href={link.href}
                        external
                        variant="simple-link"
                        textColor="rgb(5, 5, 5)"
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
                  borderTop: '1px dashed var(--light-92)',
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
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <GridOverlay columns={2} />
                  <div
                    style={{
                      display: 'flex',
                      gap: 8,
                      padding: '0 6px',
                      zIndex: 1,
                    }}
                  >
                    <span className="text-span" style={{ color: 'var(--neutral-50)' }}>
                      © {new Date().getFullYear()}
                    </span>
                    <span className="text-span" style={{ color: 'var(--dark-8)' }}>
                      Alex Neozen
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Menu dot icon with animation between states
const MenuDotIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  // Two columns of 5 dots each forming a diamond/arrow
  const closedLeft = [
    { x: -8, y: -8 },
    { x: -4, y: -4 },
    { x: 0, y: 0 },
    { x: -4, y: 4 },
    { x: -8, y: 8 },
  ]
  const closedRight = [
    { x: 8, y: -8 },
    { x: 4, y: -4 },
    { x: 0, y: 0 },
    { x: 4, y: 4 },
    { x: 8, y: 8 },
  ]

  // Open state — dots spread into X
  const openedLeft = [
    { x: -6, y: -6 },
    { x: -3, y: -3 },
    { x: 0, y: 0 },
    { x: -3, y: 3 },
    { x: -6, y: 6 },
  ]
  const openedRight = [
    { x: 6, y: -6 },
    { x: 3, y: -3 },
    { x: 0, y: 0 },
    { x: 3, y: 3 },
    { x: 6, y: 6 },
  ]

  const leftDots = isOpen ? openedLeft : closedLeft
  const rightDots = isOpen ? openedRight : closedRight

  return (
    <div style={{ width: 36, height: 36, position: 'relative' }}>
      {leftDots.map((pos, i) => (
        <motion.div
          key={`l-${i}`}
          animate={{ x: pos.x + 18, y: pos.y + 18 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: 'var(--dark-2)',
          }}
        />
      ))}
      {rightDots.map((pos, i) => (
        <motion.div
          key={`r-${i}`}
          animate={{ x: pos.x + 18, y: pos.y + 18 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            width: 4,
            height: 4,
            backgroundColor: 'var(--dark-2)',
          }}
        />
      ))}
    </div>
  )
}
