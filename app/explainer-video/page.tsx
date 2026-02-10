import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { ExplainerVideoPageSection } from '@/components/templates/ExplainerVideoPageSection'

export const metadata: Metadata = generateMetadata(
  pageSeoConfig['/explainer-video']
)

export default function ContactPage() {
  return <ExplainerVideoPageSection id='explainer-video' />
}
