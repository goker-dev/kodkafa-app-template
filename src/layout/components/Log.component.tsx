import { ErrorType } from '@/types/error.type';
import { useTranslation } from 'react-i18next';

export default function Log({ errors }: { errors: ErrorType[] }) {
  const { t } = useTranslation();
  return (
    <div
      className={
        'z-50 fixed top-0 left-0 w-full h-full bg-black/80 text-white/80 p-2 font-mono text-sm overflow-auto'
      }
      style={{ backgroundSize: '200% 400%' }}
    >
      {errors.map(({ status, name, message, stack, method, path, timestamp }, k) => (
        <div className='border-b pb-2 border-white/30' key={k}>
          <div className='flex flex-col'>
            <div className='pt-2 text-xs'>
              {timestamp} <strong>{method}</strong>:{path}
            </div>
            <div className='flex gap-2'>
              <div className='font-semibold'>{status}</div>
              <div className='font-light'>{name}</div>
              <div className='font-light '>{message}</div>
            </div>
          </div>
          <div className='pt-2 text-xs font-mono'>
            <label className='font-semibold'>{t('Stack:')}</label>
            <pre className=' '>{stack}</pre>
          </div>
        </div>
      ))}
    </div>
  );
}
