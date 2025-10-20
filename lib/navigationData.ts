import { strings } from '@/lib/strings'

export const navigationData = [
  {
    id: 'how-it-works-updated',
    label: strings.navigation.menu.howItWorks,
    href: '#how-it-works-updated',
  },
  {
    id: 'cv-preview',
    label: strings.navigation.menu.cvPreview,
    href: '#cv-preview',
  },
  {
    id: 'company-discovery',
    label: strings.navigation.menu.companies,
    href: '#company-discovery',
  },
  {
    id: 'process',
    label: strings.navigation.menu.howToJoin,
    href: '#process',
  },
  {
    id: 'faq',
    label: strings.navigation.menu.faqs,
    href: '#faq',
  },
] as const
