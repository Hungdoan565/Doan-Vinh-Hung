import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

export function useScrollspy() {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const sectionVisibility: Record<string, number> = {}

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            sectionVisibility[id] = entry.intersectionRatio
            // Find the section with the highest visibility ratio
            const bestSection = Object.entries(sectionVisibility).reduce(
              (best, [sId, ratio]) => (ratio > best[1] ? [sId, ratio] : best),
              ['hero', 0] as [string, number],
            )
            if (bestSection[1] > 0) {
              setActiveSection(bestSection[0])
            }
          })
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return activeSection
}
