import { Loader } from '@/components';

export function LoadingFallback() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Loader />
    </div>
  );
}
