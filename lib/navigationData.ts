import type { ComponentType } from 'react'
import { strings } from '@/lib/strings'
import { BenefitsPageSection } from '@/components/templates/BenefitsPageSection'
import { CompanyDiscoveryPageSection } from '@/components/templates/CompanyDiscoveryPageSection'
import { CvPreviewPageSection } from '@/components/templates/CvPreviewPageSection'
import {
  type FaqVariant,
  FaqPageSection,
} from '@/components/templates/FaqPageSection'
import { HeroPageSection } from '@/components/templates/HeroPageSection'
import { ProcessPageSection } from '@/components/templates/ProcessPageSection'
import { PersonalityPageSection } from '@/components/templates/PersonalityPageSection'
import { ProblemPageSection } from '@/components/templates/ProblemPageSection'
import type { SectionProps } from '@/types/Sections.types'

/** Route of the dedicated candidate + reviewer page. */
export const TALENT_PATH = '/for-talent-cv2.0'

export interface NavMenuItem {
  id: string
  label: string
  href: string
}

export interface NavMenu {
  id: string
  label: string
  items: readonly NavMenuItem[]
}

/**
 * Grouped header menus (arc.dev-style). "For companies" scrolls to homepage
 * sections; "For talent CV2.0" links to the dedicated talent page.
 */
export const headerMenus: readonly NavMenu[] = [
  {
    id: 'companies',
    label: strings.navigation.menu.companies,
    items: [
      {
        id: 'company-discovery',
        label: strings.navigation.companyMenu.howItWorks,
        href: '/#company-discovery',
      },
      {
        id: 'problem',
        label: strings.navigation.companyMenu.interviewProcess,
        href: '/#problem',
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
    items: [
      {
        id: 'cv-preview',
        label: strings.navigation.talentMenu.whatIsCv2,
        href: `${TALENT_PATH}#cv-preview`,
      },
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
export interface PageSection {
  id: string
  Component: ComponentType<SectionProps & { variant?: FaqVariant }>
  props?: { variant?: FaqVariant }
}

/** Homepage = company-facing. Order here is the render order. */
export const homePageSections: readonly PageSection[] = [
  { id: 'home', Component: HeroPageSection },
  { id: 'company-discovery', Component: CompanyDiscoveryPageSection },
  { id: 'problem', Component: ProblemPageSection },
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
