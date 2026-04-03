import { cn } from "@/lib/utils";

interface IconProps {
  href: string;
  label: string;
  className?: string;
}

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
    </svg>
  );
}

function FallbackIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function resolveHref(href: string): string {
  if (href.startsWith("https://") || href.startsWith("http://")) {
    return href;
  }
  return `https://${href}`;
}

function resolveIcon(label: string) {
  if (label.includes("X")) return <XIcon />;
  if (label.includes("instagram")) return <InstagramIcon />;
  if (label.includes("dribbble")) return <DribbbleIcon />;
  return <FallbackIcon />;
}

export function Icon({ href, label, className }: IconProps) {
  return (
    <a
      href={resolveHref(href)}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center w-[18px] h-[18px] overflow-hidden flex-shrink-0",
        "text-[var(--framer-black)]",
        className
      )}
    >
      {resolveIcon(label)}
    </a>
  );
}

export default Icon;
