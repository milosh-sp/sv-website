'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import { INITIAL_VERIFIER_FORM_DATA } from '@/types/VerifierFormData.types'
import type { VerifierFormContextType } from '@/types/VerifierFormContext.types'
import {
  STEP_IDS,
  getNextStepId,
  getPreviousStepId,
  type StepId,
} from '@/lib/stepIdentifiers'

const VerifierFormContext = createContext<VerifierFormContextType | undefined>(
  undefined
)

export function VerifierFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormDataState] = useState<VerifierFormData>(
    INITIAL_VERIFIER_FORM_DATA
  )
  const [currentStep, setCurrentStep] = useState<StepId>(STEP_IDS.STEP_1)
  const [errors, setErrorsState] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const updateFormData = (data: Partial<VerifierFormData>) => {
    setFormDataState((prev) => {
      const updated = { ...prev, ...data }
      // Ensure all values are strings (not undefined)
      return Object.fromEntries(
        Object.entries(updated).map(([key, value]) => [key, value ?? ''])
      ) as VerifierFormData
    })
  }

  const setFormData = (data: VerifierFormData) => {
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
    setFormDataState(INITIAL_VERIFIER_FORM_DATA)
    setCurrentStep(STEP_IDS.STEP_1)
    setErrorsState({})
    setIsSubmitting(false)
    setSubmitStatus('idle')
  }

  const value: VerifierFormContextType = {
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

  return (
    <VerifierFormContext.Provider value={value}>
      {children}
    </VerifierFormContext.Provider>
  )
}

export function useVerifierFormContext() {
  const context = useContext(VerifierFormContext)
  if (!context) {
    throw new Error(
      'useVerifierFormContext must be used within VerifierFormProvider'
    )
  }
  return context
}
