import { motion } from 'framer-motion'
import { fadeInRight, fadeInUp, scaleIn } from '@/shared/lib/animations'
import { ContactInfoItem } from './ContactInfoItem'

export function ContactInfoSection({ t }) {
  return (
    <motion.div
      className="lg:col-span-1 space-y-8"
      {...fadeInRight}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {/* Contact Information */}
      <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.6 }}>
        <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
          {t.contactPage.info.title}
        </h3>
        <div className="space-y-4">
          <ContactInfoItem icon="mail" href="mailto:contact@sdhtfz.com" delay={0.7}>
            contact@sdhtfz.com
          </ContactInfoItem>
          <ContactInfoItem icon="call" href="tel:+861234567890" delay={0.8}>
            +86 123-4567-890
          </ContactInfoItem>
        </div>
      </motion.div>

      {/* Address */}
      <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.9 }}>
        <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
          {t.contactPage.address.title}
        </h3>
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary mt-1 flex-shrink-0">
            <span className="material-symbols-outlined text-xl">location_on</span>
          </div>
          <p className="text-muted-foreground">
            <span dangerouslySetInnerHTML={{ __html: t.contactPage.address.content }} />
          </p>
        </div>
      </motion.div>

      {/* Map */}
      <motion.div
        className="w-full h-64 bg-muted rounded-xl overflow-hidden border border-border"
        {...scaleIn}
        transition={{ duration: 0.6, delay: 1.0 }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          className="w-full h-full object-cover"
          alt="一张风格化的深色主题地图，显示了城市区域中的一个图钉位置。"
          src="/assets/images/google_avatar.jpg"
        />
      </motion.div>
    </motion.div>
  )
}
