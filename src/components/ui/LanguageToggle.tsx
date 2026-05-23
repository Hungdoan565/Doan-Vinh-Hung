import { useLanguage } from '@/context/LanguageContext'
import { cn } from '@/lib/utils'

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
      aria-label={language === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
      className={cn(
        'inline-flex items-center justify-center h-9 px-2 rounded-full',
        'text-xs font-mono font-semibold tracking-wider',
        'text-muted hover:text-text hover:bg-surface-alt transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
    >
      {language === 'en' ? 'Vi' : 'En'}
    </button>
  )
}
