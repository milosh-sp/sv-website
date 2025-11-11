interface UseFormInputAccessibilityProps {
  id?: string
  prefix?: string
  label?: string
  description?: string
  error?: string
  'aria-describedby'?: string
  'aria-invalid'?: boolean
  'aria-label'?: string
  'aria-required'?: boolean
  required?: boolean
  defaultAriaLabel?: string
}

interface UseFormInputAccessibilityReturn {
  inputId: string
  descriptionId: string | undefined
  errorId: string | undefined
  combinedAriaDescribedBy: string | undefined
  isInvalid: boolean
  computedAriaLabel: string | undefined
  computedAriaRequired: boolean | undefined
}

export type { UseFormInputAccessibilityProps, UseFormInputAccessibilityReturn }
