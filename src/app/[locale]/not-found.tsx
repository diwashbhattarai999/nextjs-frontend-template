import { Search } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
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
            className={buttonVariants({ variant: 'default', size: 'lg' })}
            href='/'
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
