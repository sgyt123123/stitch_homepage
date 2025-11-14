/**
 * 统一的动画变量库
 * 集中管理所有Framer Motion动画配置，提高代码复用性
 */
import type { Variants } from 'framer-motion'

// 基础淡入动画（向上）
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
}

// 基础淡入动画（向上，较大距离）
export const fadeInUpLarge: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
}

// 基础淡入动画（向下）
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
}

// 基础淡入动画（向左）
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
}

// 基础淡入动画（向右）
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
}

// 简单淡入
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
}

// 交错容器
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// 交错容器（带延迟）
export const staggerContainerWithDelay: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

// 悬停缩放效果
export const hoverScale: Variants = {
  whileHover: { scale: 1.05 },
}

// 悬停上移效果
export const hoverLift: Variants = {
  whileHover: { y: -8 },
}

// 悬停轻微上移
export const hoverLiftSmall: Variants = {
  whileHover: { y: -5 },
}

// 卡片悬停效果
export const cardHover: Variants = {
  whileHover: { y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' },
}

// 点击缩放效果
export const tapScale: Variants = {
  whileTap: { scale: 0.98 },
}

// 页面过渡
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

// 缩放淡入
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
}

// Logo动画（带缩放）
export const logoAnimation = (_index: number): Variants => ({
  initial: { opacity: 0, scale: 0.8, y: 20 },
  whileInView: { opacity: 0.7, scale: 1, y: 0 },
  whileHover: { scale: 1.05, y: -5 },
})

// 创建带自定义延迟的淡入动画
export const fadeInWithDelay = (
  _delay: number = 0,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 30
): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return {
    initial: { opacity: 0, ...directions[direction] },
    whileInView: { opacity: 1, y: 0, x: 0 },
  }
}

// 侧滑进入动画
export const slideIn = (direction: 'left' | 'right' = 'left', distance: number = 30): Variants => ({
  initial: { opacity: 0, x: direction === 'left' ? -distance : distance },
  whileInView: { opacity: 1, x: 0 },
})

// 旋转进入动画
export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
}

// 弹性进入动画
export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
}
