import { motion } from 'motion/react'

const TECH_ITEMS = [
  'React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Supabase', 'Express',
  'Java', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Postman',
  'Framer Motion', 'Next.js', 'Vite', 'PostgreSQL',
]

export function TechMarquee() {
  // Duplicate list for seamless loop
  const items = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="relative py-6 overflow-hidden select-none">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg to-transparent" />

      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-sm font-mono text-muted/50 tracking-wider uppercase"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
