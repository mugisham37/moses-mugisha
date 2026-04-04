"use client";

import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Icon } from "@/components/Icon";
import { Misc } from "@/components/Misc";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

function LeftDesktop() {
  return (<>
    <div className="w-full"><h1 className="text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">Hello! I&apos;m Maelle.</h1></div>
    <div className="w-full flex flex-col gap-[8px] max-w-[400px]">
      <Icon variant="Social button / X" href="x.com" />
      <Icon variant="Social button / instagram" href="instagram.com" />
      <Icon variant="Social button / dribbble" href="https://dribbble.com/" />
    </div>
    <div className="w-full flex flex-col gap-[4px]">
      <Misc title="Visual Identity" showLine />
      <Misc title="Web design" showLine />
      <Misc title="Photography" showLine />
      <Misc title="Graphic design" showLine={false} />
    </div>
  </>);
}

function MiddleDesktop() {
  return (<>
    <div className="flex flex-col gap-[8px] pb-[8px]">
      <h2 className="text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px]">A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.</h2>
      <div className="flex flex-row items-end justify-center gap-[8px]">
        <h3 className="flex-1 text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Selected work</h3>
        <span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">(10)</span>
      </div>
    </div>
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[20px]">
        {projects.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
      </div>
    </div>
  </>);
}

function RightDesktop() {
  return (<>
    <div className="w-full flex flex-col gap-[32px]">
      <div className="w-full flex flex-col gap-[8px]">
        <div className="flex flex-row items-center gap-[4px]">
          <div className="w-[5px] h-[5px] bg-[var(--framer-gray)]" style={{ transform: "rotate(45deg)" }} />
          <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Available for work</span>
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <img src="https://framerusercontent.com/images/it1S2UW3QQiW6O2sCtHDtKcPODE.jpg" alt="Maelle" className="w-full h-[186px] object-cover" style={{ aspectRatio: "0.758" }} />
          <div className="flex flex-col gap-[2px]">
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Digital Designer</p>
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Based in France</p>
            <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Since 2013</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex flex-row items-end justify-start gap-[8px]">
      <div className="flex-1 flex flex-col gap-[4px]">
        <PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" />
        <PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" />
      </div>
      <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">© 2025</span>
    </div>
  </>);
}

export default function HomePage() {
  return (
    <PageTransition>
      <Navigation />
      {/* Desktop */}
      <div className="hidden lg:block"><ThreeColumnLayout left={<LeftDesktop />} middle={<MiddleDesktop />} right={<RightDesktop />} /></div>
      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
          <h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)] mb-[24px]">Hello! I&apos;m Maelle.</h1>
          <div className="flex flex-row gap-[24px] mb-[24px]">
            <div className="flex flex-row md:flex-col gap-[12px] md:gap-[8px]">
              <Icon variant="Social button / X" href="x.com" />
              <Icon variant="Social button / instagram" href="instagram.com" />
              <Icon variant="Social button / dribbble" href="https://dribbble.com/" />
            </div>
            <div className="flex-1 flex flex-col gap-[4px]">
              <Misc title="Visual Identity" showLine /><Misc title="Web design" showLine /><Misc title="Photography" showLine /><Misc title="Graphic design" showLine={false} />
            </div>
          </div>
          <div className="flex flex-row items-start gap-[16px] mb-[24px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <div className="flex flex-row items-center gap-[4px]"><div className="w-[5px] h-[5px] bg-[var(--framer-gray)]" style={{ transform: "rotate(45deg)" }} /><span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Available for work</span></div>
              <div className="flex flex-col gap-[2px] mt-[8px]">
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Digital Designer</p>
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Based in France</p>
                <p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Since 2013</p>
              </div>
            </div>
            <img src="https://framerusercontent.com/images/it1S2UW3QQiW6O2sCtHDtKcPODE.jpg" alt="Maelle" className="w-[130px] md:w-[160px] h-auto object-cover" style={{ aspectRatio: "0.758" }} />
          </div>
          <div className="flex flex-row items-end gap-[8px] mb-[32px] pb-[16px] border-b border-[var(--framer-light-gray)]">
            <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" /><PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" /></div>
            <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">© 2025</span>
          </div>
          <h2 className="text-[20px] md:text-[24px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px] mb-[32px]">A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.</h2>
          <div className="flex flex-row items-end justify-center gap-[8px] mb-[16px]"><h3 className="flex-1 text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Selected work</h3><span className="text-[12px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">(10)</span></div>
          <div className="flex flex-col gap-[20px] mb-[40px]">
            {projects.map((p) => <ProjectCard key={p.slug} title={p.title} category={p.category} year={p.year} image={p.previewImage} href={`/work/${p.slug}`} />)}
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
