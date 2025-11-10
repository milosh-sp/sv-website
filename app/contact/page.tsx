import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { ContactPageContent } from '@/components/sections/ContactFormSection'

export const metadata: Metadata = generateMetadata(pageSeoConfig.contact)

export default function ContactPage() {
  return <ContactPageContent id='contact' />
}
