import { forTalentPageSections } from '@/lib/navigationData'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(
  pageSeoConfig['/for-talent-cv2.0']
)

export default function ForTalentPage() {
  return (
    <>
      {forTalentPageSections.map(({ id, Component, props }) => (
        <Component key={id} id={id} {...(props ?? {})} />
      ))}
    </>
  )
}
