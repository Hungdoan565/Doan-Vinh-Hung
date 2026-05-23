import { createContext, useContext, useState } from 'react'
import { en } from '@/data/i18n/en'
import { vi } from '@/data/i18n/vi'
import type { Translations } from '@/data/i18n/types'

type Language = 'en' | 'vi'

const translations: Record<Language, Translations> = { en, vi }

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  tRaw: (key: string) => unknown
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('language') as Language | null
      if (saved === 'en' || saved === 'vi') return saved
    } catch {
      // ignore
    }
    return 'en'
  })

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch {
      // ignore
    }
  }

  // t: string-only lookup
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: unknown = translations[language]
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  // tRaw: returns any value (array, object, string)
  const tRaw = (key: string): unknown => {
    const keys = key.split('.')
    let value: unknown = translations[language]
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return undefined
      }
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tRaw }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
