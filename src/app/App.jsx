import { useState, useRef } from 'react'
import { ThemeProvider } from '@/shared/lib/ThemeContext'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { Header } from '@/shared/components/Header'
import { ScrollablePage } from '@/features/scroll/ScrollablePage'

export function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const scrollableRef = useRef(null)

  const handleNavigate = (sectionIndex) => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollToSection(sectionIndex)
    }
  }

  const handleSectionChange = (sectionIndex) => {
    setCurrentSection(sectionIndex)
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative w-full min-h-screen bg-background font-display text-foreground transition-colors">
          <Header 
            currentSection={currentSection} 
            onNavigate={handleNavigate}
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
