/**
 * Step Identifier Constants and Utilities
 * Provides named step identifiers for multi-step forms
 * Replaces numeric step indices with semantic string identifiers
 */

// ============================================================================
// STEP IDENTIFIER CONSTANTS
// ============================================================================

export const STEP_IDS = {
  STEP_1: 'step1',
  STEP_2: 'step2',
  STEP_3: 'step3',
  STEP_4: 'step4',
} as const

export type StepId = (typeof STEP_IDS)[keyof typeof STEP_IDS]

/**
 * Array of all step identifiers in order
 */
export const STEP_ID_ARRAY: StepId[] = [
  STEP_IDS.STEP_1,
  STEP_IDS.STEP_2,
  STEP_IDS.STEP_3,
  STEP_IDS.STEP_4,
]

// ============================================================================
// STEP NAVIGATION UTILITIES
// ============================================================================

/**
 * Get the numeric position of a step identifier (1-based)
 */
export function getStepNumber(stepId: StepId): number {
  const index = STEP_ID_ARRAY.indexOf(stepId)
  return index >= 0 ? index + 1 : 1
}

/**
 * Get the step identifier from a numeric position (1-based)
 */
export function getStepId(stepNumber: number): StepId {
  const index = Math.max(0, Math.min(stepNumber - 1, STEP_ID_ARRAY.length - 1))
  return STEP_ID_ARRAY[index]
}

/**
 * Get the next step identifier
 */
export function getNextStepId(currentStepId: StepId): StepId {
  const currentIndex = STEP_ID_ARRAY.indexOf(currentStepId)
  const nextIndex = Math.min(currentIndex + 1, STEP_ID_ARRAY.length - 1)
  return STEP_ID_ARRAY[nextIndex]
}

/**
 * Get the previous step identifier
 */
export function getPreviousStepId(currentStepId: StepId): StepId {
  const currentIndex = STEP_ID_ARRAY.indexOf(currentStepId)
  const prevIndex = Math.max(currentIndex - 1, 0)
  return STEP_ID_ARRAY[prevIndex]
}

/**
 * Check if a step identifier is valid
 */
export function isValidStepId(stepId: unknown): stepId is StepId {
  return STEP_ID_ARRAY.includes(stepId as StepId)
}

/**
 * Get total number of steps
 */
export function getTotalSteps(): number {
  return STEP_ID_ARRAY.length
}
