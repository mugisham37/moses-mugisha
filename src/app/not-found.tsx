import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function NotFoundPage() {
  return (<>
    <Navigation />
    <div className="w-full min-h-screen bg-[var(--framer-white)] flex items-center justify-center px-[16px]">
      <div className="flex flex-col items-center gap-[24px]">
        <h1 className="text-[48px] md:text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">404</h1>
        <p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Page not found</p>
        <Link href="/" className="text-[14px] font-semibold text-[var(--framer-black)] underline decoration-[var(--framer-light-gray)] underline-offset-[3px] hover:text-[var(--framer-gray)] transition-colors">Go back home</Link>
      </div>
    </div>
  </>);
}
