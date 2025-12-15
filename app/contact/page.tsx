import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { ContactFormPageSection } from '@/components/templates/ContactFormPageSection'

export const metadata: Metadata = generateMetadata(pageSeoConfig['/contact'])

export default function ContactPage() {
  return <ContactFormPageSection id='contact' />
}
