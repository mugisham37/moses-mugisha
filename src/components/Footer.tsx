import Link from "next/link";
import { FooterTicket } from "@/components/FooterTicket";

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-[20px]">
      <div className="flex flex-row gap-[32px] items-stretch">
        {/* Left spacer — matches sidebar width */}
        <div className="w-1/4 flex-shrink-0 hidden lg:block" aria-hidden="true" />

        {/* Center column */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pb-[8px]">
          {/* Spacer */}
          <div className="h-[20vh]" />

          {/* Footer Ticket */}
          <FooterTicket text="Let's Talk" href="/contact" />

          {/* Another spacer */}
          <div className="h-[20vh]" />

          {/* Bottom bar */}
          <div className="flex flex-row items-center justify-between gap-[8px] px-[16px]">
            <div className="flex flex-row items-center gap-[2px] overflow-hidden">
              <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                Created by
              </span>
              <a
                href="https://thaer.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity ml-[4px]"
              >
                Thaer
              </a>
            </div>
            <div className="flex flex-row items-center gap-[2px] overflow-hidden">
              <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                © 2025 All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Right spacer — matches sidebar width */}
        <div className="w-1/4 flex-shrink-0 hidden lg:block" aria-hidden="true" />
      </div>
    </footer>
  );
}

export default Footer;
