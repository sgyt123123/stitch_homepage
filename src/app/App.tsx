import { ThemeProvider } from '@/shared/lib/ThemeContext'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { NavigationProvider } from '@/shared/lib/NavigationContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Header } from '@/components/Header'
import { ScrollablePage } from '@/features/scroll/ScrollablePage'
import { ParticleBackground } from '@/components/enhanced'

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <NavigationProvider>
            <div className="relative w-full min-h-screen bg-background font-display text-foreground transition-colors">
              {/* 全局粒子背景 - 所有页面共享 */}
              <ParticleBackground
                particleCount={85}
                speed={0.6}
                colors={['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4', '#10b981']}
                connectionDistance={150}
                maxSize={3}
                minSize={1}
                className="fixed inset-0 z-0"
              />

              {/* 页面内容 */}
              <div className="relative z-10">
                <Header />
                <ScrollablePage />
              </div>
            </div>
          </NavigationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
