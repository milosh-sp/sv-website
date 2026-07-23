import type { LucideIcon } from 'lucide-react'

export type PageHeroTrustIndicator = {
  text: string
  icon: LucideIcon
}

export type PageHeroAccessibility = {
  heroActions: string
  trustIndicators: string
  heroVisual: string
}

export type PageHeroSecondaryPrompt = {
  prompt: string
  linkText: string
  href: string
}

export type PageHeroAudience = 'companies' | 'talent'

export type PageHeroProps = {
  audience: PageHeroAudience
  eyebrow: string
  headingId: string
  descriptionId: string
  mainHeading: string
  mainHeadingHighlight: string
  subHeading: string
  callToAction: string
  trustIndicators: readonly PageHeroTrustIndicator[]
  accessibility: PageHeroAccessibility
  showHiringManager?: boolean
  showCandidate?: boolean
  showVerifier?: boolean
  secondaryPrompt?: PageHeroSecondaryPrompt
}
