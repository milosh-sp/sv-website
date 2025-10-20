/**
 * Types for TwoSidesButtons component
 */

export type TabType = 'candidate' | 'vetter'

export interface TwoSidesButtonsProps {
  /** Currently active tab */
  activeTab: TabType
  /** Callback when tab changes */
  onTabChange: (tab: TabType) => void
}
