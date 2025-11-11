/**
 * Waitlist Step Configuration Types
 * Defines the structure for data-driven step rendering
 * Enables reusable step components across different form personas
 */

import type { ReactNode } from 'react'

/**
 * Configuration for a single form step
 * Enables data-driven rendering of step content
 */
export interface WaitlistStepConfig {
  stepNumber: number
  title: string
  description: string
  fields: string[]
}

/**
 * Props for a reusable step component
 * Provides all necessary data and callbacks for rendering a step
 */
export interface WaitlistStepProps {
  stepNumber: number
  title: string
  description: string
  errors: Record<string, string>
  isSubmitting: boolean
  children: ReactNode
}

/**
 * Configuration for conditional field rendering
 * Used for fields that appear based on other field values
 */
export interface ConditionalFieldConfig {
  fieldName: string
  dependsOn: string
  condition: (value: string) => boolean
}

/**
 * Form step renderer function type
 * Takes form data and returns JSX for the step
 */
export type StepRenderer<TFormData extends Record<string, string>> = (
  formData: TFormData,
  errors: Record<string, string>,
  isSubmitting: boolean,
  handlers: Record<string, (value: string | boolean) => void>
) => ReactNode

/**
 * Configuration for a complete waitlist form
 * Defines all steps and their rendering logic
 */
export interface WaitlistFormConfig<TFormData extends Record<string, string>> {
  totalSteps: number
  steps: WaitlistStepConfig[]
  stepRenderers: Record<number, StepRenderer<TFormData>>
}

export type { WaitlistStepConfig as StepConfig }
