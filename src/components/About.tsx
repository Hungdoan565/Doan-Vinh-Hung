import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { MapPin, Calendar, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref} className="text-3xl font-bold font-mono text-accent">
      {count}{suffix}
    </span>
  )
}

export function About() {
  const { t } = useLanguage()

  const details = [
    { icon: MapPin, label: t('about.location') },
    { icon: Calendar, label: t('about.year') },
    { icon: GraduationCap, label: t('about.school') },
  ]

  const stats = [
    { value: 3, suffix: '+', label: t('about.statProjects') },
    { value: 5, suffix: '+', label: t('about.statRoles') },
    { value: 1, suffix: '', label: t('about.statYear') },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>{t('about.title')}</SectionHeading>

        <div className="mt-12 grid md:grid-cols-[280px_1fr] gap-10 items-start">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="card p-6 flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-surface-alt border-2 border-border">
                <img
                  src="/avatar.jpg"
                  alt={t('hero.name')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent && !parent.querySelector('.fallback-initials')) {
                      const div = document.createElement('div')
                      div.className = 'fallback-initials w-full h-full flex items-center justify-center bg-accent-soft text-accent font-bold text-2xl font-mono'
                      div.textContent = 'DH'
                      parent.appendChild(div)
                    }
                  }}
                />
              </div>
              {/* Online dot */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-surface pulse-dot" />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold font-mono text-heading mb-1">
              {t('hero.name')}
            </h3>

            {/* Details */}
            <div className="flex flex-col gap-2 mt-3">
              {details.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-muted">
                  <Icon size={14} className="shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
          >
            {/* Bio */}
            <div className="space-y-4 text-text leading-relaxed mb-8">
              {t('about.bio').split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, suffix, label }) => (
                <div
                  key={label}
                  className="card p-4 text-center group hover:border-accent/30 transition-all"
                >
                  <AnimatedCounter target={value} suffix={suffix} />
                  <p className="text-xs text-muted mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
