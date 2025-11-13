import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/ui/spotlight'
import { SplineScene } from '@/components/ui/spline'
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

// 合作伙伴Logo组件
const PartnerLogo = ({ logo, index, universityName }) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 0.7, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    {/* Logo容器背景 */}
    <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-28 w-32 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/30">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Logo图片 */}
      <img
        src={logo}
        alt={universityName}
        className="relative z-10 h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />

      {/* 悬浮指示器 */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300" />
    </div>

    {/* 悬浮时显示大学名称 */}
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
      <div className="bg-popover text-popover-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl border border-border whitespace-nowrap">
        {universityName}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border rotate-45" />
      </div>
    </div>
  </motion.div>
)

// 解决方案卡片组件
const SolutionCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    <Card className="h-full border-border hover:border-primary hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-8">
        <motion.div
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
        </motion.div>
        <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {item.desc}
        </p>
      </CardContent>
    </Card>
  </motion.div>
)

export function HomeContent() {
  const { t } = useLanguage()

  const partnerLogos = [
    { logo: "/images/logos/tsinghua-university-1024w.webp", name: "清华大学" },
    { logo: "/images/logos/peking-university-1024w.webp", name: "北京大学" },
    { logo: "/images/logos/fudan-university-1024w.webp", name: "复旦大学" },
    { logo: "/images/logos/shanghai-jiao-tong-university-1024w.webp", name: "上海交通大学" },
    { logo: "/images/logos/beihang-university-1024w.webp", name: "北京航空航天大学" }
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col pt-20" id="hero">
        {/* 3D机器人背景层 */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative w-full h-full"
          >
            <div className="w-full h-full" style={{ transform: 'translateX(200px)' }}>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
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
                  {...fadeInUp}
                >
                  {t.hero.title}
                </motion.h1>
                <motion.h2
                  className="text-base font-normal leading-normal text-left text-muted-foreground drop-shadow-lg md:text-lg pointer-events-none"
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t.hero.subtitle}
                </motion.h2>
                <motion.div
                  className="flex flex-wrap items-center gap-3 pointer-events-none"
                  {...fadeInUp}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button size="lg" className="shadow-2xl hover:shadow-2xl transition-shadow bg-primary/95 hover:bg-primary backdrop-blur-sm border-0 pointer-events-auto z-20 relative">
                    {t.hero.demo}
                  </Button>
                  <Button variant="outline" size="lg" className="shadow-xl hover:shadow-2xl hover:bg-accent/90 backdrop-blur-sm border-border/50 bg-background/80 pointer-events-auto z-20 relative">
                    {t.hero.video}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* 合作伙伴部分 - 在小屏幕上的布局 */}
          <div className="lg:hidden mt-16 pointer-events-none">
            <motion.div
              className="text-center"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Badge variant="secondary" className="mb-10 pointer-events-auto text-sm px-4 py-2">
                {t.hero.partners}
              </Badge>
              <div className="mt-12 grid grid-cols-2 place-items-center gap-6 sm:gap-8 pointer-events-auto max-w-4xl mx-auto">
                {partnerLogos.map((partner, i) => (
                  <PartnerLogo key={i} logo={partner.logo} index={i} universityName={partner.name} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 合作伙伴部分 - 仅在大屏幕上显示 */}
        <div className="hidden lg:block relative z-10 mt-20 pointer-events-none">
          <motion.div
            className="mx-auto max-w-6xl px-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Badge variant="secondary" className="mb-10 pointer-events-auto text-sm px-4 py-2">
              {t.hero.partners}
            </Badge>
            <div className="mt-10 grid grid-cols-5 place-items-center gap-8 pointer-events-auto">
              {partnerLogos.map((partner, i) => (
                <PartnerLogo key={i} logo={partner.logo} index={i} universityName={partner.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="bg-muted/50 border-t border-border py-20 sm:py-32"
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
              className="overflow-hidden rounded-xl shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
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

      {/* Solutions Section */}
      <motion.section
        className="bg-background py-20 sm:py-32"
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
            <Badge variant="outline" className="mb-4">
              {t.solutions.subtitle}
            </Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              {t.solutions.title}
            </h2>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.solutions.cards.map((item, i) => (
              <SolutionCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}
