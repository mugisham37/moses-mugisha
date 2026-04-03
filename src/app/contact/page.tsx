import { Icon } from "@/components/Icon"
import { PrimaryButton } from "@/components/PrimaryButton"
import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">

        {/* LEFT SIDEBAR — empty */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen pt-[140px] pb-[8px] z-[3] hidden lg:block" aria-hidden="true" />

        {/* MIDDLE COLUMN */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pt-[140px] px-[16px]">

          {/* Title */}
          <div className="lg:sticky lg:top-[140px] z-[1] w-full flex flex-col gap-[16px] pb-[40px]">
            <h1 className="text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              Reach out.
            </h1>
            <p className="max-w-[520px] text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello
            </p>
          </div>

          {/* Form */}
          <div className="w-full flex flex-col gap-[32px] pt-[32px] pb-[20px]">
            <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
            <ContactForm />
          </div>

          {/* Bottom spacer */}
          <div className="w-full pt-[146px]">
            <div className="w-full h-[40vh] opacity-0 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDEBAR — empty */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen pt-[140px] pb-[8px] z-[3] hidden lg:block" aria-hidden="true" />
      </div>
    </div>
  )
}
