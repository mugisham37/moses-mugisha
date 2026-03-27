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
