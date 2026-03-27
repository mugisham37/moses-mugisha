import ThreeColumnLayout from '../components/ThreeColumnLayout';
import ServiceCard from '../components/ServiceCard';
import ToolsCard from '../components/ToolsCard';
import ExperienceCard from '../components/ExperienceCard';
import MiscRow from '../components/MiscRow';
import AwardRow from '../components/AwardRow';
import LogosTicker from '../components/LogosTicker';
import FAQAccordion from '../components/FAQAccordion';
import SocialIcons from '../components/SocialIcons';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
import { images, serviceDetails, tools, experience, stats, awards, faqs } from '../data/projects';
import { DownloadSimple } from '@phosphor-icons/react';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <ThreeColumnLayout
        left={<AboutLeft />}
        middle={<AboutMiddle />}
        right={<AboutRight />}
      />
      <Footer />
    </>
  );
}

function AboutLeft() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Top */}
      <AnimatedItem>
        <h1 className="heading-1">About Me.</h1>
      </AnimatedItem>

      {/* Middle — Profile photo */}
      <AnimatedItem>
        <div className={styles.leftPhoto}>
          <div className={styles.leftProfileImg}>
            <img src={images.profileAbout} alt="Maelle" />
          </div>
          <span className="text-14">© 2013-25</span>
        </div>
      </AnimatedItem>

      {/* Bottom — Contact + Socials */}
      <AnimatedItem>
        <div className={styles.leftBottom}>
          <ContactButtons />
          <SocialIcons direction="horizontal" />
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}

function AboutMiddle() {
  return (
    <div className={styles.middleContent}>
      {/* Section 1 — Intro */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <p className="heading-2" style={{ maxWidth: 600 }}>
            I'm Maelle — a digital designer and photographer based in France, with over 12 years of experience crafting visual stories across digital, editorial, and lifestyle spaces.
          </p>
        </AnimatedItem>
        <AnimatedItem>
          <p className="text-16" style={{ maxWidth: 520 }}>
            Whether I'm designing a brand's digital presence or capturing quiet moments on camera, I approach every project with care, intention, and a strong sense of visual narrative.
          </p>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 2 — Logos Ticker */}
      <AnimatedItem className={styles.section} style={{ width: '100%' }}>
        <LogosTicker />
      </AnimatedItem>

      {/* Section 3 — Services */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <h2 className="heading-2">Services</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className={styles.serviceCards}>
          {serviceDetails.map((s) => (
            <AnimatedItem key={s.title}>
              <ServiceCard title={s.title} description={s.description} />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* Section 4 — Software Stack */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <h2 className="heading-2">Software Stack</h2>
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.toolsGrid}>
            {tools.map((t) => (
              <ToolsCard key={t.name} name={t.name} description={t.description} />
            ))}
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      {/* Section 5 — Experience */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <div className={styles.experienceHeader}>
              <h2 className="heading-2" style={{ flex: 1 }}>Experience</h2>
              <a href="#" className={`primary-button btn-14-medium ${styles.downloadCv}`}>
                <DownloadSimple size={14} weight="regular" />
                <span>Download CV</span>
              </a>
            </div>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <div className={styles.experienceCards}>
          {experience.map((e) => (
            <AnimatedItem key={e.title}>
              <ExperienceCard
                title={e.title}
                company={e.company}
                period={e.period}
                description={e.description}
              />
            </AnimatedItem>
          ))}
        </div>
      </AnimatedContainer>

      {/* Section 6 — FAQs */}
      <AnimatedContainer className={styles.section}>
        <AnimatedItem>
          <div className={styles.sectionTitle}>
            <h2 className="heading-2">FAQs</h2>
            <div className="divider" />
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <FAQAccordion items={faqs} />
        </AnimatedItem>
      </AnimatedContainer>

      {/* Bottom spacer */}
      <div style={{ paddingTop: 146 }}>
        <div style={{ height: '40vh', opacity: 0 }} />
      </div>
    </div>
  );
}

function AboutRight() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Stats */}
      <AnimatedItem>
        <div className={styles.statsBlock}>
          {stats.map((s) => (
            <MiscRow key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
      </AnimatedItem>

      {/* Awards */}
      <AnimatedItem>
        <div className={styles.awardsBlock}>
          <div className={styles.awardsTitle}>
            <span className="text-14">Achievements</span>
            <div className="divider" />
          </div>
          <div className={styles.awardsList}>
            {awards.map((a) => (
              <AwardRow key={a.title} title={a.title} org={a.org} year={a.year} hasLine={a.hasLine} />
            ))}
          </div>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
