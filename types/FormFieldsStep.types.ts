import type { HTMLAttributes } from 'react'

/**
 * Represents a single form field configuration
 * Supports both radio buttons and checkboxes with optional "other" text input
 */
interface FormFieldConfig {
  /** Unique identifier for the field */
  id: string
  /** Type of field: 'radio' for single selection, 'checkbox' for multiple */
  type: 'radio' | 'checkbox'
  /** Label/question text for the field */
  label: string
  /** Optional description text */
  description?: string
  /** Array of options for radio/checkbox */
  options: Array<{ value: string; label: string }>
  /** Current value(s) - string for radio, JSON stringified array for checkbox */
  value: string
  /** Error message if validation failed */
  error?: string
  /** Callback when value changes */
  onChange: (value: string | string[]) => void
  /** Optional: ID of the "other" field if this field has one */
  otherFieldId?: string
  /** Optional: Value of the "other" field */
  otherValue?: string
  /** Optional: Callback for "other" field changes */
  onOtherChange?: (value: string) => void
  /** Optional: Error for "other" field */
  otherError?: string
}

/**
 * Props for the generic FormFieldsStep component
 * Implements Dependency Inversion: component depends on FormFieldConfig abstraction
 * rather than concrete field implementations
 */
interface FormFieldsStepProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of field configurations */
  fields: FormFieldConfig[]
  /** Whether the form is currently submitting */
  isSubmitting: boolean
}

export type { FormFieldConfig, FormFieldsStepProps }
