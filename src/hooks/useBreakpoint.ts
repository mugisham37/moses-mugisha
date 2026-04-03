"use client";

/**
 * useBreakpoint — runtime breakpoint detection hook.
 *
 * IMPORTANT: Prefer CSS breakpoints (Tailwind prefixes, clamp()) over this hook.
 * Use this hook ONLY when you need to conditionally render different JSX trees
 * (not just different styles). CSS is always faster and avoids hydration issues.
 *
 * When to use:
 * - Rendering a completely different component structure on mobile vs desktop
 *   (e.g., <MobileNav /> vs <DesktopNav />)
 * - Calculating values that depend on the viewport width in JavaScript
 *
 * When NOT to use:
 * - Different padding/margin → use Tailwind `md:`, `lg:` prefixes instead
 * - Different font size → use `clamp()` or Tailwind prefixes instead
 * - Show/hide elements → use `hidden md:block` instead
 */

import { useState, useEffect, useCallback } from "react";
import { BREAKPOINTS, type Breakpoint } from "@/lib/framer-helpers";

export interface BreakpointState {
  /** Current viewport width in px */
  width: number;
  /** Current named breakpoint */
  breakpoint: Breakpoint;
  /** true when width < 768px */
  isMobile: boolean;
  /** true when width >= 768px and < 1024px */
  isTablet: boolean;
  /** true when width >= 1024px and < 1440px */
  isDesktop: boolean;
  /** true when width >= 1440px */
  isWide: boolean;
  /** true when width >= 768px (tablet or larger) */
  isTabletOrAbove: boolean;
  /** true when width >= 1024px (desktop or larger) */
  isDesktopOrAbove: boolean;
}

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.wide) return "wide";
  if (width >= BREAKPOINTS.desktop) return "desktop";
  if (width >= BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

function buildState(width: number): BreakpointState {
  const breakpoint = getBreakpoint(width);
  return {
    width,
    breakpoint,
    isMobile: width < BREAKPOINTS.tablet,
    isTablet: width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop,
    isDesktop: width >= BREAKPOINTS.desktop && width < BREAKPOINTS.wide,
    isWide: width >= BREAKPOINTS.wide,
    isTabletOrAbove: width >= BREAKPOINTS.tablet,
    isDesktopOrAbove: width >= BREAKPOINTS.desktop,
  };
}

/**
 * Returns the current breakpoint state, updated on window resize.
 * SSR-safe: defaults to mobile (390px) until hydration.
 *
 * @example
 * const { isMobile, isDesktopOrAbove } = useBreakpoint();
 * return isMobile ? <MobileLayout /> : <DesktopLayout />;
 */
export function useBreakpoint(): BreakpointState {
  const [state, setState] = useState<BreakpointState>(() =>
    buildState(BREAKPOINTS.mobile) // SSR default — avoids hydration mismatch
  );

  const handleResize = useCallback(() => {
    setState(buildState(window.innerWidth));
  }, []);

  useEffect(() => {
    // Set real width on mount
    handleResize();

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return state;
}

export default useBreakpoint;
