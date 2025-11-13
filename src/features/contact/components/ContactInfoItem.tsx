import { motion } from 'framer-motion'
import type { ContactInfoItemProps } from '@/types'

export function ContactInfoItem({ icon, href, children, delay }: ContactInfoItemProps) {
  return (
    <motion.a
      className="flex items-center gap-4 group"
      href={href}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ x: 5 }}
    >
      <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-xl">{icon}</span>
      </div>
      <span className="text-muted-foreground group-hover:text-primary transition-colors">
        {children}
      </span>
    </motion.a>
  )
}
