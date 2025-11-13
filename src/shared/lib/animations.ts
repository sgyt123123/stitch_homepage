/**
 * 统一的动画变量库
 * 集中管理所有Framer Motion动画配置，提高代码复用性
 */
import type { AnimationVariant } from '@/types'

// 基础淡入动画（向上）
export const fadeInUp: AnimationVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 基础淡入动画（向上，较大距离）
export const fadeInUpLarge: AnimationVariant = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// 基础淡入动画（向下）
export const fadeInDown: AnimationVariant = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 基础淡入动画（向左）
export const fadeInLeft: AnimationVariant = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 基础淡入动画（向右）
export const fadeInRight: AnimationVariant = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 简单淡入
export const fadeIn: AnimationVariant = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 交错容器
export const staggerContainer: AnimationVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  } as any,
}

// 交错容器（带延迟）
export const staggerContainerWithDelay: AnimationVariant = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
} as any

// 悬停缩放效果
export const hoverScale: AnimationVariant = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring', stiffness: 300 },
}

// 悬停上移效果
export const hoverLift: AnimationVariant = {
  whileHover: { y: -8 },
  transition: { duration: 0.3 },
}

// 悬停轻微上移
export const hoverLiftSmall: AnimationVariant = {
  whileHover: { y: -5 },
  transition: { duration: 0.3 },
}

// 卡片悬停效果
export const cardHover: AnimationVariant = {
  whileHover: { y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' },
  transition: { duration: 0.3 },
}

// 点击缩放效果
export const tapScale: AnimationVariant = {
  whileTap: { scale: 0.98 },
}

// 页面过渡
export const pageTransition: AnimationVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
}

// 缩放淡入
export const scaleIn: AnimationVariant = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// Logo动画（带缩放）
export const logoAnimation = (index: number): AnimationVariant => ({
  initial: { opacity: 0, scale: 0.8, y: 20 },
  whileInView: { opacity: 0.7, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: index * 0.15 },
  whileHover: { scale: 1.05, y: -5 },
})

// 创建带延迟的动画变体
export const withDelay = (animation: AnimationVariant, delay: number): AnimationVariant => ({
  ...animation,
  transition: { ...animation.transition, delay },
})

// 创建带自定义延迟的淡入动画
export const fadeInWithDelay = (
  delay: number = 0,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 30
): AnimationVariant => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return {
    initial: { opacity: 0, ...directions[direction] },
    whileInView: { opacity: 1, y: 0, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  }
}

// 侧滑进入动画
export const slideIn = (direction: 'left' | 'right' = 'left', distance: number = 30): AnimationVariant => ({
  initial: { opacity: 0, x: direction === 'left' ? -distance : distance },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
})

// 旋转进入动画
export const rotateIn: AnimationVariant = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

// 弹性进入动画
export const bounceIn: AnimationVariant = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 260, damping: 20 },
}
