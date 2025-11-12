import { motion } from 'framer-motion'
import { Button } from '@/shared/components/Button'
import { useLanguage } from '@/shared/lib/LanguageContext'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function HomeContent() {
  const { t } = useLanguage()

  const partnerLogos = [
    'https://cdn.usegalileo.ai/stability/c1d9ba7a-d6e6-411c-8431-7e058cfa0ab4.png',
    'https://cdn.usegalileo.ai/stability/58877e0c-5fd8-40e2-a97e-ba20aca487e9.png',
    'https://cdn.usegalileo.ai/sdxl10/cde6cd5c-a9c3-46bc-ba61-7a36b0f62d1b.png',
    'https://cdn.usegalileo.ai/sdxl10/e931a919-8d8c-42df-96b8-24a18d8c08f2.png',
    'https://cdn.usegalileo.ai/sdxl10/1dce33ed-5eaa-4a42-8f95-04c4c1806d04.png'
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <section className="relative flex min-h-screen w-full flex-col pt-20" id="hero">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay className="pointer-events-none h-full w-full object-cover opacity-20" loop muted playsInline>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-plexus-network-of-connected-lines-and-dots-4610-large.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-20 text-center sm:px-6 sm:py-32 lg:px-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-center">
                <motion.h1
                  className="text-4xl font-black leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
                  {...fadeInUp}
                >
                  {t.hero.title}
                </motion.h1>
                <motion.h2
                  className="text-base font-normal leading-normal text-gray-700 dark:text-white/80 md:text-lg"
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t.hero.subtitle}
                </motion.h2>
              </div>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-3"
                {...fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg">{t.hero.demo}</Button>
                <Button variant="outline" size="lg">{t.hero.video}</Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="mt-24 sm:mt-32"
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-sm font-bold uppercase leading-normal tracking-widest text-gray-600 dark:text-white/50">{t.hero.partners}</h4>
            <div className="mt-8 grid grid-cols-2 place-items-center gap-x-8 gap-y-10 sm:grid-cols-4 md:grid-cols-5">
              {partnerLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  className="opacity-60 transition-opacity hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={logo} alt={`Partner ${i + 1}`} className="h-12 w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-white/10 py-20 sm:py-32"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t.about.subtitle}</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t.about.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-white/70">
                {t.about.description}
              </p>
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.usegalileo.ai/sdxl10/9a47ad8d-17f0-4c50-8147-95fd5f67f1b5.png"
                alt="Team collaboration"
                className="h-full w-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-background-light dark:bg-background-dark py-20 sm:py-32"
        id="solutions"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t.solutions.subtitle}</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">{t.solutions.title}</h2>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.solutions.cards.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 p-8 hover:bg-white dark:hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-base text-gray-600 dark:text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}