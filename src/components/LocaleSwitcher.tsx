'use client';

import type { ChangeEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

import { routing, usePathname } from '@/i18n/routing';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
    router.push(`/${event.target.value}${pathname}`);
    router.refresh();
  };

  return (
    <select
      aria-label='lang-switcher'
      className='bg-gray-500'
      defaultValue={locale}
      onChange={handleChange}
    >
      {routing.locales.map(locale => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
