import type { ReactNode } from 'react';
import styles from './ThreeColumnLayout.module.css';

interface Props {
  left?: ReactNode;
  middle: ReactNode;
  right?: ReactNode;
}

export default function ThreeColumnLayout({ left, middle, right }: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.left}>{left}</div>
      <div className={styles.middle}>{middle}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}
/* Exact values: padding 0 20px, gap 32px, horizontal flex, align-start */
.main {
  display: flex;
  gap: 32px;
  padding: 0 20px;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* sticky, 25%, 100vh, top 0, z-index 3, padding 140px 0 8px 0, space-between */
.left {
  position: sticky;
  top: 0;
  width: 25%;
  height: 100vh;
  flex-shrink: 0;
  z-index: 3;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  padding: 140px 0 8px 0;
}

/* flex 1, border left/right 1px Light Gray, padding 140px 16px 0 16px */
.middle {
  flex: 1;
  min-width: 0;
  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);
  padding: 140px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* sticky, 25%, 100vh, top 0, z-index 3, padding 140px 0 8px 0, space-between */
.right {
  position: sticky;
  top: 0;
  width: 25%;
  height: 100vh;
  flex-shrink: 0;
  z-index: 3;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 140px 0 8px 0;
}

/* Tablet: collapse sidebars */
@media (max-width: 1199px) {
  .main {
    max-width: 810px;
    gap: 0;
  }
  .left, .right {
    display: none;
  }
  .middle {
    border-left: none;
    border-right: none;
    padding: 120px 0 0 0;
  }
}

/* Phone */
@media (max-width: 809px) {
  .main {
    max-width: 390px;
    padding: 0 12px;
  }
  .middle {
    padding: 100px 0 0 0;
  }
}
