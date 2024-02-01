import { useTranslation } from 'react-i18next';

export const useNavigation = (relation: 'main' | 'footer' = 'main') => {
  const { t } = useTranslation();
  if (relation === 'main')
    return [
      {
        text: t('About Us'),
        to: '/about',
      },
      {
        text: t('How To?'),
        to: '/howto',
      },
      {
        text: t('App'),
        to: '/app',
        icon: 'icon-brush',
      },
    ];
  if (relation === 'footer')
    return [
      {
        text: t('About Us'),
        to: '/about',
      },
      {
        text: t('How To?'),
        to: '/howto',
      },
      {
        text: t('Terms & Conditions'),
        to: '/tos',
      },
      {
        text: t('Privacy Policy'),
        to: '/privacy',
      },
      {
        text: t('Cookie Policy'),
        to: '/cookies',
      },
    ];
  else
    return [
      {
        text: t('Sample Nav'),
        to: '/',
      },
    ];
};
