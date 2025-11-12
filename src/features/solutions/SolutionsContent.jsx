import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { useTheme } from '@/shared/lib/ThemeContext'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export function SolutionsContent() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <div className="flex-grow bg-background-light dark:bg-background-dark text-gray-900 dark:text-[#EAEAEA]">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
            <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
              <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
                <motion.section 
                  className="@container"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col gap-6 px-4 py-10 text-center @[480px]:gap-8 items-center">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-gray-900 dark:text-white text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        {t.solutions.solutionsPage.hero.title}
                      </h1>
                      <h2 className="text-gray-600 dark:text-[#EAEAEA] text-base font-normal leading-normal @[480px]:text-lg">
                        {t.solutions.solutionsPage.hero.subtitle}
                      </h2>
                    </div>
                  </div>
                </motion.section>

                <motion.section 
                  className="@container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-black">
                        <img 
                          alt="Abstract digital representation of flowing data streams in blue and purple hues."
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          src="/images/solution-orion.jpg"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.solutions.solutionsPage.products[0].title}</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">{t.solutions.solutionsPage.products[0].desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">{t.solutions.solutionsPage.products[0].learnMore}</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-black">
                        <img 
                          alt="Sleek user interface mockup showing interconnected nodes and data points." 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          src="/images/solution-nexus.jpg"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.solutions.solutionsPage.products[1].title}</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">{t.solutions.solutionsPage.products[1].desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">{t.solutions.solutionsPage.products[1].learnMore}</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-black">
                        <img 
                          alt="Conceptual animation of a glowing, neural network-like core." 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          src="/images/solution-synapse.jpg"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.solutions.solutionsPage.products[2].title}</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">{t.solutions.solutionsPage.products[2].desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">{t.solutions.solutionsPage.products[2].learnMore}</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-black">
                        <img 
                          alt="Futuristic image of a global network visualized over a digital landscape." 
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          src="/images/solution-quantum.jpg"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.solutions.solutionsPage.products[3].title}</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">{t.solutions.solutionsPage.products[3].desc}</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">{t.solutions.solutionsPage.products[3].learnMore}</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section 
                  className="@container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="flex flex-col items-center justify-end gap-6 rounded-xl bg-gray-100 dark:bg-white/5 px-4 py-10 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="max-w-[720px] text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white @[480px]:text-4xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        {t.solutions.solutionsPage.cta.title}
                      </h1>
                      <p className="max-w-[720px] text-base font-normal leading-normal text-gray-600 dark:text-[#EAEAEA]">{t.solutions.solutionsPage.cta.subtitle}</p>
                    </div>
                    <div className="flex justify-center">
                      <motion.button 
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="truncate">{t.solutions.solutionsPage.cta.button}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}