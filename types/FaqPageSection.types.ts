import type { SectionProps } from '@/types/Sections.types'

type FaqVariant = 'companies' | 'talent'

interface FaqPageSectionProps extends SectionProps {
  variant?: FaqVariant
}

export type { FaqVariant, FaqPageSectionProps }
