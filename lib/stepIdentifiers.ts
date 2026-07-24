/**
 * Step Identifier Constants and Utilities
 * Provides named step identifiers for multi-step forms
 * Replaces numeric step indices with semantic string identifiers
 */

// ============================================================================
// STEP IDENTIFIER CONSTANTS
// ============================================================================

import type { StepId } from '@/types/netlify.types'

const STEP_IDS = {
  STEP_1: 'step1',
  STEP_2: 'step2',
  STEP_3: 'step3',
  STEP_4: 'step4',
} as const

/**
 * Array of all step identifiers in order
 */
const STEP_ID_ARRAY: StepId[] = [
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
function getStepNumber(stepId: StepId): number {
  const index = STEP_ID_ARRAY.indexOf(stepId)
  return index >= 0 ? index + 1 : 1
}

/**
 * Get the next step identifier
 */
function getNextStepId(currentStepId: StepId): StepId {
  const currentIndex = STEP_ID_ARRAY.indexOf(currentStepId)
  const nextIndex = Math.min(currentIndex + 1, STEP_ID_ARRAY.length - 1)
  return STEP_ID_ARRAY[nextIndex]
}

/**
 * Get the previous step identifier
 */
function getPreviousStepId(currentStepId: StepId): StepId {
  const currentIndex = STEP_ID_ARRAY.indexOf(currentStepId)
  const prevIndex = Math.max(currentIndex - 1, 0)
  return STEP_ID_ARRAY[prevIndex]
}

export {
  STEP_IDS,
  STEP_ID_ARRAY,
  getStepNumber,
  getNextStepId,
  getPreviousStepId,
}
