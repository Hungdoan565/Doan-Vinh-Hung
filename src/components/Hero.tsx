import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ArrowDown, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/data/social'

const ROLES = ['Full-Stack Developer', 'React Enthusiast', 'AI Explorer', 'Problem Solver']

export function Hero() {
  const { t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)

  // Rotating roles
  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const firstName = t('hero.name').split(' ').slice(0, -1).join(' ')
  const lastName = t('hero.name').split(' ').pop() || ''


  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Warm background */}
      <div className="absolute inset-0 warm-bg" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="text-xs font-medium text-accent">
            {t('hero.available')}
          </span>
        </motion.div>

        {/* Name — large gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-heading mb-4"
        >
          {firstName}{' '}
          <span className="gradient-text">{lastName}</span>
        </motion.h1>

        {/* Rotating role */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.4 }}
              className="text-lg sm:text-xl text-muted font-medium"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Identity sentence */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.label}
                variant="outline"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={18} />
                <span className="ml-1">{link.label}</span>
              </Button>
            )
          })}

          <Button
            variant="primary"
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            <span className="ml-2">{t('hero.downloadCv')}</span>
          </Button>
        </motion.div>

        {/* Social quick links (icon-only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex items-center justify-center gap-4 text-muted"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:text-accent hover:bg-accent-soft transition-all duration-200"
                aria-label={link.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted">{t('hero.scrollDown')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
