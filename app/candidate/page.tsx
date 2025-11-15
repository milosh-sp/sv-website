'use client'

import { useCandidateFormContext } from '@/context/CandidateFormContext'
import { CandidateFormProvider } from '@/context/CandidateFormContext'
import { CandidateWaitlistForm } from '@/components/organisms/CandidateWaitlistForm'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { PageHeader } from '@/components/molecules/PageHeader'
import { PageLayout } from '@/components/templates/PageLayout'
import { strings } from '@/lib/strings'

function CandidateFormContent() {
  const context = useCandidateFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='candidate' />
  }

  const { title, description } = strings.waitlistForms.pageHeaders.candidate

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />
      <CandidateWaitlistForm />
    </PageLayout>
  )
}

export default function CandidatePage() {
  return (
    <CandidateFormProvider>
      <CandidateFormContent />
    </CandidateFormProvider>
  )
}
