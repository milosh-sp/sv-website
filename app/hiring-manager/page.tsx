'use client'

import { HiringManagerFormProvider } from '@/context/HiringManagerFormContext'
import { useHiringManagerFormContext } from '@/context/HiringManagerFormContext'
import { HiringManagerWaitlistForm } from '@/components/organisms/HiringManagerWaitlistForm'
import { SuccessScreen } from '@/components/organisms/SuccessScreen'
import { PageHeader } from '@/components/molecules/PageHeader'
import { PageLayout } from '@/components/templates/PageLayout'
import { strings } from '@/lib/strings'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(pageSeoConfig.hiringManager)

function HiringManagerFormContent() {
  const context = useHiringManagerFormContext()

  if (context.submitStatus === 'success') {
    return <SuccessScreen personaType='hiring-manager' />
  }

  const { title, description } =
    strings.waitlistForms.pageHeaders['hiring-manager']

  return (
    <PageLayout>
      <PageHeader title={title} description={description} />
      <HiringManagerWaitlistForm />
    </PageLayout>
  )
}

export default function HiringManagerPage() {
  return (
    <HiringManagerFormProvider>
      <HiringManagerFormContent />
    </HiringManagerFormProvider>
  )
}
