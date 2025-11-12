import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { useTheme } from '@/shared/lib/ThemeContext'

// 导入各页面的内容组件
import { HomeContent } from '@/features/home/HomeContent'
import { AboutContent } from '@/features/about/AboutContent'
import { SolutionsContent } from '@/features/solutions/SolutionsContent'
import { ContactContent } from '@/features/contact/ContactContent'

export const ScrollablePage = forwardRef(function ScrollablePage({ onSectionChange }, ref) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef(null)
  const sectionRefs = useRef([])
  const observerRef = useRef(null)
  const { t } = useLanguage()
  const { theme } = useTheme()

  const sections = [
    { id: 'home', component: HomeContent, name: t.nav.home },
    { id: 'about', component: AboutContent, name: t.nav.about },
    { id: 'solutions', component: SolutionsContent, name: t.nav.solutions },
    { id: 'contact', component: ContactContent, name: t.nav.contact },
  ]

  // 滚动到指定section - 使用元素实际位置
  const scrollToSection = (index) => {
    if (isScrolling || !sectionRefs.current[index]) return
    
    setIsScrolling(true)
    
    // 使用元素的实际位置
    const targetElement = sectionRefs.current[index]
    const container = containerRef.current
    
    if (container && targetElement) {
      // 计算目标元素相对于容器的位置
      const containerRect = container.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()
      const scrollTop = container.scrollTop
      
      // 计算需要滚动的距离
      const targetScrollTop = scrollTop + (targetRect.top - containerRect.top)
      
      container.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth'
      })
    }
    
    // 防止快速连续滚动
    setTimeout(() => setIsScrolling(false), 800)
  }

  // 暴露方法给父组件
  useImperativeHandle(ref, () => ({
    scrollToSection
  }))

  // 使用 Intersection Observer API 监听section可见性
  useEffect(() => {
    const container = containerRef.current
    if (!container || sectionRefs.current.length === 0) return

    // 清理之前的observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // 创建新的observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return // 在程序化滚动时忽略
        
        // 找到当前最可见的section
        let maxVisibility = 0
        let mostVisibleIndex = currentSection
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisibility) {
            maxVisibility = entry.intersectionRatio
            const index = sectionRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1) {
              mostVisibleIndex = index
            }
          }
        })
        
        // 只有在真正需要更新时才更新状态
        if (mostVisibleIndex !== currentSection) {
          setCurrentSection(mostVisibleIndex)
          onSectionChange?.(mostVisibleIndex)
        }
      },
      {
        root: container,
        threshold: [0.1, 0.5, 0.9], // 多个阈值以获得更精确的检测
        rootMargin: '-10% 0px -10% 0px' // 减少边缘误判
      }
    )

    // 观察所有section
    sectionRefs.current.forEach((sectionRef) => {
      if (sectionRef) {
        observerRef.current.observe(sectionRef)
      }
    })

    // 清理函数
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [isScrolling, currentSection, onSectionChange])

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
  }, [currentSection, sections.length])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 滚动容器 - 移除CSS scroll-snap */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-auto scroll-smooth"
      >
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
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="relative group"
          >
            <motion.button
              onClick={() => scrollToSection(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-500 relative ${
                currentSection === index
                  ? 'bg-primary border-primary scale-125 shadow-lg shadow-primary/30'
                  : 'bg-transparent border-gray-400 dark:border-white/40 hover:border-primary hover:scale-110'
              }`}
              whileHover={{ scale: currentSection === index ? 1.3 : 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={section.name}
              disabled={isScrolling}
            >
              {currentSection === index && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
            
            {/* 悬浮标签 */}
            <motion.div
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {section.name}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* 滚动提示 */}
      <AnimatePresence>
        {currentSection === 0 && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <span className="text-sm font-medium">向下滚动探索更多</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 进度指示器 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  )
})