"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack software engineering (web applications, APIs, DevOps, AI/ML systems), web design, motion graphics and animation, VFX compositing and color grading, and 3D design and rendering. Whether you need a scalable platform built from scratch or a cinematic motion piece, I can help.",
  },
  {
    question: "What is your typical process?",
    answer: "I start with a discovery call to understand your goals, then move into research, planning, and iterative delivery — with regular check-ins throughout. For engineering projects this includes architecture review and milestone demos. For creative projects it includes concept boards and preview renders before final delivery.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary by scope. A full-stack web application typically takes 6–12 weeks, a web design project 3–5 weeks, and motion graphics or 3D renders 2–4 weeks. I provide a detailed timeline after our initial consultation so you know exactly what to expect.",
  },
  {
    question: "What are your rates?",
    answer: "Rates depend on project scope, complexity, and deliverables. I offer both fixed project pricing and hourly rates depending on the engagement. Feel free to reach out with your project details for a custom quote tailored to your specific needs.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While I'm based in Kigali, Rwanda, I work with clients worldwide. Communication happens over video calls and email, and I adapt to different time zones to keep collaboration smooth and efficient.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-[6px]">
      {faqData.map((item, i) => (
        <div key={i} className="w-full">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex flex-row items-center justify-between py-[12px] text-left"
          >
            <span className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-[18px] font-medium text-[var(--framer-black)] ml-[16px] flex-shrink-0"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-[16px] text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] font-[family-name:var(--font-geist)] max-w-[520px]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="h-[1px] bg-[var(--framer-light-gray)]" />
        </div>
      ))}
    </div>
  );
}

export default FAQs;
