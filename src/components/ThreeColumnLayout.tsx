import { ReactNode } from "react";
import { FooterContent } from "@/components/Footer";

interface ThreeColumnLayoutProps {
  left?: ReactNode;
  middle: ReactNode;
  right?: ReactNode;
  /** Whether to include footer inside the middle column */
  showFooter?: boolean;
}

export function ThreeColumnLayout({ left, middle, right, showFooter = true }: ThreeColumnLayoutProps) {
  return (
    <div className="w-full bg-[var(--framer-white)]">
      {/* Desktop */}
      <div className="hidden lg:flex flex-row items-start gap-[32px] px-[20px] justify-center max-w-[1200px] mx-auto">
        {/* Left — sticky, never scrolls */}
        <div className="w-1/4 sticky top-0 h-screen z-[3] flex-shrink-0 flex flex-col justify-between gap-[8px] pt-[140px] pb-[8px] overflow-visible">
          {left || <div />}
        </div>
        {/* Middle — scrollable, has borders, footer lives here */}
        <div className="flex-1 min-w-0 border-x border-[var(--framer-light-gray)] bg-[var(--framer-white)] pt-[140px] px-[16px] overflow-visible">
          {middle}
          {showFooter && (
            <div className="border-t border-[var(--framer-light-gray)] -mx-[16px]">
              <div className="px-[16px]">
                <FooterContent />
              </div>
            </div>
          )}
        </div>
        {/* Right — sticky, never scrolls */}
        <div className="w-1/4 sticky top-0 h-screen z-[3] flex-shrink-0 flex flex-col justify-between items-center gap-[8px] pt-[140px] pb-[8px] overflow-visible">
          {right || <div />}
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="flex lg:hidden flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
        {/* Content passed from each page */}
      </div>
    </div>
  );
}

export default ThreeColumnLayout;
