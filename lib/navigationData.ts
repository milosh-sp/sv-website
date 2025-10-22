import { strings } from '@/lib/strings'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { CompanyDiscoverySection } from '@/components/sections/CompanyDiscoverySection'
import { CvPreviewSection } from '@/components/sections/CvPreviewSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { HeroSection } from '@/components/sections/HeroSection'

/**
 * Navigation data for the application,
 * including labels, hrefs, and corresponding components.
 */
export const navigationData = [
  {
    id: 'how-it-works',
    label: strings.navigation.menu.benefits,
    href: '#how-it-works',
    Component: HeroSection,
  },
  {
    id: 'company-discovery',
    label: strings.navigation.menu.companies,
    href: '#company-discovery',
    Component: BenefitsSection,
  },
  {
    id: 'process',
    label: strings.navigation.menu.howToJoin,
    href: '#process',
    Component: CompanyDiscoverySection,
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
