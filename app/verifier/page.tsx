import { VerifierWaitlistForm } from '@/components/organisms/VerifierWaitlistForm'
import { VerifierFormProvider } from '@/context/VerifierFormContext'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(pageSeoConfig['/verifier'])

export default function VerifierPage() {
  return (
    <VerifierFormProvider>
      <VerifierWaitlistForm />
    </VerifierFormProvider>
  )
}
