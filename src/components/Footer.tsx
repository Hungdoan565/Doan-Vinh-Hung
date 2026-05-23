import { Heart } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { socialLinks } from '@/data/social'


export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted flex items-center gap-1.5">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-mono text-heading">{t('hero.name')}</span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            {t('footer.builtWith')} <Heart size={12} className="text-accent" />
          </span>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent-soft transition-all"
                aria-label={link.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
