'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ } from '@/types';
import { faqs } from '@/lib/data';

// FAQs from Framer MCP: FAQs / jWXadIaxi
// CustomAccordion: gapSize:6, showQuestionIcon:true, firstCardOpen:false
// Heading 3 for question, 16 medium for answer

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #e3e3e3',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '16px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-geist)',
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '1.4em',
            letterSpacing: '-0.03em',
            color: '#121212',
            flex: 1,
          }}
        >
          {faq.question}
        </span>

        {/* Plus / minus icon */}
        <span
          style={{
            width: '16px',
            height: '16px',
            position: 'relative',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '12px',
              height: '1px',
              backgroundColor: '#121212',
              position: 'absolute',
            }}
          />
          <motion.span
            animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'block',
              width: '1px',
              height: '12px',
              backgroundColor: '#121212',
              position: 'absolute',
            }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.4em',
                letterSpacing: '-0.03em',
                color: '#757575',
                paddingBottom: '16px',
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQAccordion() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0px' }}>
      {faqs.map((faq, i) => (
        <FAQItem key={i} faq={faq} index={i} />
      ))}
    </div>
  );
}
