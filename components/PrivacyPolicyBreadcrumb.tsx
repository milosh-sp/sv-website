import { strings } from '@/lib/strings'
import { Breadcrumb } from './ui/Breadcrumb'

export function PrivacyPolicyBreadcrumb() {
  return (
    <Breadcrumb
      items={[
        {
          name: strings.footer.links.privacyPolicy,
          url: '/privacy-policy',
          current: true,
        },
      ]}
    />
  )
}
