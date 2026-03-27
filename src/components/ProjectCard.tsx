import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link to={`/work/${project.slug}`} className={styles.card}>
      <motion.div className={styles.imageContainer} whileHover="hover">
        <motion.img
          src={project.image}
          alt={project.title}
          className={styles.image}
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>
      <div className={styles.info}>
        <div className={styles.titleRow}>
          <span className="text-14">{project.title}</span>
          <span className="diamond diamond-sm" />
          <span className="text-14" style={{ flex: 1 }}>{project.category}</span>
        </div>
        <span className="text-14">{project.year}</span>
      </div>
    </Link>
  );
}
