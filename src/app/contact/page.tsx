'use client';

import { motion } from 'framer-motion';
import ThreeColumnLayout from '@/components/layout/ThreeColumnLayout';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';

// Contact page — /contact (HideSIC3k in Framer)
// Left: contact buttons + socials | Middle: title + subtitle + form | Right: empty

export default function ContactPage() {
  return (
    <>
      <ThreeColumnLayout
        left={
          // Left has contact buttons and socials at bottom (from Framer XML)
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '100%',
              width: '100%',
              gap: '8px',
            }}
          >
            <motion.div variants={fadeSlideUp} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <PrimaryButton label="hello@maelle.design" href="mailto:hello@maelle.design" size="16" />
              <PrimaryButton label="(123) 456-7890" href="tel:+1234567890" size="14" />
            </motion.div>
            <motion.div variants={fadeSlideUp} style={{ display: 'flex', gap: '8px' }}>
              <SocialIcon platform="x" href="https://x.com" />
              <SocialIcon platform="instagram" href="https://instagram.com" />
              <SocialIcon platform="dribbble" href="https://dribbble.com" />
            </motion.div>
          </motion.div>
        }
        middle={
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {/* Title + subtitle — sticky */}
            <div
              style={{
                position: 'sticky',
                top: '140px',
                zIndex: 10,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                paddingBottom: '40px',
                width: '100%',
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  variants={fadeSlideUp}
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '56px',
                    fontWeight: 500,
                    lineHeight: '1em',
                    letterSpacing: '-0.05em',
                    color: '#121212',
                    marginBottom: '16px',
                  }}
                >
                  Reach out.
                </motion.h1>
                <motion.p
                  variants={fadeSlideUp}
                  style={{
                    fontFamily: 'var(--font-geist)',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '1.4em',
                    letterSpacing: '-0.03em',
                    color: '#121212',
                    maxWidth: '520px',
                  }}
                >
                  I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello
                </motion.p>
              </motion.div>
            </div>

            {/* Form section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '32px', paddingBottom: '20px', width: '100%' }}
            >
              {/* Divider above form */}
              <div style={{ height: '1px', backgroundColor: '#e3e3e3' }} />
              <ContactForm />
            </motion.div>

            {/* Bottom spacer */}
            <div style={{ paddingTop: '146px' }}>
              <div style={{ height: '40vh' }} />
            </div>
          </div>
        }
        right={undefined}
      />
      <Footer />
    </>
  );
}
