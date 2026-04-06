"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function LetsTalkTicker() {
  const items = Array(10).fill("Let's Talk");
  return (
    <Link href="/contact" className="block w-full overflow-hidden group">
      <div className="h-[1px] bg-[var(--framer-light-gray)]" />
      <div className="relative h-[100px] md:h-[120px] flex items-center overflow-hidden group-hover:bg-[var(--framer-black)] transition-colors duration-300">
        <motion.div className="flex items-center gap-[20px] whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } }}>
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-[20px]">
              <span className="w-[10px] h-[11px] bg-[var(--framer-gray)] group-hover:bg-[var(--framer-white)] transition-colors duration-300 inline-block flex-shrink-0" style={{ transform: "rotate(45deg)" }} />
              <span className="text-[50px] md:text-[80px] font-medium leading-[1em] tracking-[-0.04em] text-[var(--framer-black)] group-hover:text-[var(--framer-white)] transition-colors duration-300">{t}</span>
            </span>
          ))}
        </motion.div>
      </div>
      <div className="h-[1px] bg-[var(--framer-light-gray)]" />
    </Link>
  );
}

/** Footer that renders INSIDE the middle column content flow */
export function FooterContent() {
  return (
    <div className="w-full">
      <div className="h-[20vh] opacity-0" />
      <LetsTalkTicker />
      <div className="h-[20vh] opacity-0" />
      <div className="flex flex-row items-center justify-center px-[16px] pb-[8px]">
        <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">© 2025 Mugisha Moses. All rights reserved.</span>
      </div>
    </div>
  );
}

export default FooterContent;
