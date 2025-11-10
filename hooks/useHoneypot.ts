import { useCallback, useEffect, useRef, useState } from 'react'

import type {
  HoneypotFieldProps,
  HoneypotState,
  HoneypotValidation,
} from '@/types/UseHoneyPot.types'

export function useHoneypot() {
  const [state, setState] = useState<HoneypotState>({
    honeypotValue: '',
    isBot: false,
    startTime: Date.now(),
    hasMouseMovement: false,
  })

  const mouseMovementRef = useRef(false)

  // Track mouse movement to detect human interaction
  useEffect(() => {
    const handleMouseMove = () => {
      if (!mouseMovementRef.current) {
        mouseMovementRef.current = true
        setState((prev) => ({ ...prev, hasMouseMovement: true }))
      }
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Update honeypot value
  const setHoneypotValue = (value: string) => {
    setState((prev) => ({
      ...prev,
      honeypotValue: value,
      isBot: value.trim() !== '', // If honeypot is filled, mark as bot
    }))
  }

  // Validate form submission against bot indicators
  const validateSubmission = (): HoneypotValidation => {
    const currentTime = Date.now()
    const timeTaken = currentTime - state.startTime

    // Check honeypot field
    if (state.honeypotValue.trim() !== '') {
      return {
        isValid: false,
        reason: 'Honeypot field filled',
      }
    }

    // Check if form was submitted too quickly (less than 2 seconds)
    if (timeTaken < 2000) {
      return {
        isValid: false,
        reason: 'Form submitted too quickly',
      }
    }

    // Check if form was submitted too slowly (more than 30 minutes)
    if (timeTaken > 30 * 60 * 1000) {
      return {
        isValid: false,
        reason: 'Form session expired',
      }
    }

    // All checks passed
    return {
      isValid: true,
    }
  }

  // Reset honeypot state (useful for form reset)
  const resetHoneypot = useCallback(() => {
    setState({
      honeypotValue: '',
      isBot: false,
      startTime: Date.now(),
      hasMouseMovement: false,
    })
    mouseMovementRef.current = false
  }, [])

  return {
    honeypotValue: state.honeypotValue,
    setHoneypotValue,
    isBot: state.isBot,
    hasMouseMovement: state.hasMouseMovement,
    validateSubmission,
    resetHoneypot,
    // Expose timing info for debugging
    timeTaken: Date.now() - state.startTime,
  }
}

/**
 * Get honeypot field props for easy integration
 */
export function getHoneypotFieldProps(
  value: string,
  onChange: (value: string) => void,
  fieldName: string = 'website'
): HoneypotFieldProps & {
  style: React.CSSProperties
  'aria-hidden': boolean
  tabIndex: number
  autoComplete: string
} {
  return {
    value,
    onChange,
    fieldName,
    label: `${fieldName} (leave this field empty)`,
    style: {
      position: 'absolute',
      left: '-9999px',
      opacity: 0,
      pointerEvents: 'none',
    },
    'aria-hidden': true,
    tabIndex: -1,
    autoComplete: 'off',
  }
}
