import { lazy } from 'react';

const GroupsCreatePage = lazy(() => import('@/pages/groups/GroupsCreatePage'));
const GroupsEditPage = lazy(() => import('@/pages/groups/GroupsEditPage'));
const GroupsListPage = lazy(() => import('@/pages/groups/GroupsListPage'));
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

const { routes: routesGroups, pages: pagesGroups } = generateRoutesPages('/groups', {
  list: <GroupsListPage />,
  edit: <GroupsEditPage />,
  create: <GroupsCreatePage />,
});

const routes = {
  ...routesCommon,
  users: routesUsers,
  roles: routesRoles,
  groups: routesGroups,
};

const pages = [...Object.values(pagesCommon), pagesUsers, pagesRoles, pagesGroups];

export { routes, pages };
