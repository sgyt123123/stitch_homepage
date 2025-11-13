import { useState, useEffect, useRef, useCallback, memo, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { useNavigation } from '@/shared/lib/NavigationContext'

// Import page content components
import { HomeContent } from '@/features/home/HomeContent'
import { AboutContent } from '@/features/about/AboutContent'
import { SolutionsContent } from '@/features/solutions/SolutionsContent'
import { ContactContent } from '@/features/contact/ContactContent'

// ✓ 使用 memo 优化导航指示器组件，避免不必要的重新渲染
const NavigationDot = memo(function NavigationDot({
  section,
  index,
  currentSection,
  isScrolling,
  onClick,
}) {
  const isActive = currentSection === index

  return (
    <motion.div className="relative group">
      <motion.button
        onClick={onClick}
        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 relative ${
          isActive
            ? 'bg-primary border-primary scale-125 shadow-lg shadow-primary/50'
            : 'bg-transparent border-muted-foreground/40 hover:border-primary hover:scale-110'
        }`}
        whileHover={{ scale: isActive ? 1.4 : 1.3 }}
        whileTap={{ scale: 0.9 }}
        title={section.name}
        disabled={isScrolling}
        aria-label={`Navigate to ${section.name}`}
      >
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            layoutId="activeIndicator"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>

      {/* 悬浮标签 */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-popover text-popover-foreground border border-border px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none shadow-lg"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {section.name}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-popover border-l border-b border-border rotate-45" />
      </motion.div>
    </motion.div>
  )
})

// 滚动提示组件
const ScrollHint = ({ t }) => (
  <motion.div
    className="fixed bottom-8 left-0 right-0 z-40 flex flex-col items-center gap-2 mx-auto w-fit"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6, delay: 2 }}
  >
    <Badge variant="secondary" className="text-xs">
      {t.hero.scrollHint}
    </Badge>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center bg-background/50 backdrop-blur-sm"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-1 h-3 bg-primary rounded-full mt-2"
      />
    </motion.div>
  </motion.div>
)

export function ScrollablePage() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef(null)
  const sectionRefs = useRef([])
  const observerRef = useRef(null)
  const { t } = useLanguage()
  const { handleSectionChange, scrollableRef } = useNavigation()

  const sections = [
    { id: 'home', component: HomeContent, name: t.nav.home },
    { id: 'about', component: AboutContent, name: t.nav.about },
    { id: 'solutions', component: SolutionsContent, name: t.nav.solutions },
    { id: 'contact', component: ContactContent, name: t.nav.contact },
  ]

  // 滚动到指定section
  const scrollToSection = useCallback(
    (index) => {
      if (isScrolling || !sectionRefs.current[index]) return

      setIsScrolling(true)

      const targetElement = sectionRefs.current[index]
      const container = containerRef.current

      if (container && targetElement) {
        const containerRect = container.getBoundingClientRect()
        const targetRect = targetElement.getBoundingClientRect()
        const scrollTop = container.scrollTop

        const targetScrollTop = scrollTop + (targetRect.top - containerRect.top)

        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth',
        })
      }

      setTimeout(() => setIsScrolling(false), 800)
    },
    [isScrolling]
  )

  // 暴露方法给NavigationContext
  useImperativeHandle(scrollableRef, () => ({
    scrollToSection,
  }))

  // 使用 Intersection Observer API 监听section可见性
  useEffect(() => {
    const container = containerRef.current
    if (!container || sectionRefs.current.length === 0) return

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return

        let maxVisibility = 0
        let mostVisibleIndex = currentSection

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              mostVisibleIndex = index
            }
          }
        })

        if (mostVisibleIndex !== currentSection) {
          setCurrentSection(mostVisibleIndex)
          handleSectionChange(mostVisibleIndex)
        }
      },
      {
        root: container,
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '-10% 0px -10% 0px',
      }
    )

    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef) {
        observerRef.current.observe(sectionRef)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isScrolling, currentSection, handleSectionChange])

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault()
        scrollToSection(currentSection + 1)
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault()
        scrollToSection(currentSection - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSection, sections.length, scrollToSection])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 滚动容器 */}
      <div ref={containerRef} className="w-full h-full overflow-y-auto scroll-smooth">
        {sections.map((section, index) => {
          const Component = section.component
          return (
            <section
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full min-h-screen flex-shrink-0 relative"
            >
              <Component />
            </section>
          )
        })}
      </div>

      {/* 右侧导航指示器 */}
      <motion.nav
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        aria-label="Page navigation"
      >
        {sections.map((section, index) => (
          <NavigationDot
            key={section.id}
            section={section}
            index={index}
            currentSection={currentSection}
            isScrolling={isScrolling}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </motion.nav>

      {/* 滚动提示 */}
      <AnimatePresence>{currentSection === 0 && <ScrollHint t={t} />}</AnimatePresence>

      {/* 进度指示器 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-primary/80"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
