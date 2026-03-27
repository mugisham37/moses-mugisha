'use client';

import Marquee from 'react-fast-marquee';
import { clientLogos } from '../data/projects';
import styles from './LogosTicker.module.css';

export default function LogosTicker() {
  return (
    <div className={styles.container}>
      <div className="divider" />
      <div className={styles.tickerWrap}>
        <Marquee gradient={false} pauseOnHover={false} speed={20}>
          {clientLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.url}
              alt={`Client logo ${i + 1}`}
              style={{ height: 24, width: 'auto', marginRight: 16 }}
            />
          ))}
        </Marquee>
      </div>
      <div className="divider" />
    </div>
  );
}
