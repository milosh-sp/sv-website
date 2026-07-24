import { TALENT_PATH } from '@/lib/consts'
import { strings } from '@/lib/strings'
import { BenefitsPageSection } from '@/components/templates/BenefitsPageSection'
import { CvPreviewPageSection } from '@/components/templates/CvPreviewPageSection'
import { FaqPageSection } from '@/components/templates/FaqPageSection'
import { HeroPageSection } from '@/components/templates/HeroPageSection'
import { StatsBandPageSection } from '@/components/templates/StatsBandPageSection'
import { AiSearchPageSection } from '@/components/templates/AiSearchPageSection'
import { DifferentiatorsPageSection } from '@/components/templates/DifferentiatorsPageSection'
import { ProcessPageSection } from '@/components/templates/ProcessPageSection'
import { PersonalityPageSection } from '@/components/templates/PersonalityPageSection'
import type {
  NavMenu,
  NavMenuItem,
  PageSection,
} from '@/types/Navigation.types'

export { TALENT_PATH }
export type { NavMenu, NavMenuItem, PageSection }

/**
 * Grouped header menus (arc.dev-style). "For companies" scrolls to homepage
 * sections; "For talent CV2.0" links to the dedicated talent page.
 */
export const headerMenus: readonly NavMenu[] = [
  {
    id: 'companies',
    label: strings.navigation.menu.companies,
    href: '/',
    items: [
      {
        id: 'ai-search',
        label: strings.navigation.companyMenu.smartSearch,
        href: '/#ai-search',
      },
      {
        id: 'differentiators',
        label: strings.navigation.companyMenu.whyDifferent,
        href: '/#differentiators',
      },
      {
        id: 'personality-cv',
        label: strings.navigation.companyMenu.personality,
        href: '/#personality-cv',
      },
      {
        id: 'faq',
        label: strings.navigation.companyMenu.faq,
        href: '/#faq',
      },
    ],
  },
  {
    id: 'talent',
    label: strings.navigation.menu.talent,
    href: TALENT_PATH,
    items: [
      {
        id: 'process',
        label: strings.navigation.talentMenu.getVerified,
        href: `${TALENT_PATH}#process`,
      },
      {
        id: 'benefits',
        label: strings.navigation.talentMenu.becomeReviewer,
        href: `${TALENT_PATH}#benefits`,
      },
      {
        id: 'faq',
        label: strings.navigation.talentMenu.faq,
        href: `${TALENT_PATH}#faq`,
      },
    ],
  },
]

/** Flat header link rendered alongside the grouped menus. */
export const contactLink: NavMenuItem = {
  id: 'contact',
  label: strings.footer.links.contactUs,
  href: '/contact',
}

/**
 * A section optionally carries extra props (currently only the FAQ variant),
 * so both pages can reuse the same components with page-specific behavior.
 */
/** Homepage = company-facing. Order here is the render order. */
export const homePageSections: readonly PageSection[] = [
  { id: 'home', Component: HeroPageSection },
  { id: 'stats', Component: StatsBandPageSection },
  { id: 'ai-search', Component: AiSearchPageSection },
  { id: 'differentiators', Component: DifferentiatorsPageSection },
  { id: 'personality-cv', Component: PersonalityPageSection },
  { id: 'faq', Component: FaqPageSection, props: { variant: 'companies' } },
]

/** /for-talent-cv2.0 = candidate + reviewer content. */
export const forTalentPageSections: readonly PageSection[] = [
  { id: 'cv-preview', Component: CvPreviewPageSection },
  { id: 'process', Component: ProcessPageSection },
  { id: 'benefits', Component: BenefitsPageSection },
  { id: 'faq', Component: FaqPageSection, props: { variant: 'talent' } },
]
