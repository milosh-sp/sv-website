import { strings } from '@/lib/strings'
import type { TwoSidesButtonsProps } from '@/types/TwoSidesButtons.types'

import { Award, CircleStar, Handshake } from 'lucide-react'
import { SideTabButton } from '@/components/molecules/SideButton'

export function TwoSidesButtons({
  activeTab,
  onTabChange,
  showHiringManager,
}: TwoSidesButtonsProps) {
  return (
    <div className='flex justify-center mb-12'>
      <div className='flex flex-col md:flex-row p-2.5 bg-muted/80 backdrop-blur-sm rounded-xl shadow-sm border border-border/50'>
        <SideTabButton
          isActive={activeTab === 'member'}
          onClick={() => onTabChange('member')}
          icon={CircleStar}
          label={strings.benefits.tabs.members}
        />
        <SideTabButton
          isActive={activeTab === 'guru'}
          onClick={() => onTabChange('guru')}
          icon={Award}
          label={strings.benefits.tabs.guruMembers}
        />
        {showHiringManager && (
          <SideTabButton
            isActive={activeTab === 'hiring-manager'}
            onClick={() => onTabChange('hiring-manager')}
            icon={Handshake}
            label={strings.benefits.tabs.hiringManagers}
          />
        )}
      </div>
    </div>
  )
}
