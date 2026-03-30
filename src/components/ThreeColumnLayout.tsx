import type { ReactNode } from 'react';

interface Props {
  left?: ReactNode;
  middle: ReactNode;
  right?: ReactNode;
}

export default function ThreeColumnLayout({ left, middle, right }: Props) {
  return (
    <div className="flex gap-8 px-5 justify-center items-start max-w-[1200px] mx-auto w-full max-tablet:max-w-[810px] max-tablet:gap-0 max-phone:max-w-[390px] max-phone:px-3">
      <div className="sticky top-0 w-1/4 h-screen shrink-0 z-[3] overflow-visible flex flex-col justify-between items-start gap-2 pt-[140px] pb-2 max-tablet:hidden">
        {left}
      </div>
      <div className="flex-1 min-w-0 border-l border-r border-silver pt-[140px] px-4 flex flex-col items-center max-tablet:border-l-0 max-tablet:border-r-0 max-tablet:pt-[120px] max-tablet:px-0 max-phone:pt-[100px]">
        {middle}
      </div>
      <div className="sticky top-0 w-1/4 h-screen shrink-0 z-[3] overflow-visible flex flex-col justify-between items-center gap-2 pt-[140px] pb-2 max-tablet:hidden">
        {right}
      </div>
    </div>
  );
}
