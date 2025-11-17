'use client'

import { useState } from 'react'
import { HeaderAndButtons } from '@/components/molecules/HeaderAndButtons'
import { StepsGrid } from '@/components/organisms/Steps'
import { strings } from '@/lib/strings'
import type { UserType } from '@/types/FormData.types'
import type { ProcessPageSectionProps } from '@/types/ProcessPageSection.types'
import { HeroButtons } from '../molecules/HeroButtons'
import { cn } from '@/lib/utils'

// Steps already have icons embedded in strings
const guruMemberSteps = strings.process.guruMembersteps
const memberSteps = strings.process.memberSteps

export function ProcessPageSection({ id }: ProcessPageSectionProps) {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  return (
    <HeaderAndButtons
      activeTab={activeTab}
      onTabChange={setActiveTab}
      heading={strings.process.heading}
      description={
        {
          member: strings.process.description.members,
          guru: strings.process.description.guruMembers,
        }[activeTab]
      }
      sectionId={id}
      className='py-20 bg-white'
    >
      {activeTab === 'member' && (
        <>
          <StepsGrid steps={memberSteps} columns={4} colorScheme='emerald' />
          <div
            className={cn(
              'flex justify-center align-center mt-10 animate-fade-in-up'
            )}
          >
            <HeroButtons showVerifier={false} />
          </div>
        </>
      )}
      {activeTab === 'guru' && (
        <>
          <StepsGrid steps={guruMemberSteps} columns={4} colorScheme='blue' />
          <div
            className={cn(
              'flex justify-center align-center mt-10 animate-fade-in-up'
            )}
          >
            <HeroButtons showCandidate={false} />
          </div>
        </>
      )}
    </HeaderAndButtons>
  )
}
