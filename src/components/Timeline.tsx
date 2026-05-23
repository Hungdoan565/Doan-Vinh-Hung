import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Timeline() {
  const { t, tRaw } = useLanguage()
  const items = tRaw('timeline.items') as Array<{
    date: string
    title: string
    description: string
  }>
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>{t('timeline.heading')}</SectionHeading>

        <div ref={containerRef} className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === items.length - 1}
                side={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  item: { date: string; title: string; description: string }
  index: number
  isLast: boolean
  side: 'left' | 'right'
}

function TimelineItem({ item, index, isLast, side }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[16px_1fr] md:grid-cols-[1fr_16px_1fr] gap-4 md:gap-8"
    >
      {/* Left content (desktop only) */}
      <div className={`hidden md:block ${side === 'left' ? '' : 'order-3'}`}>
        {side === 'left' ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-right"
          >
            <ItemContent item={item} isLast={isLast} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start justify-end pt-1"
          >
            <span className="text-xs font-mono text-muted">{item.date}</span>
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className={`relative flex justify-center ${side === 'right' ? 'md:order-2' : ''}`}>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1, type: 'spring' }}
          className={`w-3.5 h-3.5 rounded-full border-2 mt-1.5 relative z-10 ${
            isLast
              ? 'border-accent bg-accent shadow-[0_0_12px_rgba(232,97,60,0.4)]'
              : 'border-accent/50 bg-surface'
          }`}
        />
      </div>

      {/* Right content (desktop) / Main content (mobile) */}
      <div className={side === 'right' ? 'md:order-3' : ''}>
        {/* Mobile: show date + content inline */}
        <motion.div
          initial={{ opacity: 0, x: side === 'left' ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="md:hidden"
        >
          <ItemContent item={item} isLast={isLast} />
        </motion.div>

        {/* Desktop: conditional content based on side */}
        <div className="hidden md:block">
          {side === 'right' ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ItemContent item={item} isLast={isLast} />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="pt-1"
            >
              <span className="text-xs font-mono text-muted">{item.date}</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

function ItemContent({
  item,
  isLast,
}: {
  item: { date: string; title: string; description: string }
  isLast: boolean
}) {
  return (
    <div>
      <span className="inline-block text-xs font-mono text-accent mb-1 md:hidden">
        {item.date}
      </span>
      <span className="hidden md:inline-block text-xs font-mono text-accent mb-1">
        {item.date}
      </span>
      <h3 className={`text-sm font-bold font-mono leading-snug ${isLast ? 'text-accent' : 'text-heading'}`}>
        {item.title}
      </h3>
      <p className="text-xs text-muted leading-relaxed mt-1">
        {item.description}
      </p>
    </div>
  )
}
