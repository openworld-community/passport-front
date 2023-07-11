import { RootLayout } from '@m/base/RootLayout';
import { ErrorPage } from '@m/errors/ErrorPage';
import { LoginLayout } from '@m/login/LoginLayout';
import { PasswordForget } from '@m/password-forget/PasswordForget';
import { PasswordReset } from '@m/password-reset/PasswordReset';
import { SignUpLayout } from '@m/sign-up/SignUpLayout';
import { createHashRouter } from 'react-router-dom';

export const routerInstance = createHashRouter([
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
      {
        path:'password-reset',
        element:<PasswordReset/>
      },
    ],
  },
]);
