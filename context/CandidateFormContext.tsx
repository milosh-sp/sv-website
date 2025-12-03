'use client'

import { createContext, use, useState, type ReactNode } from 'react'
import { INITIAL_CANDIDATE_FORM_DATA } from '@/types/CandidateFormData.types'
import type { CandidateFormData } from '@/types/CandidateFormData.types'
import type { CandidateFormContextType } from '@/types/CandidateFormContext.types'
import {
  STEP_IDS,
  getNextStepId,
  getPreviousStepId,
} from '@/lib/stepIdentifiers'
import type { StepId } from '@/types/netlify.types'

const CandidateFormContext = createContext<CandidateFormContextType | null>(
  null
)

export function CandidateFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormDataState] = useState<CandidateFormData>(
    INITIAL_CANDIDATE_FORM_DATA
  )
  const [currentStep, setCurrentStep] = useState<StepId>(STEP_IDS.STEP_1)
  const [errors, setErrorsState] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const updateFormData = (data: Partial<CandidateFormData>) => {
    setFormDataState((prev) => {
      const updated = { ...prev, ...data }
      // Ensure all values are strings (not undefined)
      return Object.fromEntries(
        Object.entries(updated).map(([key, value]) => [key, value ?? ''])
      ) as CandidateFormData
    })
  }

  const setFormData = (data: CandidateFormData) => {
    setFormDataState(data)
  }

  const goToStep = (step: StepId) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    setCurrentStep((prev) => getNextStepId(prev))
  }

  const previousStep = () => {
    setCurrentStep((prev) => getPreviousStepId(prev))
  }

  const setErrors = (newErrors: Record<string, string>) => {
    setErrorsState(newErrors)
  }

  const clearErrors = () => {
    setErrorsState({})
  }

  const resetForm = () => {
    setFormDataState(INITIAL_CANDIDATE_FORM_DATA)
    setCurrentStep(STEP_IDS.STEP_1)
    setErrorsState({})
    setIsSubmitting(false)
    setSubmitStatus('idle')
  }

  const value: CandidateFormContextType = {
    formData,
    currentStep,
    errors,
    isSubmitting,
    submitStatus,
    updateFormData,
    setFormData,
    goToStep,
    nextStep,
    previousStep,
    setErrors,
    clearErrors,
    setIsSubmitting,
    setSubmitStatus,
    resetForm,
  }

  return <CandidateFormContext value={value}>{children}</CandidateFormContext>
}

export function useCandidateFormContext() {
  const context = use(CandidateFormContext)
  if (!context) {
    throw new Error(
      'useCandidateFormContext must be used within CandidateFormProvider'
    )
  }
  return context
}
