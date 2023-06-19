import { RootLayout } from '@m/base/RootLayout';
import { ErrorPage } from '@m/errors/ErrorPage';
import { SignUpLayout } from '@m/sign-up/SignUpLayout';
import { createBrowserRouter } from 'react-router-dom';

export const routerInstance = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'sign-up',
        element: <SignUpLayout />,
      },
    ],
  },
]);
