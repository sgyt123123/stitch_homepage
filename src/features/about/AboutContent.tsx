import { motion } from 'framer-motion'
import { AnimatedCard, CardContent } from '@/components/enhanced'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useLanguage } from '@/shared/lib/LanguageContext'
import { fadeInUp } from '@/shared/lib/animations'

// 时间线项组件
const TimelineItem = ({ index, isRight }: { index: number; isRight: boolean }) => {
  const { t } = useLanguage()
  const timelineData = t.about.journey?.timeline?.[index]

  return (
    <motion.div
      className="mb-8 flex items-center w-full relative"
      initial={{ opacity: 0, x: isRight ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
    >
      {/* 数字圆圈 - 绝对定位在中间 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center bg-primary shadow-xl w-8 h-8 rounded-full">
        <span className="font-semibold text-sm text-primary-foreground">{index + 1}</span>
      </div>

      {/* 卡片 - 根据方向靠左或靠右 */}
      <AnimatedCard
        withSpotlight
        withGlow
        className={`w-5/12 hover:shadow-lg transition-shadow duration-500 border-border ${isRight ? 'ml-auto' : 'mr-auto'}`}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{timelineData?.year}</Badge>
            <h3 className="font-bold text-foreground text-lg">{timelineData?.title}</h3>
          </div>
          <p className="text-sm leading-snug tracking-wide text-muted-foreground">
            {timelineData?.desc}
          </p>
        </CardContent>
      </AnimatedCard>
    </motion.div>
  )
}

// 团队成员卡片组件
const TeamMember = ({
  member,
  index,
}: {
  member: { name: string; role: string; image: string }
  index: number
}) => {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.1 * (index + 1) }}
      whileHover={{ y: -10 }}
    >
      <Avatar className="w-32 h-32 mb-4 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all">
        <AvatarImage src={member.image} alt={`Photo of ${member.name}, ${member.role}`} />
        <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
      <Badge variant="outline" className="mt-2">
        {member.role}
      </Badge>
    </motion.div>
  )
}

export function AboutContent() {
  const { t } = useLanguage()

  // 团队成员数据
  const teamMembers = [
    {
      name: t.about.team.members?.[0]?.name || '',
      role: t.about.team.members?.[0]?.role || '',
      image: '/images/team-wang-hao.jpg',
    },
    {
      name: t.about.team.members?.[1]?.name || '',
      role: t.about.team.members?.[1]?.role || '',
      image: '/images/team-li-wei.jpg',
    },
    {
      name: t.about.team.members?.[2]?.name || '',
      role: t.about.team.members?.[2]?.role || '',
      image: '/images/team-zhang-min.jpg',
    },
    {
      name: t.about.team.members?.[3]?.name || '',
      role: t.about.team.members?.[3]?.role || '',
      image: '/images/team-chen-lei.jpg',
    },
  ]

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex min-h-[50vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(16, 16, 34, 0.8) 0%, rgba(16, 16, 34, 0.9) 100%), url("/images/hero-background.jpg")',
          }}
        >
          <motion.div
            className="flex flex-col gap-4 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
              {t.about.hero.title}
            </h1>
            <h2 className="text-gray-300 text-base font-normal leading-normal md:text-xl">
              {t.about.hero.subtitle}
            </h2>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Mission Section */}
        <motion.section className="mb-20 sm:mb-32" {...fadeInUp}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-foreground text-2xl sm:text-3xl font-bold leading-tight tracking-tight px-4 pb-4">
              {t.about.mission?.title || ''}
            </h2>
            <p className="text-muted-foreground text-base font-normal leading-relaxed pb-3 pt-1 px-4">
              {t.about.mission?.description || ''}
            </p>
          </div>
          <motion.div
            className="max-w-4xl mx-auto mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <blockquote className="border-l-4 border-primary pl-4 py-2">
              <p className="text-foreground tracking-tight text-2xl sm:text-4xl font-bold leading-tight">
                &ldquo;{t.about.mission?.quote || ''}&rdquo;
              </p>
              <footer className="text-center mt-4 text-muted-foreground">
                - {t.about.mission?.author || ''}
              </footer>
            </blockquote>
          </motion.div>
        </motion.section>

        {/* Journey Timeline Section */}
        <motion.section
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-center mb-12 sm:mb-16">
            {t.about.journey?.title || ''}
          </h2>
          <div className="relative wrap overflow-hidden p-4 sm:p-10 h-full">
            <div
              className="absolute border-2 border-border h-full"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            />

            {[0, 1, 2, 3].map((index) => (
              <TimelineItem key={index} index={index} isRight={index % 2 === 0} />
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-foreground text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              {t.about.team.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              {t.about.team.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
