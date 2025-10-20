import { strings } from '@/lib/strings'
import type { TwoSidesButtonsProps } from '@/types/TwoSidesButtons.types'
import { Award, CircleStar } from 'lucide-react'
import { SideTabButton } from './SideButton'

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
          isActive={activeTab === 'member'}
          onClick={() => onTabChange('member')}
          icon={CircleStar}
          label={strings.howItWorks.tabs.members}
          ariaControls='member-panel'
        />
        <SideTabButton
          isActive={activeTab === 'guru'}
          onClick={() => onTabChange('guru')}
          icon={Award}
          label={strings.howItWorks.tabs.techProfessionals}
          ariaControls='guru-panel'
        />
      </div>
    </div>
  )
}
