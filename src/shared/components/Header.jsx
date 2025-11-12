import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/shared/lib/ThemeContext'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { Button } from './Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/solutions', label: t.nav.solutions },
    { path: '/contact', label: t.nav.contact },
  ]

  const isActivePath = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-shrink-0 items-center gap-4 text-gray-900 dark:text-white">
          <motion.div
            className="h-8 w-8 text-primary"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor" />
            </svg>
          </motion.div>
          <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] whitespace-nowrap hidden sm:block">
            山东菏投科技发展集团有限公司
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              className={`text-sm font-medium leading-normal transition-colors relative ${
                isActivePath(item.path) ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white'
              }`}
              to={item.path}
            >
              {item.label}
              {isActivePath(item.path) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            onClick={toggleTheme}
          >
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
            <span>{language === 'zh' ? '中文 / EN' : 'EN / 中文'}</span>
          </Button>
          <Button className="hidden sm:flex">{t.nav.login}</Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-lg">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-background-light dark:bg-background-dark"
          >
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActivePath(item.path) ? 'text-primary' : 'text-gray-600 dark:text-white/80'
                    }`}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  <span className="material-symbols-outlined text-lg">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                </Button>
                <Button variant="ghost" className="flex-1" onClick={toggleLanguage}>
                  <span className="material-symbols-outlined text-lg">translate</span>
                  <span>{language === 'zh' ? '中文 / EN' : 'EN / 中文'}</span>
                </Button>
                <Button className="flex-1">{t.nav.login}</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
