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
    answer: "I offer visual identity design, web design, photography (lifestyle, editorial, product, and brand), and graphic design including social media assets, lookbooks, packaging, and posters.",
  },
  {
    question: "What is your typical process?",
    answer: "My process typically starts with a discovery call to understand your vision, followed by research and concept development, design iterations with your feedback, and final delivery with all necessary assets and guidelines.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines vary based on scope. A brand identity typically takes 4–6 weeks, web design 3–5 weeks, and photography shoots 1–2 weeks including post-production. I'll provide a detailed timeline after our initial consultation.",
  },
  {
    question: "What are your rates?",
    answer: "Rates depend on the project scope and deliverables. I offer both project-based pricing and day rates for photography. Please get in touch for a custom quote tailored to your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! While I'm based in France, I work with clients worldwide. Most of my communication happens over video calls and email, and I can travel for photography shoots when needed.",
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
