import { Outlet } from 'react-router-dom';
import Header from '@/layout/components/Header.component';
import Footer from '@/layout/components/Footer.component';

export function AppLayout() {
  return (
    <>
      <Header className='grow-0 px-4' />
      <main className='grow flex overflow-y-auto'>
        <Outlet />
      </main>
      <Footer className='grow-0' />
    </>
  );
}
