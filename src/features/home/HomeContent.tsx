import { useLanguage } from '@/shared/lib/LanguageContext'
import { HeroSection } from './components/HeroSection'
import { AboutPreviewSection } from './components/AboutPreviewSection'
import { SolutionsPreviewSection } from './components/SolutionsPreviewSection'
import { PartnerLogo } from './components/PartnerLogo'

interface PartnerLogoType {
  logo: string
  name: string
}

export function HomeContent() {
  const { t } = useLanguage()

  const partnerLogos: PartnerLogoType[] = [
    { logo: '/images/logos/tsinghua-university-1024w.webp', name: '清华大学' },
    { logo: '/images/logos/peking-university-1024w.webp', name: '北京大学' },
    { logo: '/images/logos/fudan-university-1024w.webp', name: '复旦大学' },
    { logo: '/images/logos/shanghai-jiao-tong-university-1024w.webp', name: '上海交通大学' },
    { logo: '/images/logos/beihang-university-1024w.webp', name: '北京航空航天大学' },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <HeroSection t={t} partnerLogos={partnerLogos} PartnerLogo={PartnerLogo} />
      <AboutPreviewSection t={t} />
      <SolutionsPreviewSection t={t} />
    </div>
  )
}
