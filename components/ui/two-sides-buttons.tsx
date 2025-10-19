import { strings } from '@/lib/strings'
import { CircleStar, Award } from 'lucide-react'
import { SideTabButton } from './side-button'

/**
 * Tab type for user role selection
 */
type TabType = 'candidate' | 'vetter'

/**
 * Props interface for TwoSidesButtons component
 * Follows Interface Segregation Principle - minimal, focused interface
 */
interface TwoSidesButtonsProps {
  /** Currently active tab */
  activeTab: TabType
  /** Callback when tab changes */
  onTabChange: (tab: TabType) => void
}

export function TwoSidesButtons({
  activeTab,
  onTabChange,
}: TwoSidesButtonsProps) {
  return (
    <div className='flex justify-center mb-12'>
      <div
        className='flex bg-slate-100/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm border border-slate-200/50'
        role='tablist'
        aria-label={strings.howItWorks.tabAccessibility.chooseUserType}
      >
        <SideTabButton
          isActive={activeTab === 'candidate'}
          onClick={() => onTabChange('candidate')}
          icon={CircleStar}
          label={strings.howItWorks.tabs.members}
          ariaControls='candidate-panel'
        />
        <SideTabButton
          isActive={activeTab === 'vetter'}
          onClick={() => onTabChange('vetter')}
          icon={Award}
          label={strings.howItWorks.tabs.techProfessionals}
          ariaControls='vetter-panel'
        />
      </div>
    </div>
  )
}
