import { lazy } from 'react';

const UsersCreatePage = lazy(() => import('@/pages/users/CityCreatePage'));
const UsersEditPage = lazy(() => import('@/pages/users/CityEditPage'));
const UsersListPage = lazy(() => import('@/pages/users/UsersListPage'));

import { pagesCommon, routesCommon } from './common';
import { generateRoutesPages } from './utils';

const { routes: routesUsers, pages: pagesUsers } = generateRoutesPages('/users', {
  list: <UsersListPage />,
  create: <UsersCreatePage />,
  edit: <UsersEditPage />,
});

const routes = { ...routesCommon, users: routesUsers };

const pages = [...Object.values(pagesCommon), pagesUsers];

export { routes, pages };
