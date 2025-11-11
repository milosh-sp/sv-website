'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import { INITIAL_HIRING_MANAGER_FORM_DATA } from '@/types/HiringManagerFormData.types'

interface HiringManagerFormContextType {
  formData: HiringManagerFormData
  currentStep: number
  errors: Record<string, string>
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'

  // Form data updates
  updateFormData: (data: Partial<HiringManagerFormData>) => void
  setFormData: (data: HiringManagerFormData) => void

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

const HiringManagerFormContext = createContext<
  HiringManagerFormContextType | undefined
>(undefined)

export function HiringManagerFormProvider({
  children,
}: {
  children: ReactNode
}) {
  const [formData, setFormDataState] = useState<HiringManagerFormData>(
    INITIAL_HIRING_MANAGER_FORM_DATA
  )
  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrorsState] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const updateFormData = (data: Partial<HiringManagerFormData>) => {
    setFormDataState((prev) => {
      const updated = { ...prev, ...data }
      // Ensure all values are strings (not undefined)
      return Object.fromEntries(
        Object.entries(updated).map(([key, value]) => [key, value ?? ''])
      ) as HiringManagerFormData
    })
  }

  const setFormData = (data: HiringManagerFormData) => {
    setFormDataState(data)
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
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
    setFormDataState(INITIAL_HIRING_MANAGER_FORM_DATA)
    setCurrentStep(1)
    setErrorsState({})
    setIsSubmitting(false)
    setSubmitStatus('idle')
  }

  const value: HiringManagerFormContextType = {
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
    <HiringManagerFormContext.Provider value={value}>
      {children}
    </HiringManagerFormContext.Provider>
  )
}

export function useHiringManagerFormContext() {
  const context = useContext(HiringManagerFormContext)
  if (!context) {
    throw new Error(
      'useHiringManagerFormContext must be used within HiringManagerFormProvider'
    )
  }
  return context
}
