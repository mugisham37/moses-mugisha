import { Navigation } from "@/components/Navigation";
import { ThreeColumnLayout } from "@/components/ThreeColumnLayout";
import { FooterContent } from "@/components/Footer";
import { Misc } from "@/components/Misc";
import { projects, getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
interface Props { params: Promise<{ slug: string }> }

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const ci = projects.findIndex((p) => p.slug === slug);
  const next = projects[(ci + 1) % projects.length];

  const href = project.previewLink.startsWith("http") ? project.previewLink : `https://${project.previewLink}`;

  return (<>
    <Navigation />
    <div className="hidden lg:block">
      <ThreeColumnLayout
        left={<>
          <div className="flex flex-col gap-[24px]"><h1 className="text-[56px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)]">{project.title}</h1></div>
          <div className="w-[60%] flex flex-col gap-[8px]"><img src={project.previewImage} alt={project.title} className="w-full h-[120px] object-cover" style={{ aspectRatio: "1.333" }} /><span className="text-[14px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)] self-end">{project.category}</span></div>
          <div className="w-full flex flex-col gap-[4px]"><Misc title={project.year} value="Year" showLine /><Misc title={project.client} value="Client" showLine /><Misc title={project.service} value="Service" showLine={false} /></div>
        </>}
        middle={<>
          <div className="flex flex-col gap-[8px] pb-[24px]">
            <h2 className="text-[26px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px]">{project.overview}</h2>
          </div>
          <div className="flex flex-col gap-[12px] pb-[16px]">
            {project.gallery.map((img, i) => <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full object-cover" />)}
          </div>
          <div className="pt-[146px]"><div className="h-[40vh] opacity-0" /></div>
        </>}
        right={<>
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[8px]"><h3 className="text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.challengeTitle}</h3><p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.challengeText}</p></div>
            <div className="h-[1px] bg-[var(--framer-light-gray)]" />
            <div className="flex flex-col gap-[8px]"><h3 className="text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.solutionTitle}</h3><p className="text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.solutionText}</p></div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] px-[16px] py-[10px] border border-[var(--framer-light-gray)] hover:bg-[var(--framer-black)] hover:text-[var(--framer-white)] hover:border-[var(--framer-black)] transition-colors self-start"
            >
              {project.buttonText}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="w-full flex flex-col gap-[6px]"><span className="text-[12px] font-medium tracking-[-0.03em] text-[var(--framer-gray)] uppercase">Next</span><Link href={`/work/${next.slug}`} className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors">{next.title}</Link></div>
        </>}
      />
    </div>
    <div className="block lg:hidden">
      <div className="flex flex-col px-[16px] md:px-[20px] pt-[72px] md:pt-[80px] max-w-[810px] mx-auto">
        <Link href="/work" className="text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-gray)] hover:text-[var(--framer-black)] transition-colors mb-[16px]">← Back to Work</Link>
        <h1 className="text-[36px] md:text-[44px] font-medium leading-[1em] tracking-[-0.05em] text-[var(--framer-black)] mb-[24px]">{project.title}</h1>
        <p className="text-[20px] md:text-[24px] font-medium leading-[1.1em] tracking-[-0.04em] text-[var(--framer-black)] max-w-[600px] mb-[24px]">{project.overview}</p>
        <div className="flex flex-col gap-[4px] mb-[24px] pb-[16px] border-b border-[var(--framer-light-gray)]"><Misc title={project.year} value="Year" showLine /><Misc title={project.client} value="Client" showLine /><Misc title={project.service} value="Service" showLine={false} /></div>
        <div className="flex flex-col gap-[24px] mb-[32px]">
          <div className="flex flex-col gap-[8px]"><h3 className="text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.challengeTitle}</h3><p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.challengeText}</p></div>
          <div className="h-[1px] bg-[var(--framer-light-gray)]" />
          <div className="flex flex-col gap-[8px]"><h3 className="text-[16px] md:text-[18px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.solutionTitle}</h3><p className="text-[14px] md:text-[16px] font-medium leading-[1.4em] tracking-[-0.03em] text-[var(--framer-black)]">{project.solutionText}</p></div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[8px] text-[14px] font-medium tracking-[-0.03em] text-[var(--framer-black)] px-[16px] py-[10px] border border-[var(--framer-light-gray)] hover:bg-[var(--framer-black)] hover:text-[var(--framer-white)] hover:border-[var(--framer-black)] transition-colors self-start"
          >
            {project.buttonText}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-[12px] mb-[32px]">{project.gallery.map((img, i) => <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="w-full object-cover" />)}</div>
        <div className="pb-[32px] border-t border-[var(--framer-light-gray)] pt-[16px]"><span className="text-[12px] font-medium tracking-[-0.03em] text-[var(--framer-gray)] uppercase">Next</span><Link href={`/work/${next.slug}`} className="block mt-[4px] text-[16px] font-medium tracking-[-0.03em] text-[var(--framer-black)] hover:text-[var(--framer-gray)] transition-colors">{next.title} →</Link></div>
        <FooterContent />
      </div>
    </div>
  </>);
}
