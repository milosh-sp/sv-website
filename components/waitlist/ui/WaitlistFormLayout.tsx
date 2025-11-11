'use client'

import type { ReactNode } from 'react'
import { ProgressIndicator } from './ProgressIndicator'
import { FormNavigation } from './FormNavigation'
import { HoneypotField } from '@/components/ui/HoneypotField'
import { StatusMessage } from '@/components/ui/StatusMessage'

interface WaitlistFormLayoutProps {
  currentStep: number
  totalSteps: number
  onStepClick?: (step: number) => void
  isStepClickable?: (step: number) => boolean
  isSubmitting: boolean
  canProceed: boolean
  onPrevious: () => void
  onNext: () => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: ReactNode
  submitStatus?: 'idle' | 'success' | 'error'
  submitError?: string
  honeypotValue: string
  onHoneypotChange: (value: string) => void
  submitLabel?: string
  submitLoadingLabel?: string
  submitAriaLabel?: string
}

export function WaitlistFormLayout({
  currentStep,
  totalSteps,
  onStepClick,
  isStepClickable,
  isSubmitting,
  canProceed,
  onPrevious,
  onNext,
  onSubmit,
  children,
  submitStatus = 'idle',
  submitError,
  honeypotValue,
  onHoneypotChange,
  submitLabel = 'Submit',
  submitLoadingLabel = 'Submitting...',
  submitAriaLabel = 'Submit form',
}: WaitlistFormLayoutProps) {
  return (
    <form
      onSubmit={onSubmit}
      className='space-y-6 w-full max-w-2xl mx-auto'
      noValidate
    >
      {/* Progress Indicator */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={onStepClick}
        isStepClickable={isStepClickable}
        isSubmitting={isSubmitting}
      />

      {/* Current Step Content */}
      <div>{children}</div>

      {/* Honeypot Field */}
      <HoneypotField
        id='website'
        name='website'
        type='text'
        placeholder='https://example.com'
        value={honeypotValue}
        onChange={(e) => onHoneypotChange(e.target.value)}
        label='Website'
      />

      {/* Status Messages */}
      {submitStatus === 'error' && submitError && (
        <StatusMessage
          status='error'
          errorMessage={submitError}
          errorIcon='❌'
          successIcon='🎉'
          successMessage='Success!'
          defaultErrorMessage='An error occurred. Please try again.'
        />
      )}

      {/* Navigation Buttons */}
      <FormNavigation
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={onPrevious}
        onNext={onNext}
        isSubmitting={isSubmitting}
        canProceed={canProceed}
        submitLabel={submitLabel}
        submitLoadingLabel={submitLoadingLabel}
        submitAriaLabel={submitAriaLabel}
      />
    </form>
  )
}
