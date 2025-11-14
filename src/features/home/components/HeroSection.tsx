import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/enhanced'
import { Badge } from '@/components/ui/badge'
import { SplineScene } from '@/components/ui/splite'
import { fadeInUpLarge, staggerContainer } from '@/shared/lib/animations'
import type React from 'react'
import type { LocaleData, PartnerLogoProps } from '@/types'

interface PartnerLogoType {
  logo: string
  name: string
}

export function HeroSection({
  t,
  partnerLogos,
  PartnerLogo,
}: {
  t: LocaleData
  partnerLogos: PartnerLogoType[]
  PartnerLogo: React.ComponentType<PartnerLogoProps>
}) {
  return (
    <section className="relative flex min-h-[130vh] w-full flex-col pt-20" id="hero">
      {/* 3D机器人背景层 */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <div className="w-full h-full translate-x-[200px] pointer-events-auto">
            <SplineScene
              scene="/images/models/scene.splinecode"
              className="w-full h-full pointer-events-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* 主要内容 - 让所有文字区域都穿透鼠标事件到机器人 */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start px-4 py-20 sm:px-6 sm:py-32 lg:px-8 pointer-events-none">
        <div className="flex w-full items-start pointer-events-none">
          {/* 左侧内容 - 让鼠标事件穿透到机器人 */}
          <div className="max-w-xl pt-12 pointer-events-none">
            <motion.div
              className="flex flex-col gap-6 pointer-events-none"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-4xl font-black leading-tight tracking-tighter text-left text-foreground drop-shadow-2xl sm:text-5xl md:text-6xl pointer-events-none"
                {...fadeInUpLarge}
              >
                {t.hero.title}
              </motion.h1>
              <motion.h2
                className="text-base font-normal leading-normal text-left text-muted-foreground drop-shadow-lg md:text-lg pointer-events-none"
                {...fadeInUpLarge}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.hero.subtitle}
              </motion.h2>
              <motion.div
                className="flex flex-wrap items-center gap-3 pointer-events-none"
                {...fadeInUpLarge}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <AnimatedButton
                  size="lg"
                  className="shadow-2xl hover:shadow-2xl transition-shadow bg-primary/95 hover:bg-primary backdrop-blur-sm border-0 pointer-events-auto z-20 relative"
                  withShimmer
                >
                  {t.hero.demo}
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl hover:bg-accent/90 backdrop-blur-sm border-border/50 bg-background/80 pointer-events-auto z-20 relative"
                  withShimmer
                >
                  {t.hero.video}
                </AnimatedButton>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 合作伙伴部分 - 在小屏幕上的布局 */}
        <div className="lg:hidden absolute top-[100vh] w-full left-0 pointer-events-none z-20">
          <motion.div
            className="text-center pointer-events-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-4 pointer-events-none text-sm px-4 py-2">
              {t.hero.partners}
            </Badge>
            <div className="mt-6 grid grid-cols-2 place-items-center gap-6 sm:gap-8 pointer-events-none max-w-4xl mx-auto">
              {partnerLogos.map((partner, i) => (
                <PartnerLogo key={i} logo={partner.logo} index={i} universityName={partner.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 合作伙伴部分 - 仅在大屏幕上显示 */}
      <div className="hidden lg:block absolute top-[100vh] w-full left-0 z-20 pointer-events-none">
        <motion.div
          className="mx-auto max-w-6xl px-6 text-center pointer-events-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-4 pointer-events-none text-sm px-4 py-2">
            {t.hero.partners}
          </Badge>
          <div className="mt-6 grid grid-cols-5 place-items-center gap-8 pointer-events-none">
            {partnerLogos.map((partner, i) => (
              <PartnerLogo key={i} logo={partner.logo} index={i} universityName={partner.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
