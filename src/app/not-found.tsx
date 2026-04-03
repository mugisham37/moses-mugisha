import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">
        {/* LEFT SIDEBAR — empty */}
        <aside className="lg:w-1/4 hidden lg:block" aria-hidden="true" />

        {/* MIDDLE */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col items-start justify-center min-h-[80vh] px-[16px] py-[140px] gap-[24px]">
          <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-gray)] font-[family-name:var(--font-geist)]">
            404
          </p>
          <h1 className="text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            Page not found.
          </h1>
          <p className="max-w-[520px] text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="text-[14px] leading-[1em] tracking-[-0.03em] font-semibold font-[family-name:var(--font-inter-var)] text-[var(--framer-black)] hover:opacity-70 transition-opacity"
          >
            ← Back to home
          </Link>
        </div>

        {/* RIGHT SIDEBAR — empty */}
        <aside className="lg:w-1/4 hidden lg:block" aria-hidden="true" />
      </div>
    </div>
  )
}
