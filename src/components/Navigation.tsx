"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(`${dateStr}, ${timeStr}`);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] bg-[var(--framer-white)]",
          className
        )}
      >
        <div className="max-w-[1200px] mx-auto flex flex-row items-center gap-[32px] px-[20px] py-[12px] relative">
          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)]" />

          {/* Logo — left column */}
          <div className="w-1/4 flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Maelle"
                width={24}
                height={24}
              />
            </Link>
          </div>

          {/* Nav links — center column, desktop only */}
          <nav className="flex-1 hidden lg:flex flex-row items-center gap-[4px] pl-[16px]">
            <Link
              href="/"
              className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
            >
              Home,
            </Link>
            <Link
              href="/about"
              className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
            >
              Info,
            </Link>
            <Link
              href="/work"
              className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
            >
              Work,
            </Link>
            <Link
              href="/contact"
              className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          {/* Right column */}
          <div className="w-1/4 flex items-center justify-end gap-[8px]">
            {/* Desktop: time + book a call */}
            <div className="hidden lg:flex items-center gap-[8px]">
              {time && (
                <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-gray)] font-[family-name:var(--font-geist)]">
                  {time}
                </span>
              )}
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile: hamburger toggle */}
            <button
              className="flex lg:hidden items-center justify-center w-[36px] h-[36px]"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                /* Close (X) icon */
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2"
                    y1="2"
                    x2="16"
                    y2="16"
                    stroke="var(--framer-black)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="2"
                    y2="16"
                    stroke="var(--framer-black)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="2"
                    y1="4.5"
                    x2="16"
                    y2="4.5"
                    stroke="var(--framer-black)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="9"
                    x2="16"
                    y2="9"
                    stroke="var(--framer-black)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="2"
                    y1="13.5"
                    x2="16"
                    y2="13.5"
                    stroke="var(--framer-black)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[var(--framer-white)] z-[99] flex flex-col pt-[80px] px-[20px] gap-[24px] lg:hidden">
          <nav className="flex flex-col gap-[8px]">
            <Link
              href="/"
              className="text-[40px] leading-[1em] tracking-[-0.05em] font-[500] font-[family-name:var(--font-geist)] text-[var(--framer-black)]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[40px] leading-[1em] tracking-[-0.05em] font-[500] font-[family-name:var(--font-geist)] text-[var(--framer-black)]"
              onClick={() => setMenuOpen(false)}
            >
              Info
            </Link>
            <Link
              href="/work"
              className="text-[40px] leading-[1em] tracking-[-0.05em] font-[500] font-[family-name:var(--font-geist)] text-[var(--framer-black)]"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="text-[40px] leading-[1em] tracking-[-0.05em] font-[500] font-[family-name:var(--font-geist)] text-[var(--framer-black)]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
