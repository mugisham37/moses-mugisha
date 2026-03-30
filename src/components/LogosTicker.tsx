'use client';

import Marquee from 'react-fast-marquee';
import { clientLogos } from '../data/projects';

export default function LogosTicker() {
  return (
    <div className="w-full flex flex-col">
      <div className="divider" />
      <div className="py-6 overflow-hidden">
        <Marquee gradient={false} pauseOnHover={false} speed={20}>
          {clientLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={`Client logo ${i + 1}`
              }
              className="h-6 w-auto mr-4"
            />
          ))}
        </Marquee>
      </div>
      <div className="divider" />
    </div>
  );
}
