import { motion } from 'framer-motion'
import { AnimatedCard, CardContent, AnimatedButton } from '@/components/enhanced'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/shared/lib/LanguageContext'
import type { Product } from '@/types'

// 产品卡片组件
const ProductCard = ({
  product,
  index,
  hasAIBadge = false,
}: {
  product: Product
  index: number
  hasAIBadge?: boolean
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <AnimatedCard
        withSpotlight
        withGlow
        className="group h-full cursor-pointer border-border hover:border-primary transition-all duration-500"
      >
        <CardContent className="p-6">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-4">
            <img
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={product.image}
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                {hasAIBadge && <Badge variant="secondary">AI</Badge>}
              </div>
              <p className="text-base text-muted-foreground">{product.desc}</p>
            </div>
            <AnimatedButton
              variant="ghost"
              className="p-0 h-auto text-primary hover:text-primary/80 group"
              withShimmer
            >
              <span className="text-sm font-bold">{product.learnMore}</span>
              <span className="material-symbols-outlined ml-1 transition-transform duration-500 group-hover:translate-x-1">
                arrow_forward
              </span>
            </AnimatedButton>
          </div>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  )
}

export function SolutionsContent() {
  const { t } = useLanguage()

  // 产品数据配置
  const products: Product[] = [
    {
      title: t.solutions.solutionsPage?.products?.[0]?.title || '',
      desc: t.solutions.solutionsPage?.products?.[0]?.desc || '',
      learnMore: t.solutions.solutionsPage?.products?.[0]?.learnMore || '',
      image: '/images/solution-orion.jpg',
      hasAIBadge: true,
    },
    {
      title: t.solutions.solutionsPage?.products?.[1]?.title || '',
      desc: t.solutions.solutionsPage?.products?.[1]?.desc || '',
      learnMore: t.solutions.solutionsPage?.products?.[1]?.learnMore || '',
      image: '/images/solution-nexus.jpg',
      hasAIBadge: false,
    },
    {
      title: t.solutions.solutionsPage?.products?.[2]?.title || '',
      desc: t.solutions.solutionsPage?.products?.[2]?.desc || '',
      learnMore: t.solutions.solutionsPage?.products?.[2]?.learnMore || '',
      image: '/images/solution-synapse.jpg',
      hasAIBadge: false,
    },
    {
      title: t.solutions.solutionsPage?.products?.[3]?.title || '',
      desc: t.solutions.solutionsPage?.products?.[3]?.desc || '',
      learnMore: t.solutions.solutionsPage?.products?.[3]?.learnMore || '',
      image: '/images/solution-quantum.jpg',
      hasAIBadge: false,
    },
  ]

  return (
    <div className="flex-grow text-foreground">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
            <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
              <div className="flex flex-col gap-16 md:gap-24 py-16 md:py-24">
                {/* Hero Section */}
                <motion.section
                  className="@container"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex flex-col gap-6 px-4 py-10 text-center @[480px]:gap-8 items-center">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-foreground text-4xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        {t.solutions.solutionsPage?.hero?.title || ''}
                      </h1>
                      <h2 className="text-muted-foreground text-base font-normal leading-normal @[480px]:text-lg">
                        {t.solutions.solutionsPage?.hero?.subtitle || ''}
                      </h2>
                    </div>
                  </div>
                </motion.section>

                {/* Products Grid */}
                <motion.section
                  className="@container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
                    {products.map((product, index) => (
                      <ProductCard
                        key={product.title}
                        product={product}
                        index={index}
                        hasAIBadge={Boolean(product.hasAIBadge)}
                      />
                    ))}
                  </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                  className="@container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="flex flex-col items-center justify-end gap-6 rounded-xl bg-muted px-4 py-10 text-center @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <h1 className="max-w-[720px] text-3xl font-bold leading-tight tracking-tight text-foreground @[480px]:text-4xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        {t.solutions.solutionsPage?.cta?.title || ''}
                      </h1>
                      <p className="max-w-[720px] text-base font-normal leading-normal text-muted-foreground">
                        {t.solutions.solutionsPage?.cta?.subtitle || ''}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <AnimatedButton size="lg" className="min-w-[120px]" withShimmer>
                        {t.solutions.solutionsPage?.cta?.button || ''}
                      </AnimatedButton>
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
