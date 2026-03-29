'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';
import styles from './FAQAccordion.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="heading-3">{item.question}</span>
            {openIndex === i ? (
              <Minus size={16} weight="bold" />
            ) : (
              <Plus size={16} weight="bold" />
            )}
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className={styles.answer}>
                  <p className="text-16">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="divider" />
        </div>
      ))}
    </div>
  );
}
