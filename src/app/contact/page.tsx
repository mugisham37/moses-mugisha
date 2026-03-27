import ThreeColumnLayout from '../components/ThreeColumnLayout';
import ContactForm from '../components/ContactForm';
import ContactButtons from '../components/ContactButtons';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
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
                  I'd love to hear from you. Whether you're looking to collaborate on a new project, discuss a commission, or simply say hello
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
