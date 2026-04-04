"use client";
import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { Icon } from "@/components/Icon";
import { Misc } from "@/components/Misc";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Award } from "@/components/Award";
import { Tools } from "@/components/Tools";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FAQs } from "@/components/FAQs";

function LeftDesktop() {
  return (<>
    <div><h1 className="text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">About Me.</h1></div>
    <div className="w-[55%] flex flex-col gap-[8px]">
      <img src="https://framerusercontent.com/images/q9ZaTcwzkmoB2rVia9m7o2iecM.jpg" alt="Maelle" className="w-full h-[213px] object-cover" style={{ aspectRatio: "0.751" }} />
      <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] self-end">© 2013-25</span>
    </div>
    <div className="w-full flex flex-row items-end justify-start gap-[8px]">
      <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" /><PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" /></div>
      <div className="flex flex-row items-end gap-[8px]"><Icon variant="Social button / X" href="x.com" /><Icon variant="Social button / instagram" href="instagram.com" /><Icon variant="Social button / dribbble" href="https://dribbble.com/" /></div>
    </div>
  </>);
}
function RightDesktop() {
  return (<>
    <div className="w-full flex flex-col gap-[4px]"><Misc title="Years of experience" value="12+" showLine /><Misc title="Satisfied clients" value="50" showLine /><Misc title="Projects completed" value="100+" showLine /><Misc title="Industry awards" value="6" showLine /></div>
    <div className="w-full flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[2px]"><p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Achievements</p><div className="w-full h-[1px] bg-[var(--framer-light-gray)]" /></div>
      <div className="flex flex-col gap-[6px]">
        <Award title="Best Digital Design" organization="European Design Awards" year="'24" />
        <Award title="Visual Storytelling Excellence" organization="International Photography Awards" year="'23" />
        <Award title="Honorable Mention" organization="Awwwards" year="'22" />
        <Award title="Gold Award for Brand Identity" organization="French Design Awards" year="'21" />
        <Award title="Photography Excellence Award" organization="Paris Creative Expo" year="'20" showLine={false} />
      </div>
    </div>
  </>);
}
const services = [
  { t: "1. Visual Identity", d: "Creating thoughtful, cohesive brand identities that reflect your story and values, from logo design and typography to color palettes and brand guidelines." },
  { t: "2. Web Design", d: "Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect." },
  { t: "3. Photography", d: "Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography." },
  { t: "4. Graphic Design", d: "Designing visuals for both digital and print, including social media assets, lookbooks, packaging, posters, and other creative collateral." },
];
function MiddleContent() {
  return (
    <div className="flex flex-col gap-[60px] lg:gap-[120px]">
      <div className="flex flex-col gap-[16px] lg:gap-[40px]">
        <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px]">I&apos;m Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.</h2>
        <p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] max-w-[520px]">Whether I&apos;m designing a brand&apos;s digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.</p>
      </div>
      <div className="w-full border-y border-[var(--framer-light-gray)] py-[24px] overflow-hidden"><p className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-gray)] whitespace-nowrap animate-[marquee_20s_linear_infinite]">Neon Flux Apparel • Gallery Exhibition • Éclat Jewelry • Atelier Lumière • Côte Sauvage Magazine • Café Nord • Framer Templates • Neon Flux Apparel • Gallery Exhibition</p></div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px] pb-[16px]"><h2 className="text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Services</h2><div className="h-[1px] bg-[var(--framer-light-gray)]" /></div>
        {services.map((s) => (<div key={s.t} className="flex flex-col gap-[8px] pb-[16px] border-b border-[var(--framer-light-gray)]"><h3 className="text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{s.t}</h3><p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] max-w-[520px]">{s.d}</p></div>))}
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Software Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px]"><Tools name="Framer" description="No-code web design." /><Tools name="Figma" description="General Design Tool" /><Tools name="Photoshop" description="Image editing" /><Tools name="Illustrator" description="Graphic design" /><Tools name="Javascript" description="Front end development" /><Tools name="Spline" description="3D design" /></div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px] pb-[16px]"><div className="flex flex-row items-end gap-[8px]"><h2 className="flex-1 text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Experience</h2><span className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] underline decoration-[var(--framer-light-gray)] underline-offset-[3px]">Download CV</span></div><div className="h-[1px] bg-[var(--framer-light-gray)]" /></div>
        <div className="flex flex-col gap-[16px]">
          <ExperienceCard title="Freelance Digital Designer & Photographer" company="France & International" period="'13 - present" description="Working with brands, agencies, and creatives to craft visual identities, design engaging websites, and capture photography that tells authentic stories." />
          <ExperienceCard title="Senior Digital Designer" company="Creative Agency, Paris" period="'16 - 2018" description="Led design projects for lifestyle, fashion, and cultural brands." />
          <ExperienceCard title="Graphic Designer & Photographer" company="Boutique Studio, Lyon" period="'14 - 2016" description="Created branding, print materials, and social media visuals for small to mid-sized businesses." />
          <ExperienceCard title="Junior Designer" company="Design Studio, Marseille" period="'13 - 2014" description="Assisted in the creation of brand assets, editorial layouts, and basic web designs." />
        </div>
      </div>
      <div className="flex flex-col gap-[16px]"><div className="flex flex-col gap-[16px] pb-[16px]"><h2 className="text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">FAQs</h2><div className="h-[1px] bg-[var(--framer-light-gray)]" /></div><FAQs /></div>
      <div className="hidden lg:block pt-[146px]"><div className="h-[40vh] opacity-0" /></div>
    </div>
  );
}
export default function AboutPage() {
  return (
    <PageTransition><Navigation />
      <div className="hidden lg:block"><ThreeColumnLayout left={<LeftDesktop />} middle={<MiddleContent />} right={<RightDesktop />} /></div>
      <div className="block lg:hidden">
        <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
          <div className="flex flex-row items-start gap-[16px] mb-[24px]"><div className="flex-1"><h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">About Me.</h1></div><img src="https://framerusercontent.com/images/q9ZaTcwzkmoB2rVia9m7o2iecM.jpg" alt="Maelle" className="w-[120px] md:w-[160px] h-auto object-cover" style={{ aspectRatio: "0.751" }} /></div>
          <div className="flex flex-row items-end gap-[8px] mb-[24px] pb-[16px] border-b border-[var(--framer-light-gray)]">
            <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" /><PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" /></div>
            <div className="flex flex-col items-end gap-[8px]"><span className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">© 2013-25</span><div className="flex flex-row gap-[8px]"><Icon variant="Social button / X" href="x.com" /><Icon variant="Social button / instagram" href="instagram.com" /><Icon variant="Social button / dribbble" href="https://dribbble.com/" /></div></div>
          </div>
          <div className="flex flex-col gap-[4px] mb-[32px]"><Misc title="Years of experience" value="12+" showLine /><Misc title="Satisfied clients" value="50" showLine /><Misc title="Projects completed" value="100+" showLine /><Misc title="Industry awards" value="6" showLine /></div>
          <MiddleContent />
          <div className="flex flex-col gap-[16px] mt-[40px] mb-[32px]">
            <div className="flex flex-col gap-[2px]"><p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Achievements</p><div className="w-full h-[1px] bg-[var(--framer-light-gray)]" /></div>
            <div className="flex flex-col gap-[6px]"><Award title="Best Digital Design" organization="European Design Awards" year="'24" /><Award title="Visual Storytelling Excellence" organization="International Photography Awards" year="'23" /><Award title="Honorable Mention" organization="Awwwards" year="'22" /><Award title="Gold Award for Brand Identity" organization="French Design Awards" year="'21" /><Award title="Photography Excellence Award" organization="Paris Creative Expo" year="'20" showLine={false} /></div>
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
