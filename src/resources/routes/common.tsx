import { Navigate, RouteObject } from 'react-router-dom';

import AuthorizationPage from '@/pages/authorization';
import ProfilePage from '@/pages/profile';

const routesCommon = {
  root: '/',
  authorization: '/authorization',
  profile: '/profile',
};

const pagesCommon: Record<keyof typeof routesCommon, RouteObject> = {
  root: {
    path: routesCommon.root,
    element: <Navigate replace to={routesCommon.profile} />,
  },
  profile: {
    path: routesCommon.profile,
    element: <ProfilePage />,
  },
  authorization: {
    path: routesCommon.authorization,
    element: <AuthorizationPage />,
  },
};

export { routesCommon, pagesCommon };
