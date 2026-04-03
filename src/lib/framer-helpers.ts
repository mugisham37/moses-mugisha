/**
 * Shared utilities for Framer-to-Next.js animation and scroll patterns.
 * These helpers standardize common animation patterns used across components.
 */

import type { Variants, Transition } from "framer-motion";

// ============================================================
// Default Transitions
// ============================================================

/** Standard ease curve matching Framer's default */
export const FRAMER_EASE = [0.25, 0.1, 0.25, 1] as const;

/** Smooth deceleration curve */
export const EASE_OUT = [0, 0, 0.58, 1] as const;

/** Smooth acceleration + deceleration */
export const EASE_IN_OUT = [0.42, 0, 0.58, 1] as const;

/** Expressive ease-out (common in Framer projects) */
export const EXPRESSIVE_EASE = [0.16, 1, 0.3, 1] as const;

/** Default transition for most animations */
export const defaultTransition: Transition = {
  duration: 0.6,
  ease: FRAMER_EASE,
};

/** Quick transition for hover/tap */
export const quickTransition: Transition = {
  duration: 0.2,
  ease: FRAMER_EASE,
};

/** Spring transition for bouncy interactions */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

// ============================================================
// Viewport Entry Animation Variants
// ============================================================

/** Fade up on viewport entry */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/** Fade in (no movement) on viewport entry */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

/** Slide in from left on viewport entry */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Slide in from right on viewport entry */
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Scale up on viewport entry */
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

// ============================================================
// Stagger Container Variants
// ============================================================

/** Container that staggers children animations */
export function staggerContainer(
  staggerDelay = 0.1,
  delayChildren = 0.2
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/** Child item variant for use with stagger container */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: FRAMER_EASE },
  },
};

// ============================================================
// Responsive Breakpoints (matching Framer defaults)
// ============================================================

export const BREAKPOINTS = {
  mobile: 390,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// ============================================================
// Fluid Typography Utilities
// ============================================================

/**
 * Generate a CSS clamp() string for fluid typography or spacing.
 * Scales linearly from minPx at minVw to maxPx at maxVw.
 *
 * Usage in Tailwind arbitrary value:
 *   className={`text-[${fluidType(28, 56)}]`}
 *   // → text-[clamp(28px,calc(17.60px+2.667vw),56px)]
 *
 * @param minPx - Value at the minimum viewport width
 * @param maxPx - Value at the maximum viewport width
 * @param minVw - Minimum viewport width in px (default: 390 — mobile)
 * @param maxVw - Maximum viewport width in px (default: 1440 — wide desktop)
 */
export function fluidType(
  minPx: number,
  maxPx: number,
  minVw: number = BREAKPOINTS.mobile,
  maxVw: number = BREAKPOINTS.wide
): string {
  const slope = (maxPx - minPx) / (maxVw - minVw);
  const intercept = minPx - slope * minVw;
  const vwPercent = (slope * 100).toFixed(4);
  const interceptFixed = intercept.toFixed(2);
  return `clamp(${minPx}px,calc(${interceptFixed}px + ${vwPercent}vw),${maxPx}px)`;
}

/**
 * Generate a fluid clamp for spacing (padding, gap, margin).
 * Same formula as fluidType — alias for semantic clarity.
 */
export const fluidSpace = fluidType;

/**
 * Compute the clamp() values for font-size AND line-height together.
 * Returns both strings for direct use in Tailwind classes.
 *
 * @example
 * const { fontSize, lineHeight } = fluidTextPair(28, 56, 36, 72);
 * className={`text-[${fontSize}] leading-[${lineHeight}]`}
 */
export function fluidTextPair(
  minFontPx: number,
  maxFontPx: number,
  minLineHeightPx: number,
  maxLineHeightPx: number,
  minVw: number = BREAKPOINTS.mobile,
  maxVw: number = BREAKPOINTS.wide
): { fontSize: string; lineHeight: string } {
  return {
    fontSize: fluidType(minFontPx, maxFontPx, minVw, maxVw),
    lineHeight: fluidType(minLineHeightPx, maxLineHeightPx, minVw, maxVw),
  };
}

// ============================================================
// Viewport Config Defaults
// ============================================================

/** Default viewport config for whileInView — trigger once, with margin */
export const defaultViewport = {
  once: true,
  margin: "-100px" as const,
};

/** Viewport config that triggers every time */
export const repeatViewport = {
  once: false,
  amount: 0.3,
};
