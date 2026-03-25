import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface TextRevealProps {
  text: string
  textColor?: string
  revealColor?: string
  textAlign?: 'left' | 'center' | 'right'
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  textColor = 'rgb(204, 204, 204)',
  revealColor = 'rgb(5, 5, 5)',
  textAlign = 'center',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end center'],
  })

  const words = text.split(' ')

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'visible',
      }}
    >
      <p
        className="text-h2"
        style={{
          textAlign,
          width: '100%',
          display: 'block',
          textTransform: 'none',
        }}
      >
        {words.map((word, index) => {
          const start = index / words.length
          const end = (index + 1) / words.length

          return (
            <Word
              key={index}
              word={word}
              isLast={index === words.length - 1}
              progress={scrollYProgress}
              range={[start, end]}
              textColor={textColor}
              revealColor={revealColor}
              isInView={isInView}
            />
          )
        })}
      </p>
    </div>
  )
}

interface WordProps {
  word: string
  isLast: boolean
  progress: any
  range: [number, number]
  textColor: string
  revealColor: string
  isInView: boolean
}

const Word: React.FC<WordProps> = ({
  word,
  isLast,
  progress,
  range,
  textColor,
  revealColor,
  isInView,
}) => {
  const opacity = useTransform(progress, range, [0, 1])
  const color = useTransform(opacity, [0, 1], [textColor, revealColor])

  return (
    <motion.span
      style={{
        color: isInView ? color : textColor,
        transition: 'color 0.3s ease',
        overflow: 'visible',
        display: 'inline-block',
        marginRight: isLast ? 0 : '0.3em',
      }}
    >
      {word}
    </motion.span>
  )
}
