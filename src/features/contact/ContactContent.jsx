import { motion } from 'framer-motion'
import { useLanguage } from '@/shared/lib/LanguageContext'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-20">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1">
          {/* Hero Section */}
          <motion.div 
            className="flex flex-wrap justify-between gap-3 p-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full flex-col items-center gap-3">
              <p className="text-black dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {t.contactPage.hero.title}
              </p>
              <p className="text-gray-500 dark:text-[#9292c9] text-base md:text-lg font-normal leading-normal max-w-2xl">
                {t.contactPage.hero.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 mt-12 md:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white dark:bg-[#191933]/50 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-[#323267]">
                <motion.h2 
                  className="text-black dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t.contactPage.form.title}
                </motion.h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.nameLabel}</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder={t.contactPage.form.namePlaceholder} 
                        type="text"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.companyLabel}</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder={t.contactPage.form.companyPlaceholder} 
                        type="text"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.emailLabel}</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="name@company.com" 
                        type="email"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.phoneLabel}</p>
                      <motion.input 
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder="(123) 456-7890" 
                        type="tel"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.topicLabel}</p>
                      <motion.select 
                        className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary h-12 placeholder:text-gray-400 dark:placeholder:text-[#9292c9] px-3 text-base font-normal leading-normal"
                        whileFocus={{ scale: 1.01 }}
                      >
                        {t.contactPage.form.topics.map((topic, index) => (
                          <option key={index}>{topic}</option>
                        ))}
                      </motion.select>
                    </label>
                  </div>
                  <div>
                    <label className="flex flex-col">
                      <p className="text-black dark:text-white text-base font-medium leading-normal pb-2">{t.contactPage.form.messageLabel}</p>
                      <motion.textarea 
                        className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#323267] bg-background-light dark:bg-[#191933] focus:border-primary min-h-[120px] placeholder:text-gray-400 dark:placeholder:text-[#9292c9] p-3 text-base font-normal leading-normal" 
                        placeholder={t.contactPage.form.messagePlaceholder}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </label>
                  </div>
                  <div>
                    <motion.button 
                      className="flex w-full md:w-auto min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors" 
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="truncate">{t.contactPage.form.submit}</span>
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  {t.contactPage.info.title}
                </h3>
                <div className="space-y-4">
                  <motion.a 
                    className="flex items-center gap-4 group" 
                    href="mailto:contact@sdhtfz.com"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl">mail</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
                      contact@sdhtfz.com
                    </span>
                  </motion.a>
                  <motion.a 
                    className="flex items-center gap-4 group" 
                    href="tel:+861234567890"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl">call</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors">
                      +86 123-4567-890
                    </span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <h3 className="text-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  {t.contactPage.address.title}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mt-1 flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span dangerouslySetInnerHTML={{ __html: t.contactPage.address.content }} />
                  </p>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div 
                className="w-full h-64 bg-gray-200 dark:bg-[#191933] rounded-xl overflow-hidden border border-gray-200 dark:border-[#323267]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  className="w-full h-full object-cover" 
                  alt="一张风格化的深色主题地图，显示了城市区域中的一个图钉位置。" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKdlsy7BokvtbcGhRuOGaRazfaapEGu63gI4hiNauctZwJIncuaPJJNIXp5GGgQcsaivUJ81t9Z53Sy-idYrqln7LCwFw4M79j4MgyZwKVIn4CsU-Yd-MV3RyXJ40WTcctddgZ4fP0QHOTxAihKDrz13w3vmzfhde4FRDvj-xjI71xpW3Wy0uobkyL4R_4DrLkBaPfa1lnQrjI5bz8EADOEp773vZQXvUsCGUEQxEP6qyMusZADsbWdEYqILW4Myycm7w1iBpIBzMl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}