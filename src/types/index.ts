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
  scrollableRef: React.RefObject<{ scrollToSection: (index: number) => void }>
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

// 多语言数据结构
export interface LocaleData {
  brand: {
    name: string
    slogan: string
  }
  nav: {
    home: string
    about: string
    solutions: string
    contact: string
    login: string
  }
  hero: {
    title: string
    subtitle: string
    demo: string
    video: string
    partners: string
    scrollHint: string
  }
  aboutPreview: {
    subtitle: string
    title: string
    description: string
    items: Array<{
      icon: string
      text: string
    }>
  }
  solutions: {
    subtitle: string
    title: string
    cards: Array<{
      icon: string
      title: string
      desc: string
    }>
  }
  aboutPage: {
    hero: {
      title: string
      subtitle: string
    }
    story: {
      subtitle: string
      title: string
      paragraphs: string[]
    }
    values: {
      subtitle: string
      title: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    team: {
      subtitle: string
      title: string
      members: Array<{
        name: string
        role: string
        bio: string
        avatar: string
      }>
    }
  }
  solutionsPage: {
    hero: {
      title: string
      subtitle: string
    }
    categories: Array<{
      icon: string
      title: string
      description: string
      features: string[]
    }>
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
  contactPage: {
    hero: {
      title: string
      subtitle: string
    }
    form: {
      title: string
      nameLabel: string
      namePlaceholder: string
      companyLabel: string
      companyPlaceholder: string
      emailLabel: string
      phoneLabel: string
      topicLabel: string
      topics: string[]
      messageLabel: string
      messagePlaceholder: string
      submit: string
    }
    info: {
      title: string
    }
    address: {
      title: string
      content: string
    }
  }
  about: {
    hero: {
      title: string
      subtitle: string
    }
    story: {
      subtitle: string
      title: string
      paragraphs: string[]
    }
    values: {
      subtitle: string
      title: string
      items: Array<{
        icon: string
        title: string
        description: string
      }>
    }
    team: {
      subtitle: string
      title: string
      members: Array<{
        name: string
        role: string
        bio: string
        avatar: string
      }>
    }
  }
}

// 动画相关类型
export interface AnimationVariant {
  initial?: Record<string, string | number>
  animate?: Record<string, string | number | object>
  whileInView?: Record<string, string | number>
  whileHover?: Record<string, string | number>
  whileTap?: Record<string, string | number>
  viewport?: Record<string, string | number | boolean>
  transition?: Record<string, string | number | boolean | object>
  exit?: Record<string, string | number>
  [key: string]: string | number | boolean | object | undefined
}

// 机器人场景类型
export interface RobotScene {
  id: string
  name: string
  url: string
  description: string
  category: string
}

// 组件Props类型
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
