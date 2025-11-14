import React from 'react'

// 通用类型定义
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// 导航相关类型
export interface NavigationSection {
  id: string
  component: React.ComponentType
  name: string
}

export interface NavigationContextValue {
  currentSection: number
  scrollToSection: (index: number) => void
  handleSectionChange: (index: number) => void
  scrollableRef: React.RefObject<{ scrollToSection: (index: number) => void } | null>
}

// 主题相关类型
export type Theme = 'light' | 'dark'

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

// 语言相关类型
export type Language = 'zh' | 'en'

export interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
  t: LocaleData
}

// 本地化数据接口
export type LocaleData = Record<string, any>

// 页面布局类型
export interface LayoutData {
  navigation: NavigationSection[]
}

// 滚动相关类型
export interface ScrollContextValue {
  currentSection: number
  scrollToSection: (index: number) => void
  handleSectionChange: (index: number) => void
  scrollableRef: React.RefObject<{ scrollToSection: (index: number) => void } | null>
}

// UI 组件类型
export interface UIComponentProps {
  className?: string
  children?: React.ReactNode
}

// Hero 部分类型
export interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundVideo?: string
  backgroundImage?: string
}

// 特性卡片类型
export interface FeatureCardProps {
  icon: string
  title: string
  description: string
  index: number
}

// 关于我们部分类型
export interface AboutSectionProps {
  title: string
  description: string
  stats: {
    label: string
    value: string
  }[]
}

// 合作伙伴类型
export interface PartnerLogo {
  logo: string
  universityName: string
}

export interface PartnerLogoProps {
  logo: string
  index: number
  universityName: string
}

export interface ContactInfoItemProps {
  icon: string
  href: string
  children: React.ReactNode
  delay: number
}

export interface SolutionCardProps {
  item: {
    icon: string
    title: string
    desc: string
  }
  index: number
}

export interface NavigationDotProps {
  section: NavigationSection
  index: number
  currentSection: number
  isScrolling: boolean
  onClick: () => void
}

export type ReactComponent = React.ComponentType<Record<string, unknown>>

// 产品信息类型
export interface Product {
  title: string
  desc: string
  learnMore: string
  image: string
  hasAIBadge?: boolean
}
