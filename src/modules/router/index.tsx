import { RouterProvider } from 'react-router-dom';
import { routerInstance } from './instance';

export const Router = () => <RouterProvider router={routerInstance} />;
