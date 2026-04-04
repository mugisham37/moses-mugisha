import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  href: string;
  size?: "16" | "14";
}

export function PrimaryButton({ text, href, size = "16" }: PrimaryButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const fontSize = size === "16" ? "text-[16px]" : "text-[14px]";

  const className = `${fontSize} font-semibold leading-[1em] tracking-[-0.03em] font-[family-name:var(--font-inter)] text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors py-[2px] underline decoration-[var(--framer-light-gray)] underline-offset-[3px]`;

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
}

export default PrimaryButton;
