import { UserType } from './FormData.types'

export interface TwoSidesButtonsProps {
  /** Currently active tab */
  activeTab: UserType
  /** Callback when tab changes */
  onTabChange: (tab: UserType) => void
}
