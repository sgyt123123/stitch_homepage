/**
 * AnimatedCard - 增强的卡片组件
 *
 * 遵循 shadcn/ui 设计哲学：
 * - 组合 Card 样式 + Spotlight + 3D Tilt
 * - 保留 Card 的所有子组件（CardHeader, CardContent 等）
 * - 使用组合而非继承
 */
import * as React from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'framer-motion'
import {
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import { springs } from '@/shared/lib/animations'
import { cn } from '@/lib/utils'

export interface AnimatedCardProps extends Omit<HTMLMotionProps<'div'>, 'ref' | 'children'> {
  /** 子元素 */
  children?: React.ReactNode
  /** 启用 3D 倾斜效果 */
  withTilt?: boolean
  /** 启用 Spotlight 跟随效果 */
  withSpotlight?: boolean
  /** 启用边框光晕 */
  withGlow?: boolean
  /** Spotlight 大小 */
  spotlightSize?: number
}

/**
 * AnimatedCard 组件
 *
 * @example
 * ```tsx
 * <AnimatedCard withTilt withSpotlight>
 *   <CardHeader>
 *     <CardTitle>标题</CardTitle>
 *   </CardHeader>
 *   <CardContent>内容</CardContent>
 * </AnimatedCard>
 * ```
 */
export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  (
    {
      className,
      children,
      withTilt = false,
      withSpotlight = true,
      withGlow = true,
      spotlightSize = 300,
      onMouseMove,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    // 3D 倾斜状态
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!withTilt) return

      const rect = e.currentTarget.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5

      x.set(xPct)
      y.set(yPct)

      onMouseMove?.(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      x.set(0)
      y.set(0)
      onMouseLeave?.(e)
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          'relative group rounded-lg border bg-card text-card-foreground shadow-sm',
          className
        )}
        {...(withTilt && {
          style: {
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d' as const,
          },
        })}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={springs.gentle}
        {...props}
      >
        {/* Spotlight 跟随效果 */}
        {withSpotlight && (
          <Spotlight size={spotlightSize} className="from-primary/20 via-primary/10" />
        )}

        {/* 边框光晕 */}
        {withGlow && (
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-[-1px] rounded-lg bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 blur-sm -z-10" />
          </div>
        )}

        {/* 内容 */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

/**
 * 导出 Card 的所有子组件，保持 API 一致性
 */
export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
