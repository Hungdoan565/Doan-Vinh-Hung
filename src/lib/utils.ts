import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve bilingual field: { en, vi } | string → string based on current language */
export function bi(field: string | { en: string; vi: string }, lang: string): string {
  if (typeof field === 'string') return field
  return lang === 'vi' ? field.vi : field.en
}
