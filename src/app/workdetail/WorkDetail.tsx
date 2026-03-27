import { useParams, Link } from 'react-router-dom';
import ThreeColumnLayout from '../components/ThreeColumnLayout';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { AnimatedContainer, AnimatedItem } from '../components/AnimatedPage';
import { projects } from '../data/projects';
import styles from './WorkDetail.module.css';

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div style={{ padding: '200px 20px', textAlign: 'center' }}>
        <h1 className="heading-1">Project Not Found</h1>
        <Link to="/work" className="primary-button btn-16-semibold" style={{ marginTop: 20, display: 'inline-block' }}>
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <>
      <ThreeColumnLayout
        left={
          <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Top — Title */}
            <AnimatedItem>
              <h1 className="heading-1">{project.title}</h1>
            </AnimatedItem>

            {/* Middle — Cover + Category */}
            <AnimatedItem>
              <div className={styles.leftCover}>
                <div className={styles.coverImage}>
                  <img src={project.image} alt={project.title} />
                </div>
                <span className="text-14">{project.category}</span>
              </div>
            </AnimatedItem>

            {/* Bottom — Metadata */}
            <AnimatedItem>
              <div className={styles.metadata}>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Year</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.year}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Client</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.client}</span>
                  </div>
                  <div className="divider" />
                </div>
                <div className={styles.metaRow}>
                  <div className={styles.metaContent}>
                    <span className="text-14" style={{ textAlign: 'right' }}>Service</span>
                    <span className="text-16" style={{ flex: 1 }}>{project.service}</span>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        }
        middle={
          <div className={styles.middleContent}>
            {/* Sticky description */}
            <AnimatedContainer className={styles.description}>
              <AnimatedItem>
                <p className="heading-2" style={{ maxWidth: 600 }}>{project.description}</p>
              </AnimatedItem>
              <div style={{ height: '30vh', opacity: 0 }} />
              <AnimatedItem>
                <span className="text-12">©</span>
              </AnimatedItem>
            </AnimatedContainer>

            {/* Image gallery */}
            <div className={styles.gallery}>
              {project.galleryImages.length > 0 ? (
                project.galleryImages.map((img, i) => (
                  <div key={i} className={styles.galleryImage}>
                    <img src={img} alt={`${project.title} ${i + 1}`} />
                  </div>
                ))
              ) : (
                <div className={styles.galleryImage}>
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>

            <div style={{ paddingTop: 146 }}>
              <div style={{ height: '40vh', opacity: 0 }} />
            </div>
          </div>
        }
        right={
          <AnimatedContainer style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <AnimatedItem>
              <div className={styles.nextProject}>
                <span className="text-12" style={{ marginBottom: 8 }}>Next Project</span>
                <ProjectCard project={nextProject} />
              </div>
            </AnimatedItem>
          </AnimatedContainer>
        }
      />
      <Footer />
    </>
  );
}
