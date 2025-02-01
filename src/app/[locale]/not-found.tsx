import { Search } from 'lucide-react';

import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className='bg-background flex min-h-[100dvh] w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-md text-center'>
        <Search className='text-accent-foreground mx-auto h-12 w-12' />
        <h1 className='text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>
          404 Not Found
        </h1>
        <p className='text-muted-foreground mt-4'>
          Sorry, we couldn’t find the page you were looking for. It may have
          been moved or deleted.
        </p>
        <div className='mt-6'>
          <Link
            className='bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-xs transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden'
            href='/'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
