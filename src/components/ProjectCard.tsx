'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/work/${project.slug}`} className="flex flex-col gap-1.5 bg-white no-underline">
      <motion.div className="w-full aspect-4/3 overflow-hidden relative" whileHover="hover">
        <motion.img
          src={project.image}
          alt={project.title}
          className="-mt-1.75 -mb-1.75 -ml-2.25 -mr-2.25 w-[calc(100%+18px)] h-[calc(100%+14px)] object-cover"
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>
      <div className="flex gap-2 justify-between items-end">
        <div className="flex gap-1 items-center flex-1 overflow-hidden">
          <span className="text-14">{project.title}</span>
          <span className="diamond diamond-sm" />
          <span className="text-14 flex-1">{project.category}</span>
        </div>
        <span className="text-14">{project.year}</span>
      </div>
    </Link>
  );
}
