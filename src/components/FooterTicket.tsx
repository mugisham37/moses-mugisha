import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterTicketProps {
  text?: string;
  href?: string;
  className?: string;
}

export function FooterTicket({
  text = "Let's Talk",
  href = "/contact",
  className,
}: FooterTicketProps) {
  return (
    <Link href={href} className={cn("block w-full overflow-hidden", className)}>
      <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
      <div className="w-full h-[100px] overflow-hidden flex items-center">
        <div className="ticker-track flex flex-row items-center gap-[20px] whitespace-nowrap will-change-transform">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-[20px] flex-shrink-0"
            >
              <div className="w-[10px] h-[11px] bg-[var(--framer-gray)] flex-shrink-0 rotate-45" />
              <h2 className="text-[80px] leading-[1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] text-center whitespace-nowrap flex-shrink-0">
                {text}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
    </Link>
  );
}

export default FooterTicket;
