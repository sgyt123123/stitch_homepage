import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { fadeInLeft, fadeInRight, fadeIn } from '@/shared/lib/animations'

export function AboutPreviewSection({ t }: { t: any }) {
  return (
    <motion.section
      className="bg-muted/50 border-t border-border py-20 sm:py-32"
      id="about"
      {...fadeIn}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeInLeft}>
            <Badge variant="outline" className="mb-4">
              {t.about.subtitle}
            </Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            {...fadeInRight}
            whileHover={{ scale: 1.02 }}
          >
            {/* 背景渐变 */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl" />

            {/* 装饰性元素 */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-8 w-6 h-6 bg-primary/25 rounded-full animate-pulse delay-500" />

            {/* 主图标容器 */}
            <div className="relative h-80 flex items-center justify-center">
              <motion.div
                className="relative"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {/* 主图标 */}
                <span className="material-symbols-outlined text-9xl text-primary/30">groups</span>

                {/* 内部装饰圆圈 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 border-2 border-primary/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* 悬浮粒子效果 */}
                <motion.div
                  className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0,
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-3 h-3 bg-primary/70 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-8 -left-8 w-2 h-2 bg-primary/50 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />
              </motion.div>

              {/* 环绕图标 */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 material-symbols-outlined text-2xl text-primary/60"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  chat
                </motion.span>
                <motion.span
                  className="absolute bottom-12 right-8 material-symbols-outlined text-2xl text-primary/60"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
                >
                  work
                </motion.span>
                <motion.span
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-2xl text-primary/60"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                >
                  insights
                </motion.span>
                <motion.span
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-2xl text-primary/60"
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 1.5 }}
                >
                  support_agent
                </motion.span>
              </motion.div>
            </div>

            {/* 居中标签 */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-6 z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="text-xs px-3 py-1 bg-background/90 backdrop-blur-sm border-border/50 shadow-lg"
              >
                {t.about.teamCollaboration}
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
