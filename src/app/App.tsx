import { ThemeProvider } from '@/shared/lib/ThemeContext'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { NavigationProvider } from '@/shared/lib/NavigationContext'
import { Header } from '@/components/Header'
import { ScrollablePage } from '@/features/scroll/ScrollablePage'

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationProvider>
          <div className="relative w-full min-h-screen bg-background font-display text-foreground transition-colors">
            <Header />
            <ScrollablePage />
          </div>
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
