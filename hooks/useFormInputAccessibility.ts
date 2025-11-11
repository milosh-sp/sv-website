import type {
  UseFormInputAccessibilityProps,
  UseFormInputAccessibilityReturn,
} from '@/types/UseFormInputAccessibility.types'

export function useFormInputAccessibility({
  id,
  prefix = 'input',
  label,
  description,
  error,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-required': ariaRequired,
  required,
  defaultAriaLabel = 'Input',
}: UseFormInputAccessibilityProps): UseFormInputAccessibilityReturn {
  // Generate unique ID if not provided
  // O(1) - constant time operation
  const inputId =
    id ?? `${prefix}-${Math.random().toString(36).substring(2, 9)}`

  // Generate IDs for description and error elements
  const descriptionId = description ? `${inputId}-description` : undefined
  const errorId = error ? `${inputId}-error` : undefined

  // Combine all aria-describedby IDs
  // O(n) where n is the number of IDs (max 3), effectively O(1)
  const ids = [ariaDescribedBy, descriptionId, errorId].filter(Boolean)
  const combinedAriaDescribedBy = ids.length > 0 ? ids.join(' ') : undefined

  // Determine invalid state
  const isInvalid = ariaInvalid ?? !!error

  // Compute aria-label
  // If ariaLabel is provided, use it
  // If label is provided, don't set aria-label (label element will be used)
  // Otherwise, use defaultAriaLabel
  const computedAriaLabel = ariaLabel ?? (label ? undefined : defaultAriaLabel)

  // Compute aria-required
  const computedAriaRequired = ariaRequired ?? required

  return {
    inputId,
    descriptionId,
    errorId,
    combinedAriaDescribedBy,
    isInvalid,
    computedAriaLabel,
    computedAriaRequired,
  }
}
