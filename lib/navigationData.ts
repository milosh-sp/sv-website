import { strings } from '@/lib/strings'
import { BenefitsPageSection } from '@/components/templates/BenefitsPageSection'
import { CompanyDiscoveryPageSection } from '@/components/templates/CompanyDiscoveryPageSection'
import { CvPreviewPageSection } from '@/components/templates/CvPreviewPageSection'
import { FaqPageSection } from '@/components/templates/FaqPageSection'
import { HeroPageSection } from '@/components/templates/HeroPageSection'
import { ProcessPageSection } from '@/components/templates/ProcessPageSection'
import { PersonalityPageSection } from '@/components/templates/PersonalityPageSection'
import { ProblemPageSection } from '@/components/templates/ProblemPageSection'

/**
 * Navigation data for the application,
 * including labels, hrefs, and corresponding components.
 */
export const navigationData = [
  {
    id: 'home',
    label: strings.navigation.menu.home,
    href: '/#home',
    Component: HeroPageSection,
  },
  {
    id: 'problem',
    label: `The Problem`,
    href: '/#problem',
    Component: ProblemPageSection,
  },
  {
    id: 'personality-cv',
    label: `Personality`,
    href: '/#personality-cv',
    Component: PersonalityPageSection,
  },
  {
    id: 'company-discovery',
    label: strings.navigation.menu.companies,
    href: '/#company-discovery',
    Component: CompanyDiscoveryPageSection,
  },
  {
    id: 'process',
    label: strings.navigation.menu.howToJoin,
    href: '/#process',
    Component: ProcessPageSection,
  },
  {
    id: 'cv-preview',
    label: strings.navigation.menu.cvPreview,
    href: '/#cv-preview',
    Component: CvPreviewPageSection,
  },
  {
    id: 'faq',
    label: strings.navigation.menu.faqs,
    href: '/#faq',
    Component: FaqPageSection,
  },
  {
    id: 'contact',
    label: strings.footer.links.contactUs,
    href: '/contact',
  },
]
