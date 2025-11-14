/**
 * AnimatedButton - 增强的按钮组件
 *
 * 遵循 shadcn/ui 设计哲学：
 * - 组合优于继承：包装 Button 组件而非修改
 * - 使用 asChild 模式保持灵活性
 * - 添加品牌级动画效果
 */
import * as React from 'react'
import { motion } from 'framer-motion'
import { Button, type ButtonProps } from '@/components/ui/button'
import { springs, durations, easings } from '@/shared/lib/animations'
import { cn } from '@/lib/utils'

// TODO: 调试 - 临时移除复杂配置以测试基础动画
// import { springs, durations, easings } from '@/shared/lib/animations'

export interface AnimatedButtonProps extends ButtonProps {
  /** 启用 Shimmer 光泽效果 */
  withShimmer?: boolean
  /** 启用涟漪效果 */
  withRipple?: boolean
  /** 自定义 Spring 配置 */
  springConfig?: 'gentle' | 'snappy' | 'bouncy'
}

/**
 * AnimatedButton 组件
 *
 * @example
 * ```tsx
 * <AnimatedButton withShimmer>
 *   点击我
 * </AnimatedButton>
 * ```
 */
export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      className,
      children,
      withShimmer = true,
      withRipple = true, // 改为 true 以默认启用
      springConfig = 'snappy',
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([])
    const [shimmerKey, setShimmerKey] = React.useState(0)

    const handleMouseEnter = () => {
      if (withShimmer) {
        setShimmerKey(prev => prev + 1) // 切换key强制重启动画
      }
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple) {
        // 找到正确的按钮元素（处理 asChild 情况）
        const target = e.currentTarget as HTMLElement
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const id = Date.now()

        setRipples((prev) => [...prev, { x, y, id }])

        // 移除涟漪
        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
        }, 600)
      }

      props.onClick?.(e)
    }

    return (
      <Button
        ref={ref}
        asChild
        className={cn('relative overflow-hidden shimmer-container', className)}
        {...props}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* 内容 */}
          <span className="relative z-20 flex items-center justify-center gap-2">
            {children}
          </span>

          {/* Shimmer 光泽效果 - 使用 Tailwind CSS 动画 */}
          {withShimmer && (
            <div className="absolute inset-0 overflow-hidden" key={shimmerKey}>
              <style>{`
                .shimmer-effect {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                  background: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(255, 255, 255, 0.8) 45%,
                    rgba(255, 255, 255, 0.8) 55%,
                    transparent 100%
                  );
                }
                .shimmer-container:hover .shimmer-effect {
                  animation: shimmer 0.8s ease-in-out;
                  animation-fill-mode: none;
                }
                @keyframes shimmer {
                  0% { transform: translateX(-200%); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { transform: translateX(200%); opacity: 0; }
                }
              `}</style>
              <div className="shimmer-effect" />
            </div>
          )}

          {/* 涟漪效果 - 高可见度版本 */}
          {withRipple &&
            ripples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: ripple.x - 75,
                  top: ripple.y - 75,
                  width: 150,
                  height: 150,
                  zIndex: 999,
                  background: 'rgba(255, 255, 255, 0.8)', // 白色背景，高不透明度
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)', // 白色发光效果
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
        </motion.button>
      </Button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'
