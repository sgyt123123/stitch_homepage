import { motion } from 'framer-motion'
import { AnimatedButton } from '@/components/enhanced'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fadeInLeft, durations } from '@/shared/lib/animations'
import type { LocaleData } from '@/types'

export function ContactForm({ t }: { t: LocaleData }) {
  return (
    <motion.div
      className="lg:col-span-2"
      {...fadeInLeft}
      transition={{ duration: durations.slow, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">mail</span>
            {t.contactPage.form.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  {t.contactPage.form.nameLabel}
                  <span className="text-destructive text-sm">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder={t.contactPage.form.namePlaceholder}
                  type="text"
                  required
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
                <Label htmlFor="email">
                  {t.contactPage.form.emailLabel}
                  <span className="text-destructive text-sm">*</span>
                </Label>
                <Input id="email" placeholder="name@company.com" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t.contactPage.form.phoneLabel}</Label>
                <Input id="phone" placeholder="(123) 456-7890" type="tel" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic">{t.contactPage.form.topicLabel}</Label>
              <Select>
                <SelectTrigger id="topic">
                  <SelectValue placeholder={t.contactPage.form.topics[0]} />
                </SelectTrigger>
                <SelectContent>
                  {t.contactPage.form.topics.map((topic: string, index: number) => (
                    <SelectItem key={index} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-1">
                {t.contactPage.form.messageLabel}
                <span className="text-destructive text-sm">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder={t.contactPage.form.messagePlaceholder}
                className="min-h-[120px]"
                required
              />
            </div>

            <div>
              <AnimatedButton
                className="w-full md:w-auto min-w-[160px]"
                type="submit"
                size="lg"
                withShimmer
              >
                <span className="material-symbols-outlined">send</span>
                {t.contactPage.form.submit}
              </AnimatedButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
