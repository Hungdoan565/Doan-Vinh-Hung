import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/social'


export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading>{t('contact.title')}</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-muted leading-relaxed"
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
          }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-3 px-6 py-4 w-full sm:w-auto transition-all hover:border-accent/30"
              >
                <div className="p-2 rounded-lg bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Icon size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-heading">{link.label}</p>
                  <p className="text-xs text-muted">{link.url.replace(/^(mailto:|https?:\/\/(www\.)?)/, '')}</p>
                </div>
                <ArrowUpRight size={14} className="text-muted group-hover:text-accent ml-auto transition-colors" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
