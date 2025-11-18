import { HiringManagerWaitlistForm } from '@/components/organisms/HiringManagerWaitlistForm'
import { HiringManagerFormProvider } from '@/context/HiringManagerFormContext'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(pageSeoConfig.hiringManager)

export default function HiringManagerPage() {
  return (
    <HiringManagerFormProvider>
      <HiringManagerWaitlistForm />
    </HiringManagerFormProvider>
  )
}
