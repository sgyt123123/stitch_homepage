import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { fadeInLeft } from '@/shared/lib/animations'

export function ContactForm({ t }: { t: any }) {
  return (
    <motion.div
      className="lg:col-span-2"
      {...fadeInLeft}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-[22px]">{t.contactPage.form.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t.contactPage.form.nameLabel}</Label>
                <Input id="name" placeholder={t.contactPage.form.namePlaceholder} type="text" />
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
                <Input id="email" placeholder="name@company.com" type="email" />
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
                  {t.contactPage.form.topics.map((topic: any, index: number) => (
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
              <Button className="w-full md:w-auto min-w-[120px]" type="submit" size="lg">
                {t.contactPage.form.submit}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
