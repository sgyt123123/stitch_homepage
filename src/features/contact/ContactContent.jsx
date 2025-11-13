import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/shared/lib/LanguageContext'

// 联系信息项组件
const ContactInfoItem = ({ icon, href, children, delay }) => (
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

export function ContactContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background pt-20">
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
              <p className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {t.contactPage.hero.title}
              </p>
              <p className="text-muted-foreground text-base md:text-lg font-normal leading-normal max-w-2xl">
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-[22px]">
                    {t.contactPage.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contactPage.form.nameLabel}</Label>
                        <Input
                          id="name"
                          placeholder={t.contactPage.form.namePlaceholder}
                          type="text"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.contactPage.form.companyLabel}</Label>
                        <Input
                          id="company"
                          placeholder={t.contactPage.form.companyPlaceholder}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contactPage.form.emailLabel}</Label>
                        <Input
                          id="email"
                          placeholder="name@company.com"
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contactPage.form.phoneLabel}</Label>
                        <Input
                          id="phone"
                          placeholder="(123) 456-7890"
                          type="tel"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topic">{t.contactPage.form.topicLabel}</Label>
                      <Select>
                        <SelectTrigger id="topic">
                          <SelectValue placeholder={t.contactPage.form.topics[0]} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.contactPage.form.topics.map((topic, index) => (
                            <SelectItem key={index} value={topic}>
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t.contactPage.form.messageLabel}</Label>
                      <Textarea
                        id="message"
                        placeholder={t.contactPage.form.messagePlaceholder}
                        className="min-h-[120px]"
                      />
                    </div>
                    <div>
                      <Button
                        className="w-full md:w-auto min-w-[120px]"
                        type="submit"
                        size="lg"
                      >
                        {t.contactPage.form.submit}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
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
                <h3 className="text-foreground text-xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  {t.contactPage.info.title}
                </h3>
                <div className="space-y-4">
                  <ContactInfoItem
                    icon="mail"
                    href="mailto:contact@sdhtfz.com"
                    delay={0.7}
                  >
                    contact@sdhtfz.com
                  </ContactInfoItem>
                  <ContactInfoItem
                    icon="call"
                    href="tel:+861234567890"
                    delay={0.8}
                  >
                    +86 123-4567-890
                  </ContactInfoItem>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
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
