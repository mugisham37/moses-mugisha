"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQsProps {
  className?: string;
}

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "I work on a range of visual and digital projects including brand identity, web design, editorial photography, and creative direction. I'm drawn to work with lifestyle, fashion, and culture-focused clients, though I'm always open to interesting briefs from any industry.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out via the contact page or send an email to hello@maelle.design. I'll get back to you within a couple of days to schedule a discovery call where we can discuss your project, timeline, and budget.",
  },
  {
    question: "What's your typical turnaround time?",
    answer:
      "Timelines vary depending on the scope. A brand identity project typically takes 4–8 weeks, while a photography shoot can be planned and delivered within 1–2 weeks. Web design projects usually run 6–10 weeks from kickoff to launch.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally. Most of my process is remote-friendly, with clear communication, regular check-ins, and digital delivery. For photography projects, travel arrangements can be discussed on a case-by-case basis.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes. Each project includes a defined number of revision rounds (outlined in the project proposal). I work collaboratively throughout the process to ensure the final result aligns with your vision before we reach the revision stage.",
  },
];

export function FAQs({ className }: FAQsProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={cn("w-full flex flex-col gap-[6px]", className)}>
      {faqs.map((faq, i) => (
        <div key={i} className="w-full overflow-visible">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex flex-row items-start justify-between gap-[16px] py-[12px] text-left"
          >
            <span className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {faq.question}
            </span>
            <span className="text-[16px] text-[var(--framer-gray)] flex-shrink-0 mt-[2px]">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="pb-[12px] pr-[32px]">
              <p className="text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-gray)] font-[family-name:var(--font-geist)]">
                {faq.answer}
              </p>
            </div>
          )}
          <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
        </div>
      ))}
    </div>
  );
}

export default FAQs;
