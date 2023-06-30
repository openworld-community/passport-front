import { RootLayout } from '@m/base/RootLayout';
import { ErrorPage } from '@m/errors/ErrorPage';
import { LoginLayout } from '@m/login/LoginLayout';
import { PasswordForget } from '@m/password-forget/PasswordForget';
import { SignUpLayout } from '@m/sign-up/SignUpLayout';
import { createBrowserRouter } from 'react-router-dom';

export const routerInstance = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'sign-up',
          element: <SignUpLayout />,
        },
        {
          path: 'login',
          element: <LoginLayout />,
        },
        {
          path: 'password-forget',
          element: <PasswordForget />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
