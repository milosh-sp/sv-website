/**
 * Waitlist Step Renderer Utilities
 * Provides utilities for dynamically rendering form steps based on configuration
 */

import { strings } from '@/lib/strings'
import type { WaitlistStepConfig } from '@/types/WaitlistStep.types'

/**
 * Get step configuration by persona and step number
 */
export function getStepConfig(
  persona: 'candidate' | 'verifier' | 'hiring-manager',
  stepNumber: number
): WaitlistStepConfig | undefined {
  return strings.waitlistForms.stepConfigs[persona].find(
    (step) => step.stepNumber === stepNumber
  )
}

/**
 * Get all step configurations for a persona
 */
export function getPersonaStepConfigs(
  persona: 'candidate' | 'verifier' | 'hiring-manager'
): WaitlistStepConfig[] {
  return strings.waitlistForms.stepConfigs[persona]
}

/**
 * Get total number of steps for a persona
 */
export function getTotalStepsForPersona(
  persona: 'candidate' | 'verifier' | 'hiring-manager'
): number {
  return getPersonaStepConfigs(persona).length
}

/**
 * Check if a field should be included in the current step
 */
export function isFieldInStep(
  persona: 'candidate' | 'verifier' | 'hiring-manager',
  stepNumber: number,
  fieldName: string
): boolean {
  const config = getStepConfig(persona, stepNumber)
  return config ? config.fields.includes(fieldName) : false
}

/**
 * Get all fields for a specific step
 */
export function getStepFields(
  persona: 'candidate' | 'verifier' | 'hiring-manager',
  stepNumber: number
): string[] {
  const config = getStepConfig(persona, stepNumber)
  return config ? config.fields : []
}
