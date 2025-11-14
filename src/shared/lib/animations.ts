/**
 * Stitch 品牌动画系统
 * 基于 Material Design 3 和 shadcn/ui 设计原则
 * 遵循组合优于继承的理念
 */
import type { Variants } from 'framer-motion'

/**
 * 核心缓动曲线
 * 基于 Material Design 3 动画规范
 */
export const easings = {
  /** 标准曲线：通用场景 */
  standard: [0.4, 0.0, 0.2, 1] as const,

  /** 加速曲线：元素离开屏幕 */
  accelerate: [0.4, 0.0, 1, 1] as const,

  /** 减速曲线：元素进入屏幕（推荐用于所有入场） */
  decelerate: [0.0, 0.0, 0.2, 1] as const,

  /** 强调曲线：重要元素（CTA按钮、关键卡片） */
  emphasized: [0.2, 0.0, 0, 1] as const,

  /** 弹性曲线：有趣的交互（Logo、图标） */
  bounce: [0.68, -0.55, 0.265, 1.55] as const,

  /** 平滑曲线：优雅过渡 */
  smooth: [0.22, 1, 0.36, 1] as const,
}

/**
 * 统一时长标准
 */
export const durations = {
  instant: 0.1,   // 100ms - 即时反馈
  fast: 0.2,      // 200ms - 快速交互
  normal: 0.3,    // 300ms - 标准过渡
  slow: 0.5,      // 500ms - 慢速展开
  slower: 0.8,    // 800ms - 戏剧性入场
} as const

/**
 * Spring 物理配置
 */
export const springs = {
  gentle: { type: "spring" as const, stiffness: 300, damping: 30 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 17 },
  bouncy: { type: "spring" as const, stiffness: 500, damping: 25 },
} as const

/**
 * ============================================
 * 基础动画变体
 * ============================================
 */

/** 淡入（向上） */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/** 淡入（向上，大距离 - 用于标题） */
export const fadeInUpLarge: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/** 淡入（向下） */
export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/** 淡入（向左） */
export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/** 淡入（向右） */
export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/** 简单淡入 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: durations.slower, ease: easings.decelerate }
}

/**
 * ============================================
 * 容器动画（用于序列编排）
 * ============================================
 */

/** 交错容器 */
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** 交错容器（带延迟） */
export const staggerContainerWithDelay: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

/**
 * ============================================
 * 微交互动画（用于组合到组件中）
 * ============================================
 */

/** 悬停缩放 */
export const hoverScale: Variants = {
  whileHover: { scale: 1.05 },
}

/** 悬停上移 */
export const hoverLift: Variants = {
  whileHover: { y: -8 },
}

/** 悬停轻微上移 */
export const hoverLiftSmall: Variants = {
  whileHover: { y: -5 },
}

/** 卡片悬停效果（组合效果） */
export const cardHover: Variants = {
  whileHover: {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
  },
}

/** 点击缩放 */
export const tapScale: Variants = {
  whileTap: { scale: 0.98 },
}

/**
 * ============================================
 * 页面级动画
 * ============================================
 */

/** 页面过渡 */
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

/** 缩放淡入 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
}

/**
 * ============================================
 * 动态动画工厂函数
 * ============================================
 */

/** Logo 动画（带索引延迟） */
export const logoAnimation = (_index: number): Variants => ({
  initial: { opacity: 0, scale: 0.8, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  whileHover: { scale: 1.05, y: -5 },
})

/** 自定义淡入动画（带方向和延迟） */
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

/** 侧滑进入动画 */
export const slideIn = (
  direction: 'left' | 'right' = 'left',
  distance: number = 30
): Variants => ({
  initial: { opacity: 0, x: direction === 'left' ? -distance : distance },
  whileInView: { opacity: 1, x: 0 },
})

/** 旋转进入动画 */
export const rotateIn: Variants = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
}

/** 弹性进入动画 */
export const bounceIn: Variants = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
}

/**
 * ============================================
 * 组合工具函数
 * ============================================
 */

/**
 * 合并多个动画变体
 * 用于组合多个动画效果
 */
export const mergeVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({
    ...acc,
    ...variant,
  }), {} as Variants)
}


