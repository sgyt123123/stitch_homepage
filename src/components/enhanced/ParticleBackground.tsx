import { useEffect, useRef, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'

// --- 性能优化常量 ---
const MOUSE_INTERACTION_RADIUS = 150
const MOUSE_REPEL_FORCE = 0.1
const MOUSE_FPS_LIMIT = 120 // 鼠标移动节流 FPS
const MOUSE_THROTTLE_INTERVAL = 1000 / MOUSE_FPS_LIMIT

// 粒子生命周期配置
const PARTICLE_BASE_LIFE = 200
const PARTICLE_LIFE_VARIANCE = 300

// 浮动光点配置 - 固定值避免重复计算
const FLOATING_DOTS_CONFIG = [
  { left: 15, top: 25, delay: 0.5, duration: 5.2 },
  { left: 45, top: 65, delay: 1.2, duration: 4.8 },
  { left: 75, top: 35, delay: 0.8, duration: 5.6 },
  { left: 25, top: 85, delay: 1.5, duration: 4.3 },
  { left: 65, top: 15, delay: 0.3, duration: 5.9 },
  { left: 85, top: 55, delay: 1.8, duration: 4.7 },
  { left: 35, top: 45, delay: 0.9, duration: 5.1 },
  { left: 55, top: 75, delay: 1.1, duration: 4.9 },
  { left: 95, top: 25, delay: 0.6, duration: 5.4 },
  { left: 5, top: 55, delay: 1.4, duration: 4.5 },
  { left: 45, top: 95, delay: 0.7, duration: 5.7 },
  { left: 75, top: 65, delay: 1.0, duration: 4.6 },
] as const

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

export interface ParticleBackgroundProps {
  particleCount?: number
  speed?: number
  colors?: string[]
  connectionDistance?: number
  maxSize?: number
  minSize?: number
  className?: string
}

export function ParticleBackground({
  particleCount = 80,
  speed = 1,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'],
  connectionDistance = 120,
  maxSize = 3,
  minSize = 1,
  className = '',
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const lastMoveTimeRef = useRef(0)
  const animateRef = useRef<(() => void) | null>(null)

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }, [])

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    particlesRef.current = []
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)] || '#3b82f6',
        life: 0,
        maxLife: Math.random() * PARTICLE_LIFE_VARIANCE + PARTICLE_BASE_LIFE,
      })
    }
  }, [particleCount, speed, colors, maxSize, minSize])

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    particlesRef.current.forEach((particle) => {
      // 更新位置
      particle.x += particle.vx
      particle.y += particle.vy

      // 边界检查
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // 鼠标交互 - 粒子会被鼠标吸引
      const dx = mousePositionRef.current.x - particle.x
      const dy = mousePositionRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < MOUSE_INTERACTION_RADIUS) {
        const force = 1 - distance / MOUSE_INTERACTION_RADIUS
        particle.vx += (dx / distance) * force * MOUSE_REPEL_FORCE
        particle.vy += (dy / distance) * force * MOUSE_REPEL_FORCE
      }

      // 生命周期
      particle.life++
      if (particle.life > particle.maxLife) {
        // 重新生成粒子
        particle.x = Math.random() * canvas.width
        particle.y = Math.random() * canvas.height
        particle.life = 0
        particle.vx = (Math.random() - 0.5) * speed * 2
        particle.vy = (Math.random() - 0.5) * speed * 2
      }

      // 透明度基于生命周期
      particle.opacity = Math.sin((particle.life / particle.maxLife) * Math.PI) * 0.8 + 0.2
    })
  }, [speed])

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // --- 使用空间网格优化连接绘制（O(n) 复杂度）---
    const grid: Record<string, Particle[]> = {}
    const cellSize = connectionDistance
    const connDistSq = connectionDistance * connectionDistance

    // 第一轮：构建网格并绘制粒子
    particlesRef.current.forEach((particle) => {
      const cellX = Math.floor(particle.x / cellSize)
      const cellY = Math.floor(particle.y / cellSize)
      const key = `${cellX},${cellY}`

      if (!grid[key]) {
        grid[key] = []
      }
      grid[key].push(particle)

      // 绘制粒子
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    // 第二轮：绘制连接线（只检查相邻网格）
    particlesRef.current.forEach((particle) => {
      const cellX = Math.floor(particle.x / cellSize)
      const cellY = Math.floor(particle.y / cellSize)

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          const key = `${cellX + dx},${cellY + dy}`
          if (grid[key]) {
            grid[key].forEach((other) => {
              if (particle === other) return

              const distSq = (particle.x - other.x) ** 2 + (particle.y - other.y) ** 2
              if (distSq < connDistSq) {
                const opacity = (1 - Math.sqrt(distSq) / connectionDistance) * 0.3
                ctx.save()
                ctx.globalAlpha = opacity
                ctx.strokeStyle = particle.color
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(other.x, other.y)
                ctx.stroke()
                ctx.restore()
              }
            })
          }
        }
      }
    })
  }, [connectionDistance])

  const handleResize = useCallback(() => {
    resizeCanvas()
    createParticles()
  }, [resizeCanvas, createParticles])

  // 优化：轻微节流但确保鼠标交互流畅
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now()
    if (now - lastMoveTimeRef.current >= MOUSE_THROTTLE_INTERVAL) {
      // 约120fps的节流，更流畅
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
      lastMoveTimeRef.current = now
    }
  }, [])

  const animate = useCallback(() => {
    updateParticles()
    drawParticles()
    animationRef.current = requestAnimationFrame(() => {
      if (animateRef.current) {
        animateRef.current()
      }
    })
  }, [updateParticles, drawParticles])

  // 存储 animate 函数引用
  useEffect(() => {
    animateRef.current = animate
  }, [animate])

  useEffect(() => {
    resizeCanvas()
    createParticles()
    animationRef.current = requestAnimationFrame(animate)

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [resizeCanvas, createParticles, handleResize, handleMouseMove, animate])

  // 缓存装饰性元素 - 使用常量优化
  const floatingDots = useMemo(() => {
    return FLOATING_DOTS_CONFIG.map((pos, i) => ({
      key: i,
      style: {
        left: `${pos.left}%`,
        top: `${pos.top}%`,
        animationDelay: `${pos.delay}s`,
        animationDuration: `${pos.duration}s`,
      },
    }))
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      {/* 装饰性网格层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      {/* 浮动光点 - 优化：预计算样式 */}
      <div className="absolute inset-0">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.key}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={dot.style}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.7, 1.2, 0.7],
            }}
            transition={{
              duration: parseFloat(dot.style.animationDuration as string),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: parseFloat(dot.style.animationDelay as string),
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ParticleBackground
