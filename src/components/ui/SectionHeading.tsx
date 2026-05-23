import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={cn('mb-12 overflow-hidden', className)}>
      <motion.h2
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-mono text-2xl font-bold tracking-tight text-heading sm:text-3xl"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
        className="mt-2 h-0.5 w-12 rounded-full bg-accent"
      />
    </div>
  )
}
