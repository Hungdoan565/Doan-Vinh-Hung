import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Github, ExternalLink, Lightbulb, Wrench, AlertTriangle, Trophy } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { bi } from '@/lib/utils'
import { type Project } from '@/data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage()
  const modalRef = useRef<HTMLDivElement>(null)

  // Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!project) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, handleKeyDown])

  // Focus trap
  useEffect(() => {
    if (!project || !modalRef.current) return
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, a[href], [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length > 0) focusable[0].focus()

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [project])

  const caseStudy = project?.caseStudy

  const sections = caseStudy
    ? [
        { icon: Lightbulb, title: t('projects.caseStudy.problem'), content: bi(caseStudy.problem, language) },
        { icon: Wrench, title: t('projects.caseStudy.whatIBuilt'), content: bi(caseStudy.whatIBuilt, language) },
        { icon: AlertTriangle, title: t('projects.caseStudy.keyDecisions'), content: bi(caseStudy.keyDecisions, language) },
        { icon: Trophy, title: t('projects.caseStudy.result'), content: bi(caseStudy.result, language) },
      ]
    : []

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-surface/95 backdrop-blur-sm border-b border-border">
              <h2 id="modal-title" className="text-xl font-bold font-mono text-heading">
                {project.title}
              </h2>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-surface-alt transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="accent">{bi(project.role, language)}</Badge>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {/* Case study sections */}
              {sections.map(({ icon: Icon, title, content }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-accent shrink-0" />
                    <h3 className="font-semibold font-mono text-heading text-sm">
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm text-text/80 leading-relaxed pl-6">
                    {content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
