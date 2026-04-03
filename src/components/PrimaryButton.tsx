import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  text: string;
  href: string;
  size?: "16" | "14";
  className?: string;
}

export function PrimaryButton({
  text,
  href,
  size = "16",
  className,
}: PrimaryButtonProps) {
  const textClass =
    size === "14"
      ? "text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)]"
      : "text-[16px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)]";

  const containerClass = cn(
    "inline-flex items-start gap-[6px] overflow-visible",
    className
  );

  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={containerClass}>
        <span className={textClass}>{text}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={containerClass}
    >
      <span className={textClass}>{text}</span>
    </a>
  );
}

export default PrimaryButton;
