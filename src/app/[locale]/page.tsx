import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage'); // This is for client components
  // const t = await getTranslations('HomePage'); // This is for server components

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href='/about'>{t('about')}</Link>

      <LocaleSwitcher />
    </div>
  );
}
