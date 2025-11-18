import { CandidateWaitlistForm } from '@/components/organisms/CandidateWaitlistForm'
import { CandidateFormProvider } from '@/context/CandidateFormContext'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(pageSeoConfig.candidate)

export default function CandidatePage() {
  return (
    <CandidateFormProvider>
      <CandidateWaitlistForm />
    </CandidateFormProvider>
  )
}
