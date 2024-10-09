import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const CityCreatePage = lazy(() => import('@/pages/cities/CityCreatePage'));
const CityEditPage = lazy(() => import('@/pages/cities/CityEditPage'));
const CityListPage = lazy(() => import('@/pages/cities/CityListPage'));

const ROOT_CITIES_URL = '/cities';

const routesCities = {
  root: ROOT_CITIES_URL,

  detailTemplate: `detail/:id`,
  detail: (id: string) => `${ROOT_CITIES_URL}/detail/${id}`,

  listTemplate: `list`,
  list: `${ROOT_CITIES_URL}/list`,

  createTemplate: 'create',
  create: `${ROOT_CITIES_URL}/create`,

  editTemplate: `edit/:id`,
  edit: (id: number) => `${ROOT_CITIES_URL}/edit/${id}`,
};

const pagesCities: RouteObject = {
  path: ROOT_CITIES_URL,
  children: [
    {
      index: true,
      element: <Navigate to={routesCities.list} replace />,
    },
    {
      path: routesCities.listTemplate,
      element: <CityListPage />,
    },
    {
      path: routesCities.createTemplate,
      element: <CityCreatePage />,
    },
    {
      path: routesCities.editTemplate,
      element: <CityEditPage />,
    },
  ],
};

export { routesCities, pagesCities };
