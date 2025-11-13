import { createContext, useContext, useState, useRef, useCallback, type ReactNode } from 'react'
import type { NavigationContextValue } from '@/types'

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined)

interface NavigationProviderProps {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const scrollableRef = useRef<{ scrollToSection: (index: number) => void }>(null)

  // ✓ 使用 useCallback 缓存函数，避免子组件不必要的重新渲染
  const scrollToSection = useCallback((sectionIndex: number) => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollToSection(sectionIndex)
    }
  }, [])

  const handleSectionChange = useCallback((sectionIndex: number) => {
    setCurrentSection(sectionIndex)
  }, [])

  const value: NavigationContextValue = {
    currentSection,
    scrollToSection,
    handleSectionChange,
    scrollableRef,
  }

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export function useNavigation(): NavigationContextValue {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
