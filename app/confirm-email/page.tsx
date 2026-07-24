import { ConfirmEmailPageSection } from '@/components/templates/ConfirmEmailPageSection'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(
  pageSeoConfig['/confirm-email']
)

export default function ConfirmEmailPage() {
  return (
    <div>
      <ConfirmEmailPageSection />
    </div>
  )
}
