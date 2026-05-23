import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Sparkles, BookOpen, Brain, Zap, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ICONS = [BookOpen, Brain, Zap]

export function CurrentlyLearning() {
  const { t, tRaw } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const items = tRaw('learning.items') as Array<{
    title: string
    description: string
    tags: string[]
    links?: Array<{ label: string; url: string }>
  }>
  const quote = t('learning.quote')
  const subtitle = t('learning.subtitle')

  return (
    <section id="learning" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>{t('learning.heading') as string}</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-sm text-muted mt-4 mb-12 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[index] || Sparkles
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="card p-5 group hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold font-mono text-heading">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-alt border border-border text-[10px] font-mono text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border">
                    {item.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono text-accent hover:text-accent-hover transition-colors"
                      >
                        <ExternalLink size={10} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Inspirational quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-muted italic flex items-center justify-center gap-2">
            <Sparkles size={12} className="text-accent" />
            {quote}
            <Sparkles size={12} className="text-accent" />
          </p>
        </motion.div>
      </div>
    </section>
  )
}
