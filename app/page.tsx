import { homePageSections } from '@/lib/navigationData'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'

export const metadata: Metadata = generateMetadata(pageSeoConfig['/'])

export default function Home() {
  return (
    <>
      {homePageSections.map(({ id, Component, props }) => (
        <Component key={id} id={id} {...(props ?? {})} />
      ))}
    </>
  )
}
