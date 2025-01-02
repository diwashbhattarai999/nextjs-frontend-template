import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Toaster } from 'sonner';

import TanstackQueryProvider from '@/components/providers/tanstack-provider';
import { siteConfig } from '@/configs';
import { routing, TLocales } from '@/i18n/routing';

import '@/styles/globals.css';

// Importing the `Geist` and `Geist_Mono` font families
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// The `metadata` object is used to provide metadata to the client
export const metadata: Metadata = siteConfig;

/**
 * The `RootLayout` component is a layout component that wraps all of the pages
 */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: TLocales }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <TanstackQueryProvider>
            {children}

            <Toaster richColors position='bottom-right' />
          </TanstackQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
