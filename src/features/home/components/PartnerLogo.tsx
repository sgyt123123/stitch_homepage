import { motion } from 'framer-motion'
import { logoAnimation } from '@/shared/lib/animations'
import type { PartnerLogoProps } from '@/types'

export function PartnerLogo({ logo, index, universityName }: PartnerLogoProps) {
  return (
    <motion.div className="group relative" {...logoAnimation(index)}>
      {/* Logo容器背景 */}
      <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-28 w-32 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:border-primary/30">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Logo图片 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={logo}
          alt={universityName}
          className="relative z-10 h-20 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer pointer-events-auto"
        />
      </div>

      {/* 悬浮指示器 */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 pointer-events-none" />

      {/* 悬浮时显示大学名称 */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-50">
        <div className="bg-popover text-popover-foreground text-xs font-medium px-3 py-1.5 rounded-lg shadow-xl border border-border whitespace-nowrap">
          {universityName}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border rotate-45" />
        </div>
      </div>
    </motion.div>
  )
}
