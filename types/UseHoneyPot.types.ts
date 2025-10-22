interface HoneypotState {
  honeypotValue: string
  isBot: boolean
  startTime: number
  hasMouseMovement: boolean
}

interface HoneypotValidation {
  isValid: boolean
  reason?: string
}

interface HoneypotFieldProps {
  value: string
  onChange: (value: string) => void
  fieldName?: string
  label?: string
}
export type { HoneypotState, HoneypotValidation, HoneypotFieldProps }
