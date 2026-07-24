'use client'

import { useState } from 'react'
import { FaqList } from '@/components/organisms/FaqList'
import { SectionWrapper } from '@/components/templates/SectionWrapper'
import { strings } from '@/lib/strings'
import type { FaqPageSectionProps } from '@/types/FaqPageSection.types'
import type { UserType } from '@/types/FormData.types'
import { TwoSidesButtons } from '@/components/molecules/TwoSidesButtons'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'

export function FaqPageSectionClient({
  id,
  variant = 'companies',
}: FaqPageSectionProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<UserType>(
    variant === 'talent' ? 'member' : 'hiring-manager'
  )
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const memberFaqs = strings.faq.members
  const verifierFaqs = strings.faq.verifiers
  const hiringManagerFaqs = strings.faq.hiringManagers

  return (
    <SectionWrapper
      id={id}
      className={cn('py-10 bg-gray-50 flex flex-col items-center')}
    >
      {variant === 'talent' && (
        <TwoSidesButtons activeTab={activeTab} onTabChange={setActiveTab} />
      )}
      <div className={cn('container px-4 flex flex-col items-center')}>
        <div className={cn('max-w-3xl flex flex-col items-center')}>
          {variant === 'talent' && activeTab === 'member' && (
            <FaqList
              faqs={memberFaqs}
              heading={strings.faq.membersHeading}
              headingId='members-faq-heading'
              openItems={openItems}
              onToggle={toggleItem}
              idPrefix='member'
            />
          )}

          {variant === 'talent' && activeTab === 'guru' && (
            <FaqList
              faqs={verifierFaqs}
              heading={strings.faq.verifiersHeading}
              headingId='verifiers-faq-heading'
              openItems={openItems}
              onToggle={toggleItem}
              idPrefix='verifier'
              indexOffset={memberFaqs.length}
            />
          )}

          {variant === 'companies' && (
            <FaqList
              faqs={hiringManagerFaqs}
              heading={strings.faq.hiringManagersHeading}
              headingId='hiring-managers-faq-heading'
              openItems={openItems}
              onToggle={toggleItem}
              idPrefix='hiring-manager'
            />
          )}

          <Button
            onClick={() => router.push('/contact')}
            variant='hero-blue'
            size='lg'
            className={cn(
              'h-14 px-8 text-base rounded-lg font-semibold animate-fade-in-up'
            )}
            type='button'
          >
            {strings.faq.contactUsButton}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
