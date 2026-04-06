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
      <img src="/images/Moses.png" alt="Moses" className="w-full h-[213px] object-cover" style={{ aspectRatio: "0.751" }} />
      <span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] self-end">© 2022-25</span>
    </div>
    <div className="w-full flex flex-row items-end justify-start gap-[8px]">
      <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="mugisham505@gmail.com" href="mailto:mugisham505@gmail.com" /><PrimaryButton text="+250 786 768 418" href="tel:+250786768418" size="14" /></div>
      <div className="flex flex-row items-end gap-[8px]"><Icon variant="Social button / X" href="https://x.com/mugisham37" /><Icon variant="Social button / instagram" href="https://instagram.com/mugisham37" /><Icon variant="Social button / dribbble" href="https://github.com/mugisham37" /></div>
    </div>
  </>);
}
function RightDesktop() {
  return (<>
    <div className="w-full flex flex-col gap-[4px]"><Misc title="Years of experience" value="3+" showLine /><Misc title="Satisfied clients" value="20+" showLine /><Misc title="Projects completed" value="50+" showLine /><Misc title="Certifications" value="2" showLine /></div>
    <div className="w-full flex flex-col gap-[16px]">
      <div className="flex flex-col gap-[2px]"><p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Achievements</p><div className="w-full h-[1px] bg-[var(--framer-light-gray)]" /></div>
      <div className="flex flex-col gap-[6px]">
        <Award title="Harvard CS50" organization="Introduction to Computer Science" year="'23" />
        <Award title="Best System Architecture" organization="ALU Innovation Hackathon" year="'24" />
        <Award title="3D Design Recognition" organization="East Africa Creative Awards" year="'24" />
        <Award title="Motion Design Excellence" organization="Africa Digital Arts Awards" year="'23" />
        <Award title="Web Performance Award" organization="Google Developer Community" year="'24" showLine={false} />
      </div>
    </div>
  </>);
}
const services = [
  { t: "1. Software Engineering", d: "Full-stack web applications, microservices, DevOps pipelines, and AI-powered systems using Next.js, NestJS, PostgreSQL, Docker, and Kubernetes — built for scale and reliability." },
  { t: "2. Web Design", d: "Clean, functional, and visually compelling web experiences crafted with precision and purpose — from wireframes and component systems to polished, production-ready final designs." },
  { t: "3. Motion Graphics", d: "Dynamic motion design and animation for brand storytelling, product launches, social content, and digital campaigns — crafted in After Effects with custom easing and audio sync." },
  { t: "4. VFX", d: "Visual effects compositing, particle simulations, sky replacements, color grading, and post-production work for film and digital media — from indie short films to commercial campaigns." },
  { t: "5. 3D Design & Rendering", d: "Product visualization, architectural rendering, 3D environments, and character design using Blender and Cinema 4D — from engineering CAD-based models to creative concept work." },
];
function MiddleContent() {
  return (
    <div className="flex flex-col gap-[60px] lg:gap-[120px]">
      <div className="flex flex-col gap-[16px] lg:gap-[40px]">
        <h2 className="text-[20px] md:text-[24px] lg:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px]">I&apos;m Moses — a full-stack software engineer and creative technologist based in Kigali, Rwanda, with over 3 years of experience building scalable cloud-native systems, designing digital experiences, and creating visual stories across 3D, motion graphics, and VFX.</h2>
        <p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] max-w-[520px]">Whether I&apos;m architecting a microservices platform, modeling a 3D environment, or compositing a VFX shot, I bring the same precision, curiosity, and craft to every project.</p>
      </div>
      <div className="w-full border-y border-[var(--framer-light-gray)] py-[24px] overflow-hidden"><p className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-gray)] whitespace-nowrap animate-[marquee_20s_linear_infinite]">Velocity Platform • Drive Master • Elev8 Rwanda • ALU Projects • Motion Reels • 3D Renders • VFX Compositing • Web Systems • Velocity Platform • Drive Master</p></div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px] pb-[16px]"><h2 className="text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Services</h2><div className="h-[1px] bg-[var(--framer-light-gray)]" /></div>
        {services.map((s) => (<div key={s.t} className="flex flex-col gap-[8px] pb-[16px] border-b border-[var(--framer-light-gray)]"><h3 className="text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{s.t}</h3><p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] max-w-[520px]">{s.d}</p></div>))}
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Software Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px]"><Tools name="VS Code" description="Development Environment" /><Tools name="Figma" description="UI/UX Design" /><Tools name="After Effects" description="Motion & VFX" /><Tools name="Blender" description="3D Design & Rendering" /><Tools name="Docker" description="Containerization & DevOps" /><Tools name="DaVinci Resolve" description="Video Editing & Color" /></div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[16px] pb-[16px]"><div className="flex flex-row items-end gap-[8px]"><h2 className="flex-1 text-[22px] md:text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)]">Experience</h2><a href="/MUGISHA MOSES RESUME.pdf" download className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] underline decoration-[var(--framer-light-gray)] underline-offset-[3px]">Download CV</a></div><div className="h-[1px] bg-[var(--framer-light-gray)]" /></div>
        <div className="flex flex-col gap-[16px]">
          <ExperienceCard title="Freelance Software Engineer & Creative Technologist" company="Kigali, Rwanda & International" period="'22 - present" description="Building full-stack web applications, DevOps pipelines, and creative media projects for clients across software engineering, web design, motion graphics, and 3D production." />
          <ExperienceCard title="Full-Stack Next.js Developer" company="Elev8 Rwanda" period="'24" description="Architected a multilingual Next.js 14 enterprise website supporting English, French, and Arabic with Sanity CMS, serving 5,000+ monthly visitors with 95+ Lighthouse scores." />
          <ExperienceCard title="Platform Engineer" company="Velocity (Personal Project)" period="'24" description="Built a microservices-based business management platform with Next.js 15, NestJS, and React Native, serving 10,000+ users with GraphQL APIs and Kubernetes deployments." />
          <ExperienceCard title="Software Engineering Student" company="African Leadership University" period="'24 - present" description="Pursuing a B.Sc. in Software Engineering, focusing on distributed systems, cloud architecture, DevOps, and machine learning engineering." />
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
          <div className="flex flex-row items-start gap-[16px] mb-[24px]"><div className="flex-1"><h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">About Me.</h1></div><img src="/images/Moses.png" alt="Moses" className="w-[120px] md:w-[160px] h-auto object-cover" style={{ aspectRatio: "0.751" }} /></div>
          <div className="flex flex-row items-end gap-[8px] mb-[24px] pb-[16px] border-b border-[var(--framer-light-gray)]">
            <div className="flex-1 flex flex-col gap-[4px]"><PrimaryButton text="mugisham505@gmail.com" href="mailto:mugisham505@gmail.com" /><PrimaryButton text="+250 786 768 418" href="tel:+250786768418" size="14" /></div>
            <div className="flex flex-col items-end gap-[8px]"><span className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)]">© 2022-25</span><div className="flex flex-row gap-[8px]"><Icon variant="Social button / X" href="https://x.com/mugisham37" /><Icon variant="Social button / instagram" href="https://instagram.com/mugisham37" /><Icon variant="Social button / dribbble" href="https://github.com/mugisham37" /></div></div>
          </div>
          <div className="flex flex-col gap-[4px] mb-[32px]"><Misc title="Years of experience" value="3+" showLine /><Misc title="Satisfied clients" value="20+" showLine /><Misc title="Projects completed" value="50+" showLine /><Misc title="Certifications" value="2" showLine /></div>
          <MiddleContent />
          <div className="flex flex-col gap-[16px] mt-[40px] mb-[32px]">
            <div className="flex flex-col gap-[2px]"><p className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">Achievements</p><div className="w-full h-[1px] bg-[var(--framer-light-gray)]" /></div>
            <div className="flex flex-col gap-[6px]"><Award title="Harvard CS50" organization="Introduction to Computer Science" year="'23" /><Award title="Best System Architecture" organization="ALU Innovation Hackathon" year="'24" /><Award title="3D Design Recognition" organization="East Africa Creative Awards" year="'24" /><Award title="Motion Design Excellence" organization="Africa Digital Arts Awards" year="'23" /><Award title="Web Performance Award" organization="Google Developer Community" year="'24" showLine={false} /></div>
          </div>
          <FooterContent />
        </div>
      </div>
    </PageTransition>
  );
}
