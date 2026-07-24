import type { Metadata } from 'next'
import { NotFoundContent } from '@/components/templates/NotFoundContent'
import { strings } from '@/lib/strings'

export const metadata: Metadata = {
  title: strings.errorPages.notFound.title,
}

export default function NotFound() {
  return <NotFoundContent />
}
