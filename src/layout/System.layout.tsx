import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Version from '@/layout/components/Version.component';
import CookieBanner from '@/layout/components/CookieBanner.component';
import { Analytics } from '@vercel/analytics/react';
import { LoadingFallback } from '@/layout/Loading.fallback.tsx';

export function SystemLayout() {
  return (
    <div className='h-full min-h-screen flex flex-col'>
      <Suspense fallback={<LoadingFallback />}>
        <Outlet />
        <CookieBanner />
        <Version />
        <Analytics />
      </Suspense>
    </div>
  );
}
