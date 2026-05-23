import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { bi } from '@/lib/utils'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

function getInitials(name: string): string {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

export function Testimonials() {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>
          {(t('testimonials.heading') || 'Testimonials') as string}
        </SectionHeading>

        <div
          ref={containerRef}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className="card p-5 flex flex-col hover:border-accent/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote
                size={24}
                className="text-accent/40 mb-3 shrink-0"
              />

              {/* Quote text */}
              <p className="text-text text-sm leading-relaxed italic flex-1">
                "{bi(testimonial.quote, language)}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                {/* Avatar with initials fallback */}
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-border"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-accent font-mono text-sm font-semibold border border-border">
                    {getInitials(testimonial.name)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-heading font-medium text-sm truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-muted text-xs truncate">
                    {bi(testimonial.role, language)}
                  </p>
                  <p className="text-accent text-xs mt-0.5 truncate">
                    {bi(testimonial.relationship, language)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
