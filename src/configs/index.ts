import { Metadata } from 'next';

import { getBaseUrl } from '@/utils/helpers';

export const siteConfig: Metadata = {
  title: 'nextjs-frontend-template',
  metadataBase: new URL(getBaseUrl()),
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],

  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Diwash Bhattarai', url: 'https://diwashb.com.np' }],
  description: 'Next.js frontend template',

  openGraph: {
    title: 'nextjs-frontend-template',
    description: 'Next.js frontend template',
    images: [
      {
        url: '/og-image.png',
        alt: 'nextjs-frontend-template',
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    'nextjs',
    'frontend',
    'template',
    'typescript',
    'react',
    'tailwindcss',
    'eslint',
    'prettier',
  ],
} as const;
