import Image from "next/image"
import { Icon } from "@/components/Icon"
import { PrimaryButton } from "@/components/PrimaryButton"
import { Misc } from "@/components/Misc"
import { Award } from "@/components/Award"
import { Tools } from "@/components/Tools"
import { Service } from "@/components/Service"
import { ExperienceCard } from "@/components/ExperienceCard"
import { FAQs } from "@/components/FAQs"
import { LogosTicker } from "@/components/LogosTicker"
import { DownloadCV } from "@/components/DownloadCV"

export default function AboutPage() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[32px] px-[20px]">

        {/* LEFT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          {/* Title */}
          <div className="overflow-hidden flex flex-col gap-[24px]">
            <h1 className="text-[56px] leading-[1em] tracking-[-0.05em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              About Me.
            </h1>
          </div>

          {/* Profile photo */}
          <div className="w-[55%] flex flex-col gap-[8px] overflow-visible">
            <div className="relative w-full" style={{ height: "213px" }}>
              <Image
                src="/images/profile-about.jpg"
                alt="Maelle portrait"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
              © 2013-25
            </span>
          </div>

          {/* Contact + Socials */}
          <div className="w-full flex flex-row items-end justify-start gap-[8px] overflow-visible">
            <div className="flex-1 flex flex-col gap-[4px] overflow-hidden">
              <PrimaryButton text="hello@maelle.design" href="mailto:hello@maelle.design" size="16" />
              <PrimaryButton text="(123) 456-7890" href="tel:+1234567890" size="14" />
            </div>
            <div className="flex flex-row gap-[8px] items-end overflow-hidden">
              <Icon href="x.com" label="Social button / X" />
              <Icon href="instagram.com" label="Social button / instagram" />
              <Icon href="https://dribbble.com/" label="Social button / dribbble" />
            </div>
          </div>
        </aside>

        {/* MIDDLE COLUMN */}
        <div className="flex-1 border-x border-[var(--framer-light-gray)] flex flex-col pt-[140px] px-[16px] gap-[120px]">

          {/* 1. Intro */}
          <div className="w-full flex flex-col gap-[40px] overflow-hidden">
            <div className="w-full flex flex-col gap-[16px] overflow-visible">
              <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                I&apos;m Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.
              </p>
              <p className="w-full max-w-[520px] text-[16px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">
                Whether I&apos;m designing a brand&apos;s digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.
              </p>
            </div>
          </div>

          {/* 2. Logos ticker */}
          <div className="w-full border-y border-[var(--framer-light-gray)] py-[24px] overflow-hidden">
            <LogosTicker />
          </div>

          {/* 3. Services */}
          <div className="w-full flex flex-col gap-[16px] overflow-hidden">
            <div className="w-full flex flex-col gap-[16px] pb-[16px] relative">
              <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Services</p>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
            </div>
            <div className="w-full flex flex-col gap-[16px]">
              <Service title="1. Visual Identity" description="Creating thoughtful, cohesive brand identities that reflect your story and values, from logo design and typography to color palettes and brand guidelines." />
              <Service title="2. Web Design" description="Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect." />
              <Service title="3. Photography" description="Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography." />
              <Service title="4. Graphic Design" description="Designing visuals for both digital and print, including social media assets, lookbooks, packaging, posters, and other creative collateral." />
            </div>
          </div>

          {/* 4. Software Stack */}
          <div className="w-full flex flex-col gap-[16px] overflow-hidden">
            <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Software Stack</p>
            <div className="w-full grid gap-[8px]" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}>
              <Tools name="Framer" description="No-code web design." />
              <Tools name="Figma" description="General Design Tool" />
              <Tools name="Photoshop" description="Image editing" />
              <Tools name="Illustrator" description="Graphic design" />
              <Tools name="Javascript" description="Front end development" />
              <Tools name="Spline" description="3D design" />
            </div>
          </div>

          {/* 5. Experience */}
          <div className="w-full flex flex-col gap-[16px] overflow-hidden">
            <div className="w-full flex flex-col gap-[16px] pb-[16px] relative">
              <div className="w-full flex flex-row items-end gap-[8px]">
                <p className="flex-1 text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Experience</p>
                <DownloadCV text="Download CV" href="#" iconPosition="left" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
            </div>
            <div className="w-full flex flex-col gap-[16px]">
              <ExperienceCard
                role="Freelance Digital Designer & Photographer"
                company="France & International"
                years="'13 - present"
                description="Working with brands, agencies, and creatives to craft visual identities, design engaging websites, and capture photography that tells authentic stories. Projects range from brand launches to editorial campaigns."
              />
              <ExperienceCard
                role="Senior Digital Designer"
                company="Creative Agency, Paris"
                years="'16 - 2018"
                description="Led design projects for lifestyle, fashion, and cultural brands. Oversaw concept development, UI/UX design, and visual direction while collaborating closely with copywriters, developers, and photographers."
              />
              <ExperienceCard
                role="Graphic Designer & Photographer"
                company="Boutique Studio, Lyon"
                years="'14 - 2016"
                description="Created branding, print materials, and social media visuals for small to mid-sized businesses. Handled in-house photography for campaigns, products, and brand content."
              />
              <ExperienceCard
                role="Junior Designer"
                company="Design Studio, Marseille"
                years="'13 - 2014"
                description="Assisted in the creation of brand assets, editorial layouts, and basic web designs. Supported senior designers and contributed to photography shoots, gaining hands-on experience in multidisciplinary creative work."
              />
            </div>
          </div>

          {/* 6. FAQs */}
          <div className="w-full flex flex-col gap-[16px] overflow-hidden">
            <div className="w-full flex flex-col gap-[16px] pb-[16px] relative">
              <p className="w-full max-w-[600px] text-[26px] leading-[1.1em] tracking-[-0.04em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">FAQs</p>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[var(--framer-light-gray)] z-[1]" />
            </div>
            <FAQs />
          </div>

          {/* Bottom spacer */}
          <div className="w-full flex items-center justify-center pt-[146px]">
            <div className="w-full h-[40vh] opacity-0 pointer-events-none" />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="lg:w-1/4 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between items-start gap-[8px] pt-[140px] pb-[8px] z-[3] overflow-visible">
          {/* Stats */}
          <div className="w-full flex flex-col gap-[4px] overflow-hidden">
            <Misc title="Years of experience" value="12+" variant="right" showLine={true} />
            <Misc title="Satisfied clients" value="50" variant="right" showLine={true} />
            <Misc title="Projects completed" value="100+" variant="right" showLine={true} />
            <Misc title="Industry awards" value="6" variant="right" showLine={true} />
          </div>

          {/* Awards/Achievements */}
          <div className="w-full flex flex-col gap-[16px] overflow-hidden">
            <div className="w-full flex flex-col gap-[2px]">
              <p className="text-[14px] leading-[1.4em] tracking-[-0.03em] font-[500] text-[var(--framer-black)] font-[family-name:var(--font-geist)]">Achievements</p>
              <div className="w-full h-[1px] bg-[var(--framer-light-gray)]" />
            </div>
            <div className="w-full flex flex-col gap-[6px] overflow-hidden">
              <Award title="Best Digital Design" organization="European Design Awards" year="'24" showLine={true} />
              <Award title="Visual Storytelling Excellence" organization="International Photography Awards" year="'23" showLine={true} />
              <Award title="Honorable Mention" organization="Awwwards" year="'22" showLine={true} />
              <Award title="Gold Award for Brand Identity" organization="French Design Awards" year="'21" showLine={true} />
              <Award title="Photography Excellence Award" organization="Paris Creative Expo" year="'20" showLine={false} />
            </div>
          </div>
        </aside>

      </div>
    </div>
  )
}
