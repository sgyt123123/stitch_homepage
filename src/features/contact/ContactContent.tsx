import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { fadeIn } from '@/shared/lib/animations'
import { ContactHeroSection } from './components/ContactHeroSection'
import { ContactForm } from './components/ContactForm'
import { ContactInfoSection } from './components/ContactInfoSection'

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1">
          <ContactHeroSection t={t} />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mt-12 md:mt-20"
            {...fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm t={t} />
            <ContactInfoSection t={t} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
