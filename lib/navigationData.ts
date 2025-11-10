import { strings } from '@/lib/strings'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { CompanyDiscoverySection } from '@/components/sections/CompanyDiscoverySection'
import { CvPreviewSection } from '@/components/sections/CvPreviewSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProcessSection } from '@/components/sections/ProcessSection'

/**
 * Navigation data for the application,
 * including labels, hrefs, and corresponding components.
 */
export const navigationData = [
  {
    id: 'home',
    label: strings.navigation.menu.home,
    href: '#home',
    Component: HeroSection,
  },
  {
    id: 'benefits',
    label: strings.navigation.menu.benefits,
    href: '#benefits',
    Component: BenefitsSection,
  },
  {
    id: 'company-discovery',
    label: strings.navigation.menu.companies,
    href: '#company-discovery',
    Component: CompanyDiscoverySection,
  },
  {
    id: 'process',
    label: strings.navigation.menu.howToJoin,
    href: '#process',
    Component: ProcessSection,
  },
  {
    id: 'cv-preview',
    label: strings.navigation.menu.cvPreview,
    href: '#cv-preview',
    Component: CvPreviewSection,
  },
  {
    id: 'faq',
    label: strings.navigation.menu.faqs,
    href: '#faq',
    Component: FaqSection,
  },
] as const
