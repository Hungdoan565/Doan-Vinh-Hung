import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SkillOrbit } from '@/components/SkillOrbit'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading>{t('skills.heading')}</SectionHeading>

        <div className="mt-16">
          <SkillOrbit />
        </div>

        <p className="text-center text-xs text-muted mt-8">
          {t('language') === 'vi' 
            ? 'Rê chuột vào biểu tượng để xem chi tiết' 
            : 'Hover over icons to view details'}
        </p>
      </div>
    </section>
  )
}
