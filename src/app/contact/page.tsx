'use client';

import { motion } from 'framer-motion';
import { PageLayout } from '@/components/PageLayout';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { PrimaryButton } from '@/components/PrimaryButton';
import { SocialIcon } from '@/components/SocialIcon';
import { fadeSlideUp, staggerContainer } from '@/lib/animations';

// Contact page — /contact (HideSIC3k in Framer)
// Left: empty | Middle: title + subtitle + form | Right: empty

export default function ContactPage() {
  return (
    <>
      <PageLayout
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
                zIndex: 1,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                paddingBottom: '40px',
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
              style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '32px', paddingBottom: '20px' }}
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
'use client';

import ThreeColumnLayout from '../../components/ThreeColumnLayout';
import ContactForm from '../../components/ContactForm';
import ContactButtons from '../../components/ContactButtons';
import SocialIcons from '../../components/SocialIcons';
import Footer from '../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../components/AnimatedPage';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <ThreeColumnLayout
        left={<div />}
        middle={
          <div className={styles.middleContent}>
            <AnimatedContainer className={styles.titleArea}>
              <AnimatedItem>
                <h1 className="heading-1">Reach out.</h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-16" style={{ maxWidth: 520 }}>
                  I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedItem>
              <div className={styles.contactRow}>
                <ContactButtons />
                <SocialIcons direction="horizontal" />
              </div>
            </AnimatedItem>

            <AnimatedItem style={{ width: '100%' }}>
              <ContactForm />
            </AnimatedItem>

            <div style={{ paddingTop: 146 }}>
              <div style={{ height: '40vh', opacity: 0 }} />
            </div>
          </div>
        }
        right={<div />}
      />
      <Footer />
    </>
  );
}
.middleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titleArea {
  position: sticky;
  top: 140px;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 40px;
}

.contactRow {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

@media (max-width: 1199px) {
  .titleArea {
    position: relative;
    top: 0;
  }
}
