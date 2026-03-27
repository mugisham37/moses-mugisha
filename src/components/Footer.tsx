import { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import styles from './Footer.module.css';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Spacer */}
        <div style={{ height: '20vh' }} />

        {/* Let's Talk Ticker */}
        <Link
          to="/contact"
          className={`${styles.tickerSection} ${isHovered ? styles.tickerHovered : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
          <div className={styles.tickerWrap}>
            <Marquee speed={50} direction="left" gradient={false} pauseOnHover={false}>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let's Talk</span>
              </div>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let's Talk</span>
              </div>
              <div className={styles.tickerItem}>
                <span
                  className="diamond diamond-lg"
                  style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.5)' : undefined }}
                />
                <span className={`heading-2-l ${styles.tickerText}`}>Let's Talk</span>
              </div>
            </Marquee>
          </div>
          <div className="divider" style={{ backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : undefined }} />
        </Link>

        {/* Spacer */}
        <div style={{ height: '20vh' }} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.createdBy}>
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
          <div className={styles.copyright}>
            <span className="text-14">© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
