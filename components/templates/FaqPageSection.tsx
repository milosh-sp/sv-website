import { generateFaqSchema } from '@/lib/seo'
import { strings } from '@/lib/strings'
import type { FaqPageSectionProps } from '@/types/FaqPageSection.types'
import { FaqPageSectionClient } from '@/components/templates/FaqPageSectionClient'

export function FaqPageSection({
  id,
  variant = 'companies',
}: FaqPageSectionProps) {
  const visibleFaqs =
    variant === 'talent'
      ? [...strings.faq.members, ...strings.faq.verifiers]
      : [...strings.faq.hiringManagers]

  const faqSchema = generateFaqSchema(visibleFaqs)

  return (
    <>
      {/* ponytail: JSON-LD from trusted strings only; biome flags dangerouslySetInnerHTML */}
      <script
        type='application/ld+json'
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static FAQ schema from strings.ts
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqPageSectionClient id={id} variant={variant} />
    </>
  )
}
