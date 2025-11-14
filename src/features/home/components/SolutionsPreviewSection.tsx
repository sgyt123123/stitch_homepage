import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { fadeIn, fadeInUp } from '@/shared/lib/animations'

// 解决方案卡片组件
const SolutionCard = ({ item, index }: { item: any; index: number }) => (
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
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
        </motion.div>
        <h3 className="mt-6 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{item.desc}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export function SolutionsPreviewSection({ t }: { t: any }) {
  return (
    <motion.section className="bg-background py-20 sm:py-32" id="solutions" {...fadeIn}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" {...fadeInUp}>
          <Badge variant="outline" className="mb-4">
            {t.solutions.subtitle}
          </Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            {t.solutions.title}
          </h2>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.solutions.cards.map((item: any, i: number) => (
            <SolutionCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
