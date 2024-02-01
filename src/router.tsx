import { createBrowserRouter } from 'react-router-dom';
import { ErrorView } from '@/views';
import { SystemLayout, AppLayout } from '@/layout';

const routes = createBrowserRouter([
  {
    element: <SystemLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            lazy: () => import('./views/landing/Landing.view'),
          },
          {
            path: 'about',
            lazy: () => import('./views/statics/about/About.view'),
          },
          {
            path: 'howto',
            lazy: () => import('./views/statics/howto/HowTo.view'),
          },
          {
            path: 'privacy',
            lazy: () => import('./views/statics/privacy/PrivacyPolicy.view'),
          },
          {
            path: 'tos',
            lazy: () => import('./views/statics/tos/TermsAndConditions.view.tsx'),
          },
          {
            path: 'cookies',
            lazy: () => import('./views/statics/cookies/CookiePolicy.view'),
          },
          {
            path: 'app',
            lazy: () => import('./views/application/Application.view'),
          },
          {
            path: '*',
            element: <ErrorView status={404} />,
          },
        ],
      },
    ],
  },
]);

export default routes;
