import { useMemo, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/shared/lib/ThemeContext'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { useNavigation } from '@/shared/lib/NavigationContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Header = memo(function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()
  const { currentSection, scrollToSection } = useNavigation()

  // ✓ 使用 useMemo 缓存导航项，避免每次渲染都重新创建
  const navItems = useMemo(
    () => [
      { section: 0, label: t.nav.home },
      { section: 1, label: t.nav.about },
      { section: 2, label: t.nav.solutions },
      { section: 3, label: t.nav.contact },
    ],
    [t.nav]
  )

  // ✓ 使用 useCallback 缓存函数，避免子组件不必要的重新渲染
  const isActiveSection = useCallback((section) => currentSection === section, [currentSection])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection(0)}
          className="flex flex-shrink-0 items-center gap-4 text-foreground"
        >
          <motion.div
            className="h-8 w-8 text-primary"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
          <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] whitespace-nowrap hidden sm:block">
            {t.brand.name}
          </h2>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.section}
              className={`text-sm font-medium leading-normal transition-colors relative ${
                isActiveSection(item.section)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => scrollToSection(item.section)}
            >
              {item.label}
              {isActiveSection(item.section) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={toggleTheme}>
            <span className="material-symbols-outlined text-lg">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </Button>
          <Button
            variant="ghost"
            className="h-10 px-3 gap-2 hidden lg:flex"
            onClick={toggleLanguage}
          >
            <span className="material-symbols-outlined text-lg">translate</span>
          </Button>
          <Button className="hidden sm:flex">{t.nav.login}</Button>

          {/* Mobile Menu - 简化版 */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="material-symbols-outlined text-lg">menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <nav className="flex flex-col gap-2 mt-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`py-3 px-4 text-base font-medium rounded-lg transition-colors text-left ${
                      isActiveSection(item.section)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                    onClick={() => scrollToSection(item.section)}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    <span className="material-symbols-outlined">dark_mode</span>
                  </Button>
                  <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                    <span className="material-symbols-outlined">translate</span>
                  </Button>
                  <Button className="flex-1">{t.nav.login}</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
})
