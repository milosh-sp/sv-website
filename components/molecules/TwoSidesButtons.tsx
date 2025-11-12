import { strings } from '@/lib/strings'
import type { TwoSidesButtonsProps } from '@/types/TwoSidesButtons.types'
import { Award, CircleStar } from 'lucide-react'
import { SideTabButton } from '@/components/atoms/SideButton'

export function TwoSidesButtons({
  activeTab,
  onTabChange,
}: TwoSidesButtonsProps) {
  return (
    <div className='flex justify-center mb-12'>
      <div
        className='flex p-2.5 bg-slate-100/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/50'
        role='tablist'
        aria-label={strings.benefits.tabAccessibility.chooseUserType}
      >
        <SideTabButton
          isActive={activeTab === 'member'}
          onClick={() => onTabChange('member')}
          icon={CircleStar}
          label={strings.benefits.tabs.members}
          ariaControls='member-panel'
        />
        <SideTabButton
          isActive={activeTab === 'guru'}
          onClick={() => onTabChange('guru')}
          icon={Award}
          label={strings.benefits.tabs.guruMembers}
          ariaControls='guru-panel'
        />
      </div>
    </div>
  )
}
