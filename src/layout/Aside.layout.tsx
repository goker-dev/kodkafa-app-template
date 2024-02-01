import { Outlet, useNavigate } from 'react-router-dom';

type Props = {
  className: string;
};
export function AsideLayout({ className }: Props) {
  const navigate = useNavigate();
  return (
    <aside
      className={`fixed top-0 right-0 bottom-0 max-w-lg sm:w-1/2 lg:w-1/3 border-l shadow z-40 mt-16 mb-14
    animate-aside-from-right bg-white dark:bg-zinc-800 dark:border-l-zinc-900
     ${className}`}
    >
      <span
        className='absolute block right-1 top-1 p-1 cursor-pointer
      hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-full
      '
        onClick={() => navigate(-1)}
      >
        <i className='icon-cancel' />
      </span>
      <Outlet />
    </aside>
  );
}
