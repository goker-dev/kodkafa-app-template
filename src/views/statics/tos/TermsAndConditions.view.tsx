import { useTranslation } from 'react-i18next';

import { Divider, ErrorBoundary } from '@/components';
export { ErrorBoundary };
export function Component() {
  const { t } = useTranslation();

  return (
    <div className='py-8 px-4 w-full xl:container xl:px-0 mx-auto'>
      <Divider align='left'>
        <h1 className='text-lg font-semibold uppercase'>{t('Terms & Conditions')}</h1>
      </Divider>
      <div className='flex my-8'>
        <p>{t('This is a sample page.')}</p>
      </div>
    </div>
  );
}
