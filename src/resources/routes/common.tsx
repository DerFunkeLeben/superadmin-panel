import { Navigate, RouteObject } from 'react-router-dom';

import AuthorizationPage from '@/pages/AuthorizationPage';

import ProfilePage from '@/pages/profile';

const routes = {
  root: '/',
  authorization: '/authorization',
  profile: '/profile',
};

const pagesCommon: Record<keyof typeof routes, RouteObject> = {
  root: {
    path: routes.root,
    element: <Navigate replace to={routes.profile} />,
  },
  profile: {
    path: routes.profile,
    element: <ProfilePage />,
  },
  authorization: {
    path: routes.authorization,
    element: <AuthorizationPage />,
  },
};

export { routes, pagesCommon };
