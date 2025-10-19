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
import { StepsGrid } from './ui/steps'
import { HeaderAndButtons } from './ui/header-and-buttons'

export function Process() {
  const [activeTab, setActiveTab] = useState<'candidate' | 'vetter'>(
    'candidate'
  )

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
      {activeTab === 'candidate' && (
        <StepsGrid steps={candidateSteps} columns={4} colorScheme='emerald' />
      )}
      {activeTab === 'vetter' && (
        <StepsGrid steps={vetterSteps} columns={4} colorScheme='blue' />
      )}
    </HeaderAndButtons>
  )
}
