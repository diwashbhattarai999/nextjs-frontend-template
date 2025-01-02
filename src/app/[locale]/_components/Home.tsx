'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

const FloatingIcons = dynamic(() => import('./FloatingIcons'), { ssr: false });

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-semibold'>{t('welcome')}</h1>
        <p className='max-w-lg text-sm'>{t('description')}</p>
      </div>

      <div className='flex items-center gap-3'>
        <LocaleSwitcher />

        <Link href='/about'>
          <Button>{t('getStarted')}</Button>
        </Link>
      </div>

      <FloatingIcons />
    </div>
  );
}
