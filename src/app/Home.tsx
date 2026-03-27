'use client';

import ThreeColumnLayout from '../components/ThreeColumnLayout';
import ProjectCard from '../components/ProjectCard';
import MiscRow from '../components/MiscRow';
import SocialIcons from '../components/SocialIcons';
import ContactButtons from '../components/ContactButtons';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
import { projects, services, images } from '../data/projects';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <ThreeColumnLayout
        left={<HomeLeft />}
        middle={<HomeMiddle />}
        right={<HomeRight />}
      />
      <Footer />
    </>
  );
}

function HomeLeft() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <AnimatedItem>
        <div className={styles.intro}>
          <h1 className="heading-1">Hello! I'm Maelle.</h1>
        </div>
      </AnimatedItem>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <AnimatedItem>
          <SocialIcons direction="vertical" />
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.servicesList}>
            {services.map((s) => (
              <MiscRow key={s.title} label={s.title} hasLine={s.hasLine} />
            ))}
          </div>
        </AnimatedItem>
      </div>
    </AnimatedContainer>
  );
}

function HomeMiddle() {
  return (
    <div className={styles.middleContent}>
      <AnimatedContainer className={styles.description}>
        <AnimatedItem>
          <p className="heading-2" style={{ maxWidth: 600 }}>
            A digital designer &amp; photographer with 12 years of experience — specializing in crafting visual experiences that feel intentional, refined, and human.
          </p>
        </AnimatedItem>
        <div className={styles.spacer30vh} />
        <AnimatedItem>
          <div className={styles.selectedWorkHeader}>
            <span className="heading-3" style={{ flex: 1 }}>Selected work</span>
            <span className="text-12">({projects.length})</span>
          </div>
        </AnimatedItem>
      </AnimatedContainer>

      <div className={styles.projectsContainer}>
        <div className={styles.projectsList}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className={styles.bottomSpacer}>
        <div className={styles.spacer40vh} />
      </div>
    </div>
  );
}

function HomeRight() {
  return (
    <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, width: '100%' }}>
        <AnimatedItem>
          <div className={styles.available}>
            <span className="diamond diamond-md" />
            <span className="text-14">Available for work</span>
          </div>
        </AnimatedItem>
        <AnimatedItem>
          <div className={styles.profile}>
            <div className={styles.profileImage}>
              <img src={images.profileHome} alt="Maelle" />
            </div>
            <div className={styles.profileInfo}>
              <span className="text-14">Digital Designer</span>
              <span className="text-14">Based in France</span>
              <span className="text-14">Since 2013</span>
            </div>
          </div>
        </AnimatedItem>
      </div>

      <AnimatedItem>
        <div className={styles.contactRow}>
          <ContactButtons />
          <span className="text-14">© 2025</span>
        </div>
      </AnimatedItem>
    </AnimatedContainer>
  );
}
