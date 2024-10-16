import { Navigate, RouteObject } from 'react-router-dom';

import { TComponentsConfig } from '../types';

export const generateRoutesPages = (rootUrl: string, Components: TComponentsConfig) => {
  const routes: Record<string, any> = {
    root: rootUrl,
    list: `${rootUrl}/list`,
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
        path: `edit/:id`,
        element: Components.edit,
      },
    ],
  };

  if (Components.create) {
    routes.create = `${rootUrl}/create`;

    pages.children?.push({
      path: 'create',
      element: Components.create,
    });
  }

  return { routes, pages };
};
