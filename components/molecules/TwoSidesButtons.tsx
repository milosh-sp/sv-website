import { strings } from '@/lib/strings'
import type { TwoSidesButtonsProps } from '@/types/TwoSidesButtons.types'
import { Award, CircleStar, Handshake } from 'lucide-react'
import { SideTabButton } from '@/components/atoms/SideButton'

export function TwoSidesButtons({
  activeTab,
  onTabChange,
  showHiringManager,
}: TwoSidesButtonsProps) {
  return (
    <div className='flex justify-center mb-12'>
      <div
        className='flex p-1.5 md:p-2.5 bg-muted/80 backdrop-blur-sm rounded-xl shadow-sm border border-border/50'
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
        {showHiringManager && (
          <SideTabButton
            isActive={activeTab === 'hiring-manager'}
            onClick={() => onTabChange('hiring-manager')}
            icon={Handshake}
            label={strings.benefits.tabs.hiringManagers}
            ariaControls='hiring-manager-panel'
          />
        )}
      </div>
    </div>
  )
}
