import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <div className="flex-grow bg-background-light dark:bg-background-dark">
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 16, 34, 0.8) 0%, rgba(16, 16, 34, 0.9) 100%), url("/images/hero-background.jpg")',
          }}
        >
          <motion.div
            className="flex flex-col gap-4 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
              {t.about.hero.title}
            </h1>
            <h2 className="text-gray-300 text-base font-normal leading-normal md:text-xl">
              {t.about.hero.subtitle}
            </h2>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.section className="mb-20 sm:mb-32" {...fadeInUp}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-4">
              {t.about.mission.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
              在<span className="font-bold text-primary">菏投</span>，我们始于一个简单的信念：技术应是人类潜能的延伸，而非替代品。我们的旅程并非始于会议室，而是源于以赋能个人和组织的方式解决复杂问题的共同热情。本节将深入探讨指导我们做出的每一个决策、编写的每一行代码的核心原则，从我们对道德AI的承诺，到我们创造直观、强大且人人可用的工具的热情。
            </p>
          </div>
          <motion.div 
            className="max-w-4xl mx-auto mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-gray-900 dark:text-white tracking-tight text-2xl sm:text-4xl font-bold leading-tight px-4 text-center pb-3 pt-6 border-l-4 border-primary">
              "在<span className="font-bold text-primary">菏投</span>，我们的目标是创造与人类协作的智能体，增强我们的创造力和生产力，而不是取而代之。"
            </h1>
            <p className="text-center mt-4 text-gray-600 dark:text-gray-400">- 王皓，创始人兼首席执行官</p>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-center mb-12 sm:mb-16">
            {t.about.journey.title}
          </h2>
          <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
            <div className="absolute border-opacity-20 border-gray-400 dark:border-gray-600 h-full border" style={{left: '50%'}}></div>
            
            {/* 2021年：灵感迸发 */}
            <motion.div 
              className="mb-8 flex justify-between items-center w-full right-timeline"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-sm text-white">1</h1>
              </div>
              <div className="order-1 bg-white dark:bg-gray-800/90 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">2021年：灵感迸发</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-400 text-opacity-100">
                  <span className="font-bold text-primary">菏投</span> 的想法诞生了。一支由充满热情的工程师和设计师组成的小团队，怀着共同的愿景走到了一起。
                </p>
              </div>
            </motion.div>

            {/* 2022年：首个原型 */}
            <motion.div 
              className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-sm">2</h1>
              </div>
              <div className="order-1 bg-white dark:bg-gray-800/90 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">2022年：首个原型</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-400 text-opacity-100">
                  经过数月不懈的努力，我们推出了第一个功能原型，证明了我们协作式AI的核心概念。
                </p>
              </div>
            </motion.div>

            {/* 2023年：赢得信任 */}
            <motion.div 
              className="mb-8 flex justify-between items-center w-full right-timeline"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-sm text-white">3</h1>
              </div>
              <div className="order-1 bg-white dark:bg-gray-800/90 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">2023年：赢得信任</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-400 text-opacity-100">
                  我们成功获得了种子轮融资，这使我们能够扩大团队并加速产品公开发布的进程。
                </p>
              </div>
            </motion.div>

            {/* 2024年：公开发布 */}
            <motion.div 
              className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-sm">4</h1>
              </div>
              <div className="order-1 bg-white dark:bg-gray-800/90 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-gray-200 dark:border-white/10">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">2024年：公开发布</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-700 dark:text-gray-400 text-opacity-100">
                  我们的平台向公众发布，赋能成千上万的用户通过我们的AI智能体取得更多成就。
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              我们的企业文化与团队
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              我们是一支由创新者、思想家和创造者组成的团队，因一个共同的目标而团结在一起。我们的文化建立在透明、协作和对卓越的不懈追求之上。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <img 
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
                src="/images/team-wang-hao.jpg"
                alt="Photo of Wang Hao, CEO"
              />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">王皓</h3>
              <p className="text-primary font-medium text-sm">创始人兼首席执行官</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <img 
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
                src="/images/team-li-wei.jpg"
                alt="Photo of Li Wei, CTO"
              />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">李伟</h3>
              <p className="text-primary font-medium text-sm">首席技术官</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <img 
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
                src="/images/team-zhang-min.jpg"
                alt="Photo of Zhang Min, Head of Product"
              />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">张敏</h3>
              <p className="text-primary font-medium text-sm">产品负责人</p>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <img 
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" 
                src="/images/team-chen-lei.jpg"
                alt="Photo of Chen Lei, Lead AI Researcher"
              />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">陈磊</h3>
              <p className="text-primary font-medium text-sm">首席AI研究员</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}