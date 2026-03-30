'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from '@phosphor-icons/react';
import { images } from '../data/projects';

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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white">
      <div className="flex items-center gap-8 px-5 py-3 max-w-[1200px] mx-auto max-tablet:max-w-[810px] max-phone:max-w-[390px]">
        {/* Logo — 25% */}
        <div className="w-1/4 shrink-0 flex items-center max-tablet:w-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-[30px]">
            <Image src={images.logo} alt="Maelle" className="h-[18px] w-auto" width={40} height={18} />
          </Link>
        </div>

        {/* Desktop Links — flex 1 */}
        <div className="flex-1 flex gap-1 items-center pl-4 max-phone:hidden">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className="whitespace-nowrap btn-14-semibold primary-button"
            >
              {link.label}{i < navLinks.length - 1 ? ',' : ''}
            </Link>
          ))}
        </div>

        {/* Date/Time + CTA — 25% desktop */}
        <div className="w-1/4 shrink-0 flex items-center justify-center gap-2 max-tablet:w-auto max-tablet:flex-1 max-tablet:justify-end max-phone:hidden">
          <div className="flex-1 flex justify-start items-center max-tablet:hidden">
            <span className="text-[14px] leading-[1.4] tracking-[-0.03em] text-slate whitespace-nowrap">{dateStr}, {timeStr}</span>
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
          className="hidden max-phone:flex max-phone:ml-auto p-1"
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
            className="overflow-hidden flex flex-col px-5 pb-4 pt-2 gap-3 bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block py-2 text-ink btn-14-semibold"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-ink btn-14-medium"
            >
              Book a Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
