import { Navigate, RouteObject } from 'react-router-dom';

import { TComponentsConfig } from '../types';

export const generateRoutesPages = (rootUrl: string, Components: TComponentsConfig) => {
  const routes = {
    root: rootUrl,
    list: `${rootUrl}/list`,
    create: `${rootUrl}/create`,
    edit: (id: string) => `${rootUrl}/edit/${id}`,
  };

  const pages: RouteObject = {
    path: rootUrl,
    children: [
      {
        index: true,
        element: <Navigate to={routes.list} replace />,
      },
      {
        path: 'list',
        element: Components.list,
      },
      {
        path: 'create',
        element: Components.create,
      },
      {
        path: `edit/:id`,
        element: Components.edit,
      },
    ],
  };

  return { routes, pages };
};
