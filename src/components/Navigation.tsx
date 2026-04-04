"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

function LocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const u = () => {
      const n = new Date();
      setT(n.toLocaleDateString("en-US", { month: "short", day: "numeric" }) + ", " + n.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }));
    };
    u(); const id = setInterval(u, 1000); return () => clearInterval(id);
  }, []);
  return <span className="text-[14px] font-medium leading-[1em] tracking-[-0.03em] text-[var(--framer-gray)]">{t}</span>;
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[18px] h-[18px]" />;
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="w-[18px] h-[18px] flex items-center justify-center text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors" aria-label="Toggle theme">
      {theme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
      )}
    </button>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [pathname]);
  const links = [{ href: "/", label: "Home" }, { href: "/about", label: "Info" }, { href: "/work", label: "Work" }, { href: "/contact", label: "Contact" }];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--framer-white)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Desktop */}
        <div className="hidden md:flex flex-row items-center gap-[32px] px-[20px] py-[12px]">
          <div className="w-1/4 flex items-center"><Link href="/"><img src="https://framerusercontent.com/images/1Ic0yQoRORDscRbsbAdM78xcalM.svg" alt="Logo" className="h-[20px] w-auto dark:invert" /></Link></div>
          <div className="flex-1 flex flex-row items-center gap-[4px] pl-[16px]">
            {links.map((l, i) => <Link key={l.href} href={l.href} className="text-[14px] font-semibold leading-[1em] tracking-[-0.03em] text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors">{l.label}{i < 3 ? "," : ""}</Link>)}
          </div>
          <div className="w-1/4 flex flex-row items-center justify-center gap-[8px]">
            <div className="flex-1"><LocalTime /></div>
            <ThemeToggle />
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium leading-[1em] tracking-[-0.03em] text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors underline decoration-[var(--framer-light-gray)] underline-offset-[3px]">Book a Call</a>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden flex-row items-center justify-between px-[16px] py-[12px]">
          <Link href="/"><img src="https://framerusercontent.com/images/1Ic0yQoRORDscRbsbAdM78xcalM.svg" alt="Logo" className="h-[18px] w-auto dark:invert" /></Link>
          <div className="flex items-center gap-[12px]">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col items-center justify-center w-[32px] h-[32px] gap-[5px]" aria-label="Menu">
              <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-[18px] h-[1.5px] bg-[var(--framer-black)]" />
              <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-[18px] h-[1.5px] bg-[var(--framer-black)]" />
              <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-[18px] h-[1.5px] bg-[var(--framer-black)]" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[var(--framer-light-gray)] max-w-[1200px] mx-auto" />
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }} className="md:hidden overflow-hidden bg-[var(--framer-white)] border-b border-[var(--framer-light-gray)]">
            <div className="flex flex-col gap-[4px] px-[16px] py-[24px] max-w-[1200px] mx-auto">
              {links.map((l) => <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className={`text-[28px] font-medium leading-[1.3em] tracking-[-0.04em] transition-colors ${pathname === l.href ? "text-[var(--framer-black)]" : "text-[var(--framer-gray)]"}`}>{l.label}</Link>)}
              <div className="mt-[16px] pt-[16px] border-t border-[var(--framer-light-gray)] flex flex-row items-center justify-between">
                <LocalTime />
                <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] underline decoration-[var(--framer-light-gray)] underline-offset-[3px]">Book a Call</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default Navigation;
