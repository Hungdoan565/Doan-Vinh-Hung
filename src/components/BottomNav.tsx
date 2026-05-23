import { User, Code2, FolderOpen, Mail, ArrowUp } from 'lucide-react'
import { useScrollspy } from '@/hooks/useScrollspy'
import { useLanguage } from '@/context/LanguageContext'

const ITEMS = [
  { id: 'about', icon: User },
  { id: 'skills', icon: Code2 },
  { id: 'projects', icon: FolderOpen },
  { id: 'contact', icon: Mail },
] as const

export function BottomNav() {
  const { t } = useLanguage()
  const active = useScrollspy()

  const scrollTo = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass border-t border-border">
      <div className="flex items-center justify-around py-2">
        {ITEMS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors ${
              active === id ? 'text-accent' : 'text-muted'
            }`}
            aria-label={t(`nav.${id}`)}
          >
            <Icon size={18} />
            <span className="text-[10px] font-medium">{t(`nav.${id}`)}</span>
          </button>
        ))}
        <button
          onClick={() => scrollTo('top')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 text-muted"
          aria-label={t('scrollToTop')}
        >
          <ArrowUp size={18} />
          <span className="text-[10px] font-medium">Top</span>
        </button>
      </div>
    </nav>
  )
}
