'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Nav links as they appear in Framer (exact text including trailing commas)
const navLinks = [
  { label: 'Home,', href: '/' },
  { label: 'Info,', href: '/about' },
  { label: 'Work,', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

function LiveTime() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    function update() {
      const now = new Date();
      setDate(
        now.toLocaleDateString('en', {
          month: 'short',
          day: 'numeric',
        })
      );
      setTime(
        now.toLocaleTimeString('en', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        })
      );
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      style={{
        fontFamily: 'var(--font-geist)',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '1.4em',
        letterSpacing: '-0.03em',
        color: '#757575',
        display: 'flex',
        gap: '2px',
        alignItems: 'center',
      }}
    >
      {date},{' '}{time}
    </span>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <>
      {/* Desktop nav — ≥810px */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: '#ffffff',
        }}
      >
        <nav
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            padding: '12px 20px',
            borderBottom: '1px solid #e3e3e3',
            position: 'relative',
          }}
        >
          {/* Logo zone — 25% width, left aligned */}
          <div style={{ width: '25%', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ borderRadius: '30px', overflow: 'visible', display: 'flex' }}>
              <Image
                src="/images/logo.svg"
                alt="Maelle"
                width={80}
                height={24}
                style={{ display: 'block' }}
                priority
              />
            </Link>
          </div>

          {/* Nav links — center/flex-1, hidden on mobile */}
          <div
            className="nav-links-desktop"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              paddingLeft: '16px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '1em',
                  letterSpacing: '-0.03em',
                  color: isActive(link.href) ? '#121212' : '#757575',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease-out',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right zone — 25% width */}
          <div
            style={{
              width: '25%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '8px',
            }}
          >
            {/* Live date/time */}
            <div className="nav-time-desktop">
              <LiveTime />
            </div>

            {/* Book a Call CTA */}
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '1em',
                letterSpacing: '-0.03em',
                color: '#757575',
                textDecoration: 'none',
                transition: 'color 0.2s ease-out',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#121212')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#757575')}
            >
              Book a Call
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#121212',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '1px',
                  backgroundColor: '#121212',
                  marginBottom: '5px',
                  transition: 'transform 0.2s',
                  transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '1px',
                  backgroundColor: '#121212',
                  transition: 'opacity 0.2s',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '20px',
                  height: '1px',
                  backgroundColor: '#121212',
                  marginTop: '5px',
                  transition: 'transform 0.2s',
                  transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #e3e3e3',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.03em',
                    color: isActive(link.href) ? '#121212' : '#757575',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#757575',
                  textDecoration: 'none',
                }}
              >
                Book a Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 809px) {
          .nav-links-desktop { display: none !important; }
          .nav-time-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { images } from '../data/projects';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenRef = useRef(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpenRef.current) {
      startTransition(() => {
        setMenuOpen(false);
      });
    }
  }, [pathname]);

  const dateStr = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const timeStr = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Info', path: '/about' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo — 25% */}
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            <Image src={images.logo} alt="Maelle" className={styles.logoImg} width={40} height={18} />
          </Link>
        </div>

        {/* Desktop Links — flex 1 */}
        <div className={styles.pagesDesktop}>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${styles.navLink} btn-14-semibold primary-button`}
            >
              {link.label}{i < navLinks.length - 1 ? ',' : ''}
            </Link>
          ))}
        </div>

        {/* Date/Time + CTA — 25% desktop */}
        <div className={styles.rightSection}>
          <div className={styles.dateTime}>
            <span className={styles.dateTimeText}>{dateStr}, {timeStr}</span>
          </div>
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button btn-14-medium"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* 1px bottom border */}
      <div className="divider" />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`${styles.mobileLink} btn-14-semibold`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.mobileLink} btn-14-medium`}
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--white);
}

.inner {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 12px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.logoSection {
  width: 25%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 30px;
}

.logoImg {
  height: 18px;
  width: auto;
}

.pagesDesktop {
  flex: 1;
  display: flex;
  gap: 4px;
  align-items: center;
  padding-left: 16px;
}

.navLink {
  white-space: nowrap;
}

.rightSection {
  width: 25%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.dateTime {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.dateTimeText {
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4em;
  letter-spacing: -0.03em;
  color: var(--gray);
  white-space: nowrap;
}

.menuToggle {
  display: none;
  padding: 4px;
}

.mobileMenu {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 8px 20px 16px;
  gap: 12px;
  background: var(--white);
}

.mobileLink {
  display: block;
  padding: 8px 0;
  color: var(--black);
}

/* Tablet */
@media (max-width: 1199px) {
  .inner {
    max-width: 810px;
  }

  .logoSection {
    width: auto;
  }

  .rightSection {
    width: auto;
    flex: 1;
    justify-content: flex-end;
  }

  .dateTime {
    display: none;
  }
}

/* Phone */
@media (max-width: 809px) {
  .inner {
    max-width: 390px;
  }

  .pagesDesktop {
    display: none;
  }

  .rightSection {
    display: none;
  }

  .menuToggle {
    display: flex;
    margin-left: auto;
  }
}
