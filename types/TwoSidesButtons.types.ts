import type { UserType } from './FormData.types'

export interface TwoSidesButtonsProps {
  /** Currently active tab */
  activeTab: UserType
  /** Callback when tab changes */
  onTabChange: (tab: UserType) => void
  /** Whether to show the hiring manager tab */
  showHiringManager?: boolean
}
