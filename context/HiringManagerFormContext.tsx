'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { HiringManagerFormData } from '@/types/HiringManagerFormData.types'
import { INITIAL_HIRING_MANAGER_FORM_DATA } from '@/types/HiringManagerFormData.types'
import type { HiringManagerFormContextType } from '@/types/HiringManagerFormContext.types'
import {
  STEP_IDS,
  getNextStepId,
  getPreviousStepId,
  type StepId,
} from '@/lib/stepIdentifiers'

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
  const [currentStep, setCurrentStep] = useState<StepId>(STEP_IDS.STEP_1)
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
    setFormDataState(INITIAL_HIRING_MANAGER_FORM_DATA)
    setCurrentStep(STEP_IDS.STEP_1)
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
