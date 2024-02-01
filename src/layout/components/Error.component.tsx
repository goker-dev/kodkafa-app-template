import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorType } from '@/types/error.type.ts';

export default function Error({ status, name, message, stack, method, path, expended }: ErrorType) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  // console.log({ message });

  return (
    <div
      className={`px-5 py-3 border-2 rounded-md max-w-full lg:w-2/3 mx-auto
        flex flex-col
        ${status >= 500 || (status === 0 && 'border-red-500/80 bg-red-200/90 dark:text-black')}
        ${status < 500 && status >= 400 && 'border-amber-500/80 bg-amber-200/90'}
        ${status < 400 && status >= 100 && 'border-gray-500/80 bg-white/90 dark:bg-black/80'}
        `}
    >
      <div className='flex space-x-2 justify-between text-sm' onClick={() => setShow(!show)}>
        <div className='flex flex-wrap sm:flex-nowrap gap-2 items-center'>
          {status > 0 && <div className='font-semibold text-red-800'>{status}</div>}
          <div className='font-light  text-red-800'>{name}</div>
          <div className='font-light '>{message}</div>
        </div>
      </div>
      {(expended || show) && (
        <div className='pt-2 text-xs font-mono'>
          <label className='font-semibold'>{t('Stack:')}</label>
          <pre className=' overflow-auto'>{stack}</pre>
          {method && (
            <div className='pt-2'>
              <strong>{method}</strong>:{path}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
