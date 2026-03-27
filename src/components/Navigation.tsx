import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { images } from '../data/projects';
import styles from './Navigation.module.css';

export default function Navigation() {
  const location = useLocation();
  const [time, setTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
          <Link to="/" className={styles.logo}>
            <img src={images.logo} alt="Maelle" className={styles.logoImg} />
          </Link>
        </div>

        {/* Desktop Links — flex 1 */}
        <div className={styles.pagesDesktop}>
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
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
                to={link.path}
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
