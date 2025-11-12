'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { VerifierFormData } from '@/types/VerifierFormData.types'
import { INITIAL_VERIFIER_FORM_DATA } from '@/types/VerifierFormData.types'

interface VerifierFormContextType {
  formData: VerifierFormData
  currentStep: number
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'

  // Form data updates
  updateFormData: (data: Partial<VerifierFormData>) => void
  setFormData: (data: VerifierFormData) => void

  // Step navigation
  goToStep: (step: number) => void
  nextStep: () => void
  previousStep: () => void

  // Error management
  setErrors: (errors: Record<string, string>) => void
  clearErrors: () => void

  // Submission
  setIsSubmitting: (value: boolean) => void
  setSubmitStatus: (status: 'idle' | 'success' | 'error') => void

  // Reset
  resetForm: () => void
}

const VerifierFormContext = createContext<VerifierFormContextType | undefined>(
  undefined
)

export function VerifierFormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormDataState] = useState<VerifierFormData>(
    INITIAL_VERIFIER_FORM_DATA
  )
  const [currentStep, setCurrentStep] = useState(1)
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

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const setErrors = (newErrors: Record<string, string>) => {
    setErrorsState(newErrors)
  }

  const clearErrors = () => {
    setErrorsState({})
  }

  const resetForm = () => {
    setFormDataState(INITIAL_VERIFIER_FORM_DATA)
    setCurrentStep(1)
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
