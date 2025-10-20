'use client'

import { useState } from 'react'
import {
  ClipboardList,
  Video,
  MessageCircle,
  DollarSign,
  FileText,
  Brain,
  CheckCircle,
} from 'lucide-react'
import { strings } from '@/lib/strings'
import type { UserType } from '@/types/FormData.types'
import { HeaderAndButtons } from '../ui/HeaderAndButtons'
import { StepsGrid } from '../ui/Steps'

const guruMemberSteps = strings.process.techProfessionalSteps.map(
  (step, index) => ({
    ...step,
    icon: [ClipboardList, Video, MessageCircle, DollarSign][index],
  })
)

const memberSteps = strings.process.memberSteps.map((step, index) => ({
  ...step,
  icon: [FileText, Brain, Video, CheckCircle][index],
}))

export function ProcessSection() {
  const [activeTab, setActiveTab] = useState<UserType>('member')

  return (
    <HeaderAndButtons
      activeTab={activeTab}
      onTabChange={setActiveTab}
      heading={strings.process.heading}
      description={strings.process.description}
      sectionId='process'
      className='py-20 bg-white'
      contentClassName='max-w-4xl'
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
