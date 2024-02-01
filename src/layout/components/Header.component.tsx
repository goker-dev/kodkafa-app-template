import { NavLink } from 'react-router-dom';
// import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Localization, ThemeSwitch } from '@/components';
import { Logo } from '@/layout/components/Logo.component';
import { useNavigation } from '@/hooks';

interface Props {
  className: string;
}

export default function Header({ className = '' }: Props) {
  const { t } = useTranslation();
  const navigation = useNavigation('main');
  return (
    <header
      className={`z-40 h-16 flex flex-wrap sm:justify-center sm:flex-nowrap w-full bg-white shadow-sm border-b border-gray-200 dark:bg-zinc-900 dark:border-b-black/80 text-sm py-4 ${className}`}
    >
      <nav
        className='relative px-4 w-full xl:p-0 sm:flex sm:items-center sm:justify-between'
        aria-label={t('Global')}
      >
        <div className='flex items-center justify-between'>
          <NavLink
            className='text-xl font-semibold flex !text-gray-700'
            to='/'
            aria-label={t('Logo')}
          >
            <Logo className='h-10 dark:fill-amber-50' />
          </NavLink>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm'
              data-hs-collapse='#navbar-collapse-with-animation'
              aria-controls='navbar-collapse-with-animation'
              aria-label={t('Toggle navigation')}
            >
              <i className='icon-mobile' />
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'
        >
          <div className='flex flex-col gap-y-4 gap-x-0 ml-12 mt-5 sm:flex-row sm:items-center sm:gap-y-0 sm:gap-x-6 sm:mt-0 sm:pl-7'>
            {navigation.map(({ text, to, ...i }, k) => (
              <NavLink key={k} to={to}>
                {i?.icon && <i className={i.icon} />}
                {text}
              </NavLink>
            ))}
            {/*<button onClick={() => openModal()}>Show login modal</button>*/}
          </div>
        </div>

        <>
          <div className='whitespace-nowrap divide-x pl-2'>
            <ThemeSwitch />
          </div>
          <div className='whitespace-nowrap divide-x pl-2'>
            <Localization />
          </div>
        </>
      </nav>
    </header>
  );
}
