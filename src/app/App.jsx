import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from '@/shared/lib/ThemeContext'
import { LanguageProvider } from '@/shared/lib/LanguageContext'
import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { HomePage } from '@/features/home/HomePage'
import { AboutPage } from '@/features/about/AboutPage'
import { ContactPage } from '@/features/contact/ContactPage'
import { SolutionsPage } from '@/features/solutions/SolutionsPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="relative w-full min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white transition-colors">
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
