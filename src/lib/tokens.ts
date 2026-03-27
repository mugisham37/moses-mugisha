// Design tokens extracted directly from Framer MCP
export const colors = {
  white: '#ffffff',
  black: '#121212',
  lightGray: '#e3e3e3',
  gray: '#757575',
} as const;

// Typography: exact values from Framer TextStyles
export const typography = {
  h1: {
    fontFamily: 'Geist',
    fontSize: '56px',
    fontWeight: 500,
    lineHeight: '1em',
    letterSpacing: '-0.05em',
  },
  h2: {
    fontFamily: 'Geist',
    fontSize: '26px',
    fontWeight: 500,
    lineHeight: '1.1em',
    letterSpacing: '-0.04em',
  },
  h2L: {
    fontFamily: 'Geist',
    fontSize: '80px',
    fontWeight: 500,
    lineHeight: '1em',
    letterSpacing: '-0.04em',
    textAlign: 'center',
  },
  h3: {
    fontFamily: 'Geist',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1.4em',
    letterSpacing: '-0.03em',
  },
  body16: {
    fontFamily: 'Geist',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1.4em',
    letterSpacing: '-0.03em',
  },
  body14: {
    fontFamily: 'Geist',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1.4em',
    letterSpacing: '-0.03em',
  },
  body12: {
    fontFamily: 'Geist',
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '1.4em',
    letterSpacing: '-0.03em',
  },
  btn16: {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '1em',
    letterSpacing: '-0.03em',
  },
  btn14: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '1em',
    letterSpacing: '-0.03em',
  },
  btn14med: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '1em',
    letterSpacing: '-0.03em',
  },
} as const;

// Breakpoints from Framer: Desktop 1200px, Tablet 810px, Phone 390px
export const breakpoints = {
  phone: 390,
  tablet: 810,
  desktop: 1200,
} as const;
