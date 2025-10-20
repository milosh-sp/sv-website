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
import { StepsGrid } from './ui/Steps'
import { HeaderAndButtons } from './ui/HeaderAndButtons'
import type { UserType } from '@/types/FormData.types'

const vetterSteps = strings.process.techProfessionalSteps.map(
  (step, index) => ({
    ...step,
    icon: [ClipboardList, Video, MessageCircle, DollarSign][index],
  })
)

const candidateSteps = strings.process.memberSteps.map((step, index) => ({
  ...step,
  icon: [FileText, Brain, Video, CheckCircle][index],
}))

export function Process() {
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
        <StepsGrid steps={candidateSteps} columns={4} colorScheme='emerald' />
      )}
      {activeTab === 'guru' && (
        <StepsGrid steps={vetterSteps} columns={4} colorScheme='blue' />
      )}
    </HeaderAndButtons>
  )
}
