'use client'

import { VerifierFormProvider } from '@/context/VerifierFormContext'
import { useVerifierFormContext } from '@/context/VerifierFormContext'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { VerifierWaitlistForm } from '@/components/organisms/VerifierWaitlistForm'
import { PageHeader } from '@/components/molecules/PageHeader'
import { PageLayout } from '@/components/templates/PageLayout'
import { strings } from '@/lib/strings'

function VerifierFormContent() {
  const context = useVerifierFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='verifier' />
  }

  const { title, description } = strings.waitlistForms.pageHeaders.verifier

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />
      <VerifierWaitlistForm />
    </PageLayout>
  )
}

export default function VerifierPage() {
  return (
    <VerifierFormProvider>
      <VerifierFormContent />
    </VerifierFormProvider>
  )
}
