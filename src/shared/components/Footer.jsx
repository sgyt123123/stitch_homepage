import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <motion.footer
      className="bg-background-light dark:bg-background-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl border-t border-gray-200 dark:border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-white/50">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors" href="#">
              {t.footer.privacy}
            </a>
            <a className="text-sm text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors" href="#">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
