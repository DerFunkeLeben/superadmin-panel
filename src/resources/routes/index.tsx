import { lazy } from 'react';

const RolesCreatePage = lazy(() => import('@/pages/roles/RolesCreatePage'));
const RolesEditPage = lazy(() => import('@/pages/roles/RolesEditPage'));
const RolesListPage = lazy(() => import('@/pages/roles/RolesListPage'));
const UsersEditPage = lazy(() => import('@/pages/users/UsersEditPage'));
const UsersListPage = lazy(() => import('@/pages/users/UsersListPage'));

import { pagesCommon, routesCommon } from './common';
import { generateRoutesPages } from './utils';

const { routes: routesUsers, pages: pagesUsers } = generateRoutesPages('/users', {
  list: <UsersListPage />,
  edit: <UsersEditPage />,
});

const { routes: routesRoles, pages: pagesRoles } = generateRoutesPages('/roles', {
  list: <RolesListPage />,
  edit: <RolesEditPage />,
  create: <RolesCreatePage />,
});

const routes = {
  ...routesCommon,
  users: routesUsers,
  roles: routesRoles,
};

const pages = [...Object.values(pagesCommon), pagesUsers, pagesRoles];

export { routes, pages };
