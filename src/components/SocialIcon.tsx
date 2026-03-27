'use client';

// Social icon link — 18×18px
// From Framer: Icon / yfJvAIGtJ
// XLogo: color rgb(18,18,18), strokeWidth 1.5

interface SocialIconProps {
  platform: 'x' | 'instagram' | 'dribbble';
  href: string;
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M13.5 3H15.75L10.875 8.625L16.5 15H12.375L9 10.875L5.25 15H3L8.25 9L2.625 3H6.9375L9.9375 6.75L13.5 3ZM12.75 13.875H14.0625L6.5625 4.3125H5.25L12.75 13.875Z"
        fill="#121212"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.25" y="2.25" width="13.5" height="13.5" rx="4" stroke="#121212" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="9" r="3" stroke="#121212" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="5" r="0.75" fill="#121212" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6.75" stroke="#121212" strokeWidth="1.5" fill="none" />
      <path
        d="M2.625 9C2.625 9 5.625 7.125 9 9C12.375 10.875 15.375 9 15.375 9"
        stroke="#121212"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5.625 3.75C5.625 3.75 6.75 7.125 9 9C11.25 10.875 13.875 11.25 15 12.375"
        stroke="#121212"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M3 12.375C3 12.375 5.25 10.875 9 10.875C12.75 10.875 14.625 12.375 14.625 12.375"
        stroke="#121212"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

export function SocialIcon({ platform, href }: SocialIconProps) {
  const icon = {
    x: <XIcon />,
    instagram: <InstagramIcon />,
    dribbble: <DribbbleIcon />,
  }[platform];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        opacity: 1,
        transition: 'opacity 0.2s ease-out',
        flexShrink: 0,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      aria-label={platform}
    >
      {icon}
    </a>
  );
}
