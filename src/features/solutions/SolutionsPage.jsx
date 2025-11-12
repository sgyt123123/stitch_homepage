import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { useTheme } from '@/shared/lib/ThemeContext'

export function SolutionsPage() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  return (
    <main className="flex-grow pt-16 bg-background-light dark:bg-background-dark text-gray-900 dark:text-[#EAEAEA]">
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
                        我们的智能代理
                      </h1>
                      <h2 className="text-gray-600 dark:text-[#EAEAEA] text-base font-normal leading-normal @[480px]:text-lg">
                        了解我们旨在重新定义行业标准的先进AI解决方案。
                      </h2>
                    </div>
                  </div>
                </motion.section>

                <motion.section 
                  className="@container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
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
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">智能代理 'Orion'</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">通过预测性洞察自动化复杂的财务分析。</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">了解更多</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
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
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nexus 平台</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">以无与伦比的效率实时优化供应链物流。</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">了解更多</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
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
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Synapse Core</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">使开发人员能够无缝构建和部署自定义 AI 智能代理。</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">了解更多</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="group flex cursor-pointer flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 p-6 transition-all duration-300 hover:border-primary hover:bg-gray-50 dark:hover:bg-primary/10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
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
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quantum Leap</h3>
                          <p className="text-base text-gray-600 dark:text-[#EAEAEA]">通过先进的模拟智能代理彻底改变研发。</p>
                        </div>
                        <div className="flex items-center gap-2 text-primary">
                          <span className="text-sm font-bold">了解更多</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.section>

                <motion.section 
                  className="@container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-col items-center justify-end gap-6 rounded-xl bg-gray-100 dark:bg-white/5 px-4 py-10 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="max-w-[720px] text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white @[480px]:text-4xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        准备好革新您的业务了吗？
                      </h1>
                      <p className="max-w-[720px] text-base font-normal leading-normal text-gray-600 dark:text-[#EAEAEA]">了解我们的 AI 智能代理如何改变您的业务。</p>
                    </div>
                    <div className="flex justify-center">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-opacity hover:opacity-90">
                        <span className="truncate">申请演示</span>
                      </button>
                    </div>
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
