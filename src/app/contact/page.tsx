"use client";
import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Icon } from "@/components/Icon";
import { useState } from "react";

const ic = "w-full border-b border-[var(--framer-light-gray)] bg-transparent py-[8px] text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] outline-none focus:border-[var(--framer-black)] transition-colors";

function ContactForm() {
  const [fd, setFd] = useState({ name: "", email: "", phone: "", message: "" });
  const h = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFd({ ...fd, [e.target.name]: e.target.value });
  return (<>
    <div className="flex flex-col gap-[16px] pb-[24px] lg:pb-[40px]">
      <h1 className="text-[36px] md:text-[44px] lg:text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">Reach out.</h1>
      <p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] max-w-[520px]">I&apos;d love to hear from you. Whether you&apos;re looking to collaborate on a new project, discuss a commission, or simply say hello</p>
    </div>
    <div className="flex flex-col md:flex-row items-start md:items-end gap-[16px] md:gap-[8px] mb-[32px]">
      <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" /><PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" /></div>
      <div className="flex flex-row items-end gap-[8px]"><Icon variant="Social button / X" href="x.com" /><Icon variant="Social button / instagram" href="instagram.com" /><Icon variant="Social button / dribbble" href="https://dribbble.com/" /></div>
    </div>
    <div className="flex flex-col gap-[32px] pt-[32px] pb-[20px]">
      <div className="h-[1px] bg-[var(--framer-light-gray)]" />
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[4px]"><label className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">Name*</label><input type="text" name="name" value={fd.name} onChange={h} className={ic} required /></div>
        <div className="flex flex-col gap-[4px]"><label className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">Email*</label><input type="email" name="email" value={fd.email} onChange={h} className={ic} required /></div>
        <div className="flex flex-col gap-[4px]"><label className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">Phone</label><input type="tel" name="phone" value={fd.phone} onChange={h} className={ic} /></div>
        <div className="flex flex-col gap-[4px]"><label className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">Message*</label><textarea name="message" value={fd.message} onChange={h} rows={4} className={`${ic} resize-none`} required /></div>
        <button type="button" className="self-center px-[24px] py-[12px] bg-[var(--framer-black)] text-[var(--framer-white)] text-[14px] font-semibold leading-[1em] tracking-[-0.03em] hover:opacity-80 transition-opacity">Send Message</button>
      </div>
    </div>
    <div className="hidden lg:block pt-[146px]"><div className="h-[40vh] opacity-0" /></div>
  </>);
}
export default function ContactPage() {
  return (
    <PageTransition><Navigation />
      <div className="hidden lg:block"><ThreeColumnLayout left={<div />} middle={<ContactForm />} right={<div />} /></div>
      <div className="block lg:hidden"><div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto"><ContactForm /><FooterContent /></div></div>
    </PageTransition>
  );
}
