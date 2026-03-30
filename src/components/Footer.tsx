'use client';

import { useState } from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="flex gap-8 px-5 justify-center items-center max-w-[1200px] mx-auto before:content-[''] before:w-1/4 before:shrink-0 after:content-[''] after:w-1/4 after:shrink-0 max-tablet:before:hidden max-tablet:after:hidden">
      <div className="flex-1 bg-white border border-silver border-b-0 z-[1] overflow-hidden pb-2">
        {/* Spacer */}
        <div className="h-[20vh]" />

        {/* Let's Talk Ticker */}
        <Link
          href="/contact"
          className={`block text-ink bg-white transition-[background-color,color] duration-300 cursor-pointer${isHovered ? ' !bg-ink !text-white' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
          <div className="h-[100px] flex items-center overflow-hidden max-phone:h-[70px]">
            <Marquee speed={50} direction="left" gradient={false} pauseOnHover={false}>
              <div className="flex items-center gap-5 px-2.5">
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className="heading-2-l whitespace-nowrap max-phone:!text-[40px]">Let&apos;s Talk</span>
              </div>
              <div className="flex items-center gap-5 px-2.5">
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className="heading-2-l whitespace-nowrap max-phone:!text-[40px]">Let&apos;s Talk</span>
              </div>
              <div className="flex items-center gap-5 px-2.5">
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className="heading-2-l whitespace-nowrap max-phone:!text-[40px]">Let&apos;s Talk</span>
              </div>
            </Marquee>
          </div>
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
        </Link>

        {/* Spacer */}
        <div className="h-[20vh]" />

        {/* Bottom bar */}
        <div className="flex gap-2 px-4 items-center justify-between max-phone:flex-col max-phone:gap-1 max-phone:items-start">
          <div className="flex gap-0.5 items-center flex-1">
            <span className="text-14">Created by</span>
            <a
              href="https://thaer.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button btn-14-medium"
            >
              Thaer
            </a>
          </div>
          <div className="flex gap-0.5 items-center justify-center flex-1">
            <span className="text-14">© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
