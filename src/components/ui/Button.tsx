'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DotArrow } from './DotArrow'

interface ButtonProps {
  label: string
  href: string
  external?: boolean
  bgColor?: string
  textColor?: string
  hoverBgColor?: string
  hoverTextColor?: string
  variant?: 'default' | 'simple-link' | 'simple-link-medium'
  fullWidth?: boolean
  showArrow?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  external = false,
  bgColor = 'rgb(250, 250, 250)',
  textColor = 'rgb(5, 5, 5)',
  hoverBgColor = 'rgb(255, 255, 255)',
  hoverTextColor = 'rgb(5, 5, 5)',
  variant = 'default',
  fullWidth = false,
  showArrow = true,
}) => {
  const isSimple = variant === 'simple-link' || variant === 'simple-link-medium'
  const fontSize = variant === 'simple-link' ? 14 : variant === 'simple-link-medium' ? 16 : 18

  const content = (
    <motion.div
      initial="idle"
      whileHover="hover"
      style={{
        position: 'relative',
        height: isSimple ? 'auto' : 48,
        width: fullWidth ? '100%' : isSimple ? 'fit-content' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isSimple ? '0 6px' : '0 24px',
        overflow: 'clip',
        cursor: 'pointer',
      }}
    >
      {/* Background with 1px inset */}
      {!isSimple && (
        <motion.div
          variants={{
            idle: { backgroundColor: bgColor },
            hover: { backgroundColor: hoverBgColor },
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: 1,
            right: 1,
            bottom: 1,
            left: 1,
            zIndex: 1,
          }}
        />
      )}

      {/* Text slide container */}
      <div
        style={{
          overflow: 'hidden',
          height: 24,
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Invisible text for sizing */}
        <span
          style={{
            opacity: 0,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize,
            lineHeight: '0.65em',
            letterSpacing: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>

        {/* Sliding text wrapper */}
        <motion.div
          variants={{
            idle: { y: 0 },
            hover: { y: -24 },
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Default text */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 24,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize,
              lineHeight: '0.65em',
              letterSpacing: 0,
              color: textColor,
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </span>
          {/* Hover text */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 24,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize,
              lineHeight: '0.65em',
              letterSpacing: 0,
              color: hoverTextColor,
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </span>
        </motion.div>
      </div>

      {/* Dot arrow on right */}
      {!isSimple && showArrow && (
        <div style={{ position: 'absolute', right: 22, zIndex: 2 }}>
          <DotArrow direction="right" color={textColor} size={36} />
        </div>
      )}
    </motion.div>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : 'auto' }}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={href}
      style={{ display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : 'auto' }}
    >
      {content}
    </Link>
  )
}
