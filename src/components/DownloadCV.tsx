interface DownloadCVProps {
  text?: string;
  href?: string;
  iconPosition?: "left" | "right";
  className?: string;
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function DownloadCV({
  text = "Download CV",
  href = "#",
  iconPosition = "left",
  className,
}: DownloadCVProps) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center gap-[4px] overflow-visible",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {iconPosition === "left" && <DownloadIcon />}
      <span
        className="text-[14px] leading-[1em] tracking-[-0.03em] font-medium font-[family-name:var(--font-inter-var)] text-[var(--framer-black)]"
      >
        {text}
      </span>
      {iconPosition === "right" && <DownloadIcon />}
    </a>
  );
}

export default DownloadCV;
