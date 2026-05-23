import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Code2 } from 'lucide-react'
import { OrbitingCircles } from '@/components/ui/OrbitingCircles'
import { useLanguage } from '@/context/LanguageContext'
import { bi } from '@/lib/utils'
import { skills, type Skill } from '@/data/skills'

export function SkillOrbit() {
  const { language } = useLanguage()
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, side: 'right' as 'left' | 'right' })

  // Group skills by size
  const largeSkills = skills.filter((s) => s.size === 'large')
  const mediumSkills = skills.filter((s) => s.size === 'medium')
  const smallSkills = skills.filter((s) => s.size === 'small')

  const isAnyHovered = hoveredSkill !== null

  const handleHover = (skill: Skill, element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    const containerRect = element.closest('.skill-orbit-container')?.getBoundingClientRect()
    
    if (!containerRect) return

    // Calculate position relative to container center
    const centerX = containerRect.left + containerRect.width / 2
    const iconCenterX = rect.left + rect.width / 2
    const iconCenterY = rect.top + rect.height / 2

    // Determine side based on icon position relative to center
    const isLeft = iconCenterX < centerX
    const side = isLeft ? 'left' : 'right'

    // Position relative to container
    const x = iconCenterX - containerRect.left
    const y = iconCenterY - containerRect.top

    setTooltipPosition({ x, y, side })
    setHoveredSkill(skill)
  }

  return (
    <div className="skill-orbit-container relative w-full max-w-4xl mx-auto aspect-square flex items-center justify-center">
      {/* Center icon */}
      <div className="relative z-10 p-8 rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 backdrop-blur-sm">
        <Code2 size={48} className="text-accent" />
      </div>

      {/* Outer ring — small skills */}
      <OrbitingCircles
        radius={220}
        duration={40}
        iconSize={48}
        path={true}
        className={isAnyHovered ? 'paused' : ''}
      >
        {smallSkills.map((skill) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            isHovered={hoveredSkill?.name === skill.name}
            onHover={handleHover}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </OrbitingCircles>

      {/* Middle ring — medium skills */}
      <OrbitingCircles
        radius={150}
        duration={30}
        iconSize={56}
        reverse
        path={true}
        className={isAnyHovered ? 'paused' : ''}
      >
        {mediumSkills.map((skill) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            isHovered={hoveredSkill?.name === skill.name}
            onHover={handleHover}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </OrbitingCircles>

      {/* Inner ring — large skills */}
      <OrbitingCircles
        radius={90}
        duration={20}
        iconSize={64}
        path={true}
        className={isAnyHovered ? 'paused' : ''}
      >
        {largeSkills.map((skill) => (
          <SkillIcon
            key={skill.name}
            skill={skill}
            isHovered={hoveredSkill?.name === skill.name}
            onHover={handleHover}
            onLeave={() => setHoveredSkill(null)}
          />
        ))}
      </OrbitingCircles>

      {/* Rich Info Card — positioned next to icon */}
      <AnimatePresence>
        {hoveredSkill && (
          <motion.div
            key={hoveredSkill.name}
            initial={{ opacity: 0, scale: 0.92, x: tooltipPosition.side === 'right' ? -8 : 8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 pointer-events-none"
            style={{
              top: tooltipPosition.y,
              left: tooltipPosition.side === 'right'
                ? tooltipPosition.x + 56
                : tooltipPosition.x - 316,
              transform: 'translateY(-50%)',
              width: '260px',
            }}
          >
            <div className="card p-4 shadow-2xl border border-accent/15 space-y-3">
              {/* Header: logo + name + level */}
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-surface-alt border border-border flex-shrink-0">
                  <hoveredSkill.icon size={28} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold font-mono text-heading leading-tight">
                    {hoveredSkill.name}
                  </h3>
                  <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-accent-soft text-[10px] font-mono text-accent">
                    {hoveredSkill.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted leading-relaxed">
                {bi(hoveredSkill.description, language)}
              </p>

              {/* Applied in */}
              <div>
                <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-1.5">
                  {language === 'vi' ? 'Đã dùng trong' : 'Applied in'}
                </p>
                <div className="space-y-1">
                  {hoveredSkill.appliedIn.map((usage) => (
                    <div key={usage.project} className="flex items-start gap-1.5">
                      <span className="text-accent mt-0.5 text-xs">▸</span>
                      <span className="text-xs text-text leading-snug">
                        <span className="font-medium">{usage.project}</span>
                        <span className="text-muted"> — {bi(usage.role, language)}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concepts */}
              <div>
                <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-1.5">
                  {language === 'vi' ? 'Khái niệm' : 'Key concepts'}
                </p>
                <div className="flex flex-wrap gap-1">
                  {hoveredSkill.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="px-1.5 py-0.5 rounded bg-surface-alt border border-border text-[10px] text-text font-mono"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Docs link */}
              <a
                href={hoveredSkill.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-1 text-[10px] text-accent hover:underline font-mono"
              >
                {language === 'vi' ? 'Tài liệu chính thức' : 'Official docs'}
                <span className="text-[8px]">↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface SkillIconProps {
  skill: Skill
  isHovered: boolean
  onHover: (skill: Skill, element: HTMLElement) => void
  onLeave: () => void
}

function SkillIcon({ skill, isHovered, onHover, onLeave }: SkillIconProps) {
  const Icon = skill.icon
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => ref.current && onHover(skill, ref.current)}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.2 }}
      className={`p-3 rounded-full bg-surface border transition-all duration-200 cursor-pointer shadow-lg ${
        isHovered
          ? 'border-accent bg-accent-soft scale-110 ring-2 ring-accent/30'
          : 'border-border hover:border-accent/50'
      }`}
    >
      <Icon size={24} />
    </motion.div>
  )
}
