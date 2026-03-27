'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types';

// Project card from Framer MCP: Project / bcD8EgcQ1
// Default variant: image 387px height, aspect 1.333
// Info row: title + category (diamond separator) + year
// Hover: image scales to 1.04 over 0.4s easeOut

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        width: '100%',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
      >
        {/* Image container */}
        <div
          style={{
            width: '100%',
            height: '387px',
            overflow: 'hidden',
            aspectRatio: '1.333',
            position: 'relative',
          }}
        >
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.04, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 810px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Info row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            overflow: 'hidden',
          }}
        >
          {/* Title + category */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '1.4em',
                letterSpacing: '-0.03em',
                color: '#121212',
                whiteSpace: 'nowrap',
              }}
            >
              {project.title}
            </span>
            {/* Diamond separator */}
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '4px',
                backgroundColor: '#757575',
                transform: 'rotate(-45deg)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-geist)',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '1.4em',
                letterSpacing: '-0.03em',
                color: '#121212',
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Year */}
          <span
            style={{
              fontFamily: 'var(--font-geist)',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '1.4em',
              letterSpacing: '-0.03em',
              color: '#121212',
              flexShrink: 0,
            }}
          >
            {project.year}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
