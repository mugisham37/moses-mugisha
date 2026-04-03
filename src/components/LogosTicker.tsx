import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogosTickerProps {
  className?: string;
}

export function LogosTicker({ className }: LogosTickerProps) {
  const logos = [
    "/images/brand-1.svg",
    "/images/brand-2.svg",
    "/images/brand-3.svg",
    "/images/brand-4.svg",
    "/images/brand-5.svg",
    "/images/brand-6.svg",
    "/images/brand-7.svg",
  ];

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="ticker-track flex flex-row items-center gap-[54px] w-max">
        {[...logos, ...logos].map((src, i) => (
          <div key={i} className="h-[39px] flex items-center justify-center flex-shrink-0">
            <Image
              src={src}
              alt={`Brand logo ${(i % 7) + 1}`}
              height={30}
              width={80}
              className="h-[30px] w-auto object-contain grayscale opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogosTicker;
