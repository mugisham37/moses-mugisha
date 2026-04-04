import Link from "next/link";

const icons: Record<string, React.ReactNode> = {
  "Social button / X": (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M214.75 211.71l-62.6-98.5-61.37 69.74a8 8 0 11-12.04-10.55l65.2-74.09L76.73 44.29A8 8 0 0183.48 32h13.67a8 8 0 016.75 3.71l56.53 88.92 55.29-62.84a8 8 0 1112.04 10.55l-59.13 67.2 72.64 114.17A8 8 0 01234.52 264h-13.67a8 8 0 01-6.1-3.29z" transform="scale(0.85) translate(10, 10)" fill="rgb(18, 18, 18)" />
    </svg>
  ),
  "Social button / instagram": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgb(18,18,18)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="rgb(18,18,18)" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.25" fill="rgb(18,18,18)" />
    </svg>
  ),
  "Social button / dribbble": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="rgb(18,18,18)" strokeWidth="1.5" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M19.13 5.09C15.22 9.14 10.93 10.44 2.25 10.84M21.75 12.84c-6.62-1.41-12.14.38-16.62 7.11" stroke="rgb(18,18,18)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

interface IconProps {
  variant: string;
  href: string;
}

export function Icon({ variant, href }: IconProps) {
  const normalizedHref = href.startsWith("http") ? href : `https://${href}`;

  return (
    <Link
      href={normalizedHref}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[18px] h-[18px] flex items-center justify-center overflow-hidden opacity-60 hover:opacity-100 transition-opacity"
    >
      {icons[variant] || (
        <div className="w-[18px] h-[18px] rounded-full bg-[var(--framer-gray)]" />
      )}
    </Link>
  );
}

export default Icon;
