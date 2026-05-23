import { motion } from 'motion/react'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { useLanguage } from '@/context/LanguageContext'
import { bi } from '@/lib/utils'
import { type Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  onViewCase: () => void
}

export function ProjectCard({ project, onViewCase }: ProjectCardProps) {
  const { t, language } = useLanguage()

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="card group overflow-hidden flex flex-col h-full"
    >
      {/* Image area */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image || `https://placehold.co/600x340/1a1310/f5ede6?text=${encodeURIComponent(project.title)}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/80 text-text hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface/80 text-text hover:text-accent transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold font-mono text-heading mb-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-muted mb-2">{bi(project.role, language)}</p>

        <p className="text-sm text-text/80 leading-relaxed mb-4 flex-1 line-clamp-3">
          {bi(project.tagline, language)}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="default">{tech}</Badge>
          ))}
          {project.tech.length > 5 && (
            <Badge variant="default">+{project.tech.length - 5}</Badge>
          )}
        </div>

        {/* Quick links */}
        <div className="flex gap-3 mb-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
            >
              <Github size={12} />
              <span>{t('projects.viewCode')}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
            >
              <ExternalLink size={12} />
              <span>{t('projects.liveDemo')}</span>
            </a>
          )}
        </div>

        {/* Case study button */}
        {project.caseStudy && (
          <button
            onClick={onViewCase}
            className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/btn"
          >
            <BookOpen size={14} />
            <span>{t('projects.viewCaseStudy')}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </button>
        )}
      </div>
    </motion.div>
  )
}
