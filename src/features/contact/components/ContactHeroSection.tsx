import { motion } from 'framer-motion'
import { fadeInUp } from '@/shared/lib/animations'

export function ContactHeroSection({ t }) {
  return (
    <motion.div className="flex flex-wrap justify-between gap-3 p-4 text-center" {...fadeInUp}>
      <div className="flex w-full flex-col items-center gap-3">
        <p className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
          {t.contactPage.hero.title}
        </p>
        <p className="text-muted-foreground text-base md:text-lg font-normal leading-normal max-w-2xl">
          {t.contactPage.hero.subtitle}
        </p>
      </div>
    </motion.div>
  )
}
