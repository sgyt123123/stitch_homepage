import { useState, useRef } from 'react'
import { ThemeProvider } from '@/shared/lib/ThemeContext'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { Header } from '@/shared/components/Header'
import { ScrollablePage } from '@/features/scroll/ScrollablePage'
import { DemoPage } from '@/features/demo/DemoPage'

export function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showDemo, setShowDemo] = useState(false)
  const scrollableRef = useRef(null)

  const handleNavigate = (sectionIndex) => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollToSection(sectionIndex)
    }
  }

  const handleSectionChange = (sectionIndex) => {
    setCurrentSection(sectionIndex)
  }

  const handleNavigateToDemo = () => {
    setShowDemo(true)
  }

  const handleBackToMain = () => {
    setShowDemo(false)
  }

  // 如果显示演示页面，只渲染演示页面和头部
  if (showDemo) {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <div className="relative w-full min-h-screen">
            <DemoPage onBack={handleBackToMain} />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative w-full min-h-screen bg-background font-display text-foreground transition-colors">
          <Header
            currentSection={currentSection}
            onNavigate={handleNavigate}
            onNavigateToDemo={handleNavigateToDemo}
          />
          <ScrollablePage
            ref={scrollableRef}
            onSectionChange={handleSectionChange}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
