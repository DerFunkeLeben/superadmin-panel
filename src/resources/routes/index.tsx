import { lazy } from 'react';

const UsersEditPage = lazy(() => import('@/pages/users/UsersEditPage'));
const UsersListPage = lazy(() => import('@/pages/users/UsersListPage'));

import { pagesCommon, routesCommon } from './common';
import { generateRoutesPages } from './utils';

const { routes: routesUsers, pages: pagesUsers } = generateRoutesPages('/users', {
  list: <UsersListPage />,
  edit: <UsersEditPage />,
});

const routes = { ...routesCommon, users: routesUsers };

const pages = [...Object.values(pagesCommon), pagesUsers];

export { routes, pages };
