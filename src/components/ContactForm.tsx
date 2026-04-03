"use client"

import { useState } from "react"
import { FormButton } from "@/components/FormButton"

export function ContactForm() {
  const [formState, setFormState] = useState<"default" | "loading" | "success" | "error">("default")
  const [fields, setFields] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1000))
    setFormState("success")
  }

  const inputClass = "w-full border-b border-[var(--framer-light-gray)] py-[12px] px-[0px] text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)] bg-transparent outline-none placeholder:text-[var(--framer-gray)] focus:border-[var(--framer-black)] transition-colors"

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[4px]">
        <label className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Name*</label>
        <input
          type="text"
          required
          placeholder="Your name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <label className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Email*</label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <label className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Phone</label>
        <input
          type="tel"
          placeholder="+1 (234) 567-890"
          value={fields.phone}
          onChange={(e) => setFields({ ...fields, phone: e.target.value })}
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-[4px]">
        <label className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Message*</label>
        <textarea
          required
          rows={5}
          placeholder="Your message..."
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          className={inputClass + " resize-none"}
        />
      </div>
      <div className="flex justify-start">
        <FormButton state={formState} onClick={undefined} />
      </div>
    </form>
  )
}

export default ContactForm
