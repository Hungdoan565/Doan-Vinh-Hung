import { useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface BentoCardProps {
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  proficiency?: string
  className?: string
}

export function BentoCard({ icon: Icon, label, proficiency, className }: BentoCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'card relative p-4 flex flex-col items-center gap-3 cursor-default overflow-hidden group',
        className
      )}
    >
      {/* Icon */}
      <motion.div
        animate={hovered ? { scale: 1.12, rotate: -5 } : { scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Icon size={28} className="transition-colors duration-200" />
      </motion.div>

      {/* Label */}
      <span className="text-xs font-medium text-text text-center leading-tight group-hover:text-accent transition-colors duration-200">
        {label}
      </span>

      {/* Proficiency badge on hover */}
      {proficiency && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          className="absolute bottom-1.5 text-[10px] font-mono text-muted"
        >
          {proficiency}
        </motion.span>
      )}

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/60 via-accent to-accent/60"
        initial={{ scaleX: 0 }}
        animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.25 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  )
}
