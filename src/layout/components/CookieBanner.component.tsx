import { useState } from 'react';
import { Link } from 'react-router-dom';
import { storageLocal } from '@/utils/storage.utils';
import { useTranslation } from 'react-i18next';

export default function CookieBanner() {
  const { t } = useTranslation();
  const [cookies, setCookies] = useState(storageLocal.getItem('cookies'));
  const handleAccept = () => {
    storageLocal.setItem('cookies', 'true');
    setCookies('true');
  };
  return !cookies ? (
    <div className='absolute w-full h-full top left bg-black/60 z-50 flex items-end'>
      <div className='bg-white w-full' role='region' aria-label='Cookie banner'>
        <div
          role='alertdialog'
          aria-describedby='policy-text'
          aria-modal='true'
          aria-label={t('Cookies and use of our website2')}
          className='flex items-center justify-center'
        >
          <div className='xl:container md:p-6 p-4'>
            <div className='flex items-stretch flex-col sm:flex-row'>
              <div className='grow'>
                <h2 className='text-lg font-semibold mb-2 dark:text-black'>
                  {t('Cookies and use of our website')}
                </h2>
                <div className='text-stone-600'>
                  {t(
                    'We may use your information – collected through cookies and similar technologies - to improve your experience on our site, analyze how you use it and assist in our marketing efforts. You can always update your preferences via the Cookie Settings page. We will handle your personal information in line with our',
                  )}
                  <Link
                    to='/privacy'
                    aria-label={t('More information about your privacy')}
                    className='font-semibold mx-2'
                  >
                    {t('Privacy Policy')}
                  </Link>
                  {t('and')}
                  <Link
                    to='/cookies'
                    aria-label={t('More information about our cookie policy')}
                    className='font-semibold mx-2'
                  >
                    {t('Cookie policy')}
                  </Link>
                </div>
              </div>
              <div className='flex items-center sm:pl-4 justify-end'>
                <button onClick={handleAccept} className='button button-blue'>
                  {t('Accept')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
