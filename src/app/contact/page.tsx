'use client';

import ThreeColumnLayout from '../../components/ThreeColumnLayout';
import ContactForm from '../../components/ContactForm';
import ContactButtons from '../../components/ContactButtons';
import SocialIcons from '../../components/SocialIcons';
import Footer from '../../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../../components/AnimatedPage';

export default function Contact() {
  return (
    <>
      <ThreeColumnLayout
        left={<div />}
        middle={
          <div className="w-full flex flex-col items-center">
            <AnimatedContainer className="sticky top-35 z-1 w-full flex flex-col gap-4 pb-10 max-tablet:relative max-tablet:top-0">
              <AnimatedItem>
                <h1 className="heading-1">Reach out.</h1>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-16 max-w-130">
                  I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedItem>
              <div className="w-full flex gap-2 items-end">
                <ContactButtons />
                <SocialIcons direction="horizontal" />
              </div>
            </AnimatedItem>

            <AnimatedItem className="w-full">
              <ContactForm />
            </AnimatedItem>

            <div className="pt-36.5">
              <div className="h-[40vh] opacity-0" />
            </div>
          </div>
        }
        right={<div />}
      />
      <Footer />
    </>
  );
}
