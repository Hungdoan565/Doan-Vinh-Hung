import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Briefcase, Calendar } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { bi } from '@/lib/utils'
import { experiences } from '@/data/experience'

export function Experience() {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>{t('experience.heading')}</SectionHeading>

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-12 space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="card p-5 md:p-6 hover:border-accent/30 transition-colors"
            >
              {/* Header: Title + Company | Period + Type */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 rounded-lg bg-accent-soft text-accent">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-heading">
                      {bi(exp.title, language)}
                    </h3>
                    <p className="text-sm text-muted mt-0.5">
                      {bi(exp.company, language)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:flex-col md:items-end md:gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-mono">{bi(exp.period, language)}</span>
                  </div>
                  <Badge variant="accent">{bi(exp.type, language)}</Badge>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-text leading-relaxed">
                {bi(exp.description, language)}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{bi(highlight, language)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
