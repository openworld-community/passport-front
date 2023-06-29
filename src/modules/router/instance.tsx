import { RootLayout } from '@m/base/RootLayout';
import { PasswordForget } from '@m/passwordForget/PasswordForget';
import { ErrorPage } from '@core/errors/ErrorPage';
import { LoginLayout } from '@m/login/LoginLayout';
import { SignUpLayout } from '@m/sign-up/SignUpLayout';
import { createBrowserRouter } from 'react-router-dom';
export const routerInstance = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <LoginLayout />,
      },
      {
        path: '/sign-up',
        element: <SignUpLayout />,
      },
      {
        path:'/password-forget',
        element:<PasswordForget/>

      }
    ],
  },
]);
