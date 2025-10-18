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

export function Process() {
  const [activeTab, setActiveTab] = useState('candidate')

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
    <section id='process' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            {strings.process.heading}
          </h2>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto text-pretty'>
            {strings.process.description}
          </p>
        </div>

        <div className='flex justify-center mb-8'>
          <div className='flex bg-gray-100 rounded-lg p-1'>
            <button
              type='button'
              onClick={() => setActiveTab('candidate')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'candidate'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {strings.process.tabs.members}
            </button>
            <button
              type='button'
              onClick={() => setActiveTab('vetter')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'vetter'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {strings.process.tabs.techProfessionals}
            </button>
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          {activeTab === 'vetter' && (
            <div className='animate-fade-in-scale'>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {vetterSteps.map((step, _index) => (
                  <div key={step.title} className='text-center p-6'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <step.icon className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold text-gray-900 mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidate' && (
            <div className='animate-fade-in-scale'>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {candidateSteps.map((step, _index) => (
                  <div key={step.title} className='text-center p-6'>
                    <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <step.icon className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='font-semibold text-gray-900 mb-3'>
                      {step.title}
                    </h3>
                    <p className='text-gray-600 text-sm'>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
