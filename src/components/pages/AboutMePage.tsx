import React from 'react'
import { Stats } from '../components/sections/Stats'
import { Services } from '../components/sections/Services'
import { SocialProof } from '../components/sections/SocialProof'
import { Newsletter } from '../components/sections/Newsletter'
import { Divider } from '../components/layout/Divider'
import { GridOverlay } from '../components/layout/GridOverlay'
import { SpanHeading } from '../components/layout/SpanHeading'
import { ScrollReveal } from '../components/animations/ScrollReveal'
import { TextReveal } from '../components/animations/TextReveal'
import { TechStack } from '../components/sections/TechStack'

export const AboutMePage: React.FC = () => {
  return (
    <>
      {/* Profile Hero */}
      <section style={{ width: '100%', position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Divider />
        <div style={{ width: '100%', maxWidth: 1576, padding: '144px 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
          <GridOverlay />
          <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', overflow: 'clip' }}>
              <ScrollReveal>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', padding: '0 6px' }}>
                  <SpanHeading number="2" title="ABOUT ME" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                    <h1 className="text-h1" style={{ textAlign: 'center' }}>Who I Am</h1>
                    <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 590 }}>
                      A short introduction to my work, values, and the way I approach building clear and usable digital products.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '0 6px' }}>
                  <div style={{ width: '100%', maxWidth: 600, borderRadius: 3, overflow: 'hidden' }}>
                    <img
                      src="https://framerusercontent.com/images/M4XXiqSPayq2HjtN6UaJK6ixZD4.jpg"
                      alt="Alex Neozen"
                      style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 3 }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* About text reveal */}
      <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Divider />
        <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
          <GridOverlay />
          <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', padding: '72px 24px', zIndex: 1, position: 'relative' }}>
            <TextReveal
              text="From concept to execution, I focus on building thoughtful digital experiences that solve real problems. My approach blends strategy, design, and consistent attention to detail across every project."
              textColor="rgb(204, 204, 204)"
              revealColor="rgb(5, 5, 5)"
              textAlign="center"
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Tech Stack Section */}
      <TechStack />

      <Services sectionNumber="5" />
      <SocialProof sectionNumber="6" />
      <Newsletter showNumber={false} />
    </>
  )
}

/* ---- Journey Section ---- */
const careerSteps = [
  { title: 'Early Foundations', items: ['Studied UI/UX principles, typography, and interaction design', 'Developed interest in visual storytelling and user experience', 'First freelance projects in branding and web design'] },
  { title: 'Breaking into the Industry', items: ['Worked with startups and entrepreneurs', 'Led rebranding and website redesigns', 'Expanded expertise in JavaScript, Figma, and Adobe Creative Suite'] },
  { title: 'Collaborating with Global Brands', items: ['Partnered with agencies, startups, and established brands', 'Designed conversion-driven websites and intuitive UI/UX experiences', 'Spearheaded collaborative projects with developers and marketers'] },
  { title: 'Achievements & Growth', items: ['Helped clients increase engagement and conversions', 'Worked on projects that reached thousands of users', 'Continuously refining skills and staying ahead of design trends'] },
]

const JourneySection: React.FC = () => (
  <section style={{ width: '100%', position: 'relative', zIndex: 2, backgroundColor: 'var(--light-98)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Divider />
    <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <GridOverlay />
      <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
        <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
              <SpanHeading number="1" title="JOURNEY" centered />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                <h2 className="text-h2" style={{ textAlign: 'center' }}>Career Highlights</h2>
                <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 600 }}>Key moments, projects, and roles that have shaped my journey and approach to design over the years.</p>
              </div>
            </div>
          </ScrollReveal>
          <div style={{ width: '100%' }}>
            {careerSteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, borderBottom: '1px dashed var(--light-92)' }}>
                  <div style={{ padding: '48px 24px 48px 6px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
                    <span className="text-h3" style={{ position: 'relative', zIndex: 2 }}>{step.title}</span>
                  </div>
                  <div style={{ padding: '48px 6px', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', zIndex: 2, position: 'relative' }}>
                        <div style={{ width: 4, height: 4, backgroundColor: 'var(--dark-2)', marginTop: 6, flexShrink: 0 }} />
                        <span className="text-body" style={{ color: 'var(--dark-30)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ---- Philosophy Section ---- */
const philosophyCards = [
  { title: 'User-Centered Design', description: 'Every project starts with understanding the user\'s needs. I prioritize usability, accessibility, and seamless interactions to craft designs that truly resonate.' },
  { title: 'Aesthetics with Purpose', description: 'Beautiful design isn\'t just about looking good—it\'s about enhancing clarity and engagement. I focus on clean layouts, balanced typography, and meaningful color schemes.' },
  { title: 'Strategy-Driven Creativity', description: 'Design is more than visuals—it\'s a strategy. I leverage UX research, psychology, and industry insights to create solutions that drive conversions and brand growth.' },
  { title: 'Future-Ready & Scalable', description: 'I design with longevity in mind, ensuring that brands and products evolve seamlessly with trends and technology while maintaining their core essence.' },
]

const PhilosophySection: React.FC = () => (
  <section style={{ width: '100%', position: 'relative', zIndex: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Divider />
    <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <GridOverlay />
      <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
        <div style={{ padding: '72px 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
              <SpanHeading number="2" title="PHILOSOPHY" centered />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                <h2 className="text-h2" style={{ textAlign: 'center' }}>Design Principles</h2>
                <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 690 }}>The ideas that inform how I solve problems, make decisions, and craft well-structured digital experiences.</p>
              </div>
            </div>
          </ScrollReveal>
          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {philosophyCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div style={{ padding: '0 6px', height: 600 }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: 3, overflow: 'hidden', position: 'relative', backgroundColor: 'var(--light-86)', cursor: 'pointer' }}>
                    <div style={{ position: 'absolute', right: 6, bottom: 6, left: 6, backgroundColor: 'rgba(255,255,255,1)', borderRadius: 1, padding: 24, display: 'flex', flexDirection: 'column', gap: 24, zIndex: 1 }}>
                      <span className="text-h3" style={{ maxWidth: 240 }}>{card.title}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ---- Awards Section ---- */
const awards = {
  '2025': [
    { award: 'Awwwards – Site of the Day', description: 'Recognized for design excellence and innovation with our launch of the AeroSound brand site.', project: 'AeroSound', link: 'https://aerosound.framer.website/' },
    { award: 'Communication Arts – Interactive Annual Winner', description: 'Honored for our bold creative direction and UI design on the Avenzor digital experience.', project: 'Avenzor', link: 'https://avenzor.framer.website/' },
    { award: 'FWA – Cutting Edge Award', description: 'Awarded for pushing interaction and motion boundaries in the immersive Nocturne web experience.', project: 'Plywood', link: 'https://plywood.framer.website/' },
  ],
  '2024': [
    { award: 'CSS Design Awards – Innovation of the Day', description: 'Recognized for bold experimentation and scroll-driven storytelling on our XZERO® Labs launch page.', project: '+XZERO®', link: 'https://xzero.framer.website/' },
    { award: 'Communication Arts – Interactive Annual Winner', description: "Featured in CA's annual for our elevated portfolio concept created for Charmant.", project: 'Charmant', link: 'https://charmant.framer.website/' },
    { award: 'D&AD – Graphite Pencil / Digital Design', description: 'Honored for UX innovation and creative systems in the design of the predict app interface.', project: 'Predict', link: 'https://predict.framer.ai/' },
    { award: 'ADC Europe – Gold / Creative Strategy', description: 'Acknowledged for turning complex positioning into a compelling brand system for Payble.', project: 'Payble', link: 'https://payble.framer.ai/' },
  ],
}

const AwardsSection: React.FC = () => (
  <section style={{ width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Divider />
    <div style={{ width: '100%', maxWidth: 1576, padding: '0 48px 72px', position: 'relative', zIndex: 1, overflow: 'visible' }}>
      <GridOverlay />
      <div style={{ width: '100%', maxWidth: 1480, margin: '0 auto', zIndex: 2, position: 'relative' }}>
        <div style={{ padding: '72px 0 0', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ padding: '0 6px', display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
              <SpanHeading number="3" title="AWARDS" centered />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center' }}>
                <h2 className="text-h2" style={{ textAlign: 'center' }}>Recognition &amp; Mentions</h2>
                <p className="text-subtitle" style={{ textAlign: 'center', maxWidth: 680 }}>Selected honors and awards recognizing the work, attention to detail, and results delivered across different projects.</p>
              </div>
            </div>
          </ScrollReveal>

          {Object.entries(awards).map(([year, items]) => (
            <ScrollReveal key={year}>
              <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: 48, borderTop: '1px dashed var(--light-92)', borderBottom: '1px dashed var(--light-92)' }}>
                <div style={{ padding: '48px 24px 48px 6px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 1, right: 1, bottom: 1, left: 1, backgroundColor: 'var(--light-98)', zIndex: 1 }} />
                  <span className="text-number" style={{ position: 'relative', zIndex: 2 }}>// {year}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {items.map((item, i) => (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'block', padding: '24px 6px', borderTop: i > 0 ? '1px dashed var(--light-92)' : 'none', textDecoration: 'none', color: 'inherit' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <span className="text-h3">{item.award}</span>
                        <span className="text-body" style={{ color: 'var(--neutral-50)' }}>{item.description}</span>
                        <span className="text-span" style={{ color: 'var(--dark-2)' }}>{item.project}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
)
