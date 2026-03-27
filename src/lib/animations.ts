import { Variants } from 'framer-motion';

// Entrance animation: fade + slide up
// Duration 0.6s, cubic-bezier matching Framer spring feel
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger container — wraps lists that animate children in sequence
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

// Page transition — used with AnimatePresence on route changes
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

// Hover scale for project card images
export const imageHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.04,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

// Nav link hover color transition
export const navLinkHover = {
  rest: { color: '#757575' },
  hover: {
    color: '#121212',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};
