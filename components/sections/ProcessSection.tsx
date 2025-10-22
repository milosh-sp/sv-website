'use client'

import { useState } from 'react'
import { strings } from '@/lib/strings'
import type { UserType } from '@/types/FormData.types'
import { HeaderAndButtons } from '../ui/HeaderAndButtons'
import { StepsGrid } from '../ui/Steps'

// Steps already have icons embedded in strings
const guruMemberSteps = strings.process.techProfessionalSteps
const memberSteps = strings.process.memberSteps

export function ProcessSection() {
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
      sectionId='process'
      className='py-20 bg-white'
    >
      {activeTab === 'member' && (
        <StepsGrid steps={memberSteps} columns={4} colorScheme='emerald' />
      )}
      {activeTab === 'guru' && (
        <StepsGrid steps={guruMemberSteps} columns={4} colorScheme='blue' />
      )}
    </HeaderAndButtons>
  )
}
