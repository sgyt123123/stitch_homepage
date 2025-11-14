// locales模块 - 统一类型定义和代码
import type { LocaleData } from '@/types'
import zh from './zh'
import en from './en'

// 类型定义
export interface Translations {
  zh: LocaleData
  en: LocaleData
}

// 导出时使用双重类型断言确保兼容性
export const translations = {
  zh: zh as unknown as LocaleData,
  en: en as unknown as LocaleData,
} as Translations

export { zh, en }

// 默认导出
export default translations
