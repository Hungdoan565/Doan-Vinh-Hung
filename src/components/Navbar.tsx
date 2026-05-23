import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useScrollspy } from '@/hooks/useScrollspy'
import { useLanguage } from '@/context/LanguageContext'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

const NAV_ITEMS = ['about', 'skills', 'projects', 'contact'] as const

export function Navbar() {
  const { t } = useLanguage()
  const activeSection = useScrollspy()
  const prefersReducedMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <>
      {/* Desktop pill navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`pill-glass rounded-full px-2 py-1.5 flex items-center gap-1 transition-all duration-300 ${
            scrolled ? 'shadow-lg' : ''
          }`}
        >
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
            className="px-3 py-1.5 text-sm font-semibold font-mono text-heading hover:text-accent transition-colors rounded-full"
          >
            DVH
          </button>

          <div className="w-px h-4 bg-border/50" />

          {/* Nav links */}
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative px-3 py-1.5 text-sm transition-colors rounded-full group"
            >
              {activeSection === item && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeSection === item
                    ? 'text-accent font-medium'
                    : 'text-muted hover:text-text'
                }`}
              >
                {t(`nav.${item}`)}
              </span>
            </button>
          ))}

          <div className="w-px h-4 bg-border/50" />

          {/* Controls */}
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Mobile header bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 glass">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold font-mono text-heading"
          >
            DVH
          </button>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-muted hover:text-text transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-bg/95 backdrop-blur-md" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="relative flex flex-col items-center justify-center h-full gap-6"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => scrollToSection(item)}
                  className={`text-2xl font-mono transition-colors ${
                    activeSection === item
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {t(`nav.${item}`)}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
