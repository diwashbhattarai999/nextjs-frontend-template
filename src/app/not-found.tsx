'use client';

import Link from 'next/link';

import { Search } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';

import '@/styles/globals.css';

export default function NotFound() {
  return (
    <html lang='en'>
      <body>
        <div className='flex h-screen w-full flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-md text-center'>
            <Search className='mx-auto h-12 w-12 text-accent-foreground' />
            <h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
              404 Not Found
            </h1>
            <p className='mt-4 text-muted-foreground'>
              Sorry, we couldn’t find the page you were looking for. Please
              check the URL in the address bar and try again.
            </p>
            <div className='mt-6'>
              <Link
                className={buttonVariants({ variant: 'default', size: 'lg' })}
                href='/'
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
