import { FC } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import MainLayout from '@/components/layouts/MainLayout';
import useRoutesConfig from '@/hooks/useRoutesConfig';
import useAuth from '@/redux/services/auth/useAuth';

import { routes } from '@/resources/routes/common';

const disabledPages = [routes.authorization];

const AppRouter: FC = () => {
  const location = useLocation();
  const routesConfig = useRoutesConfig();
  const route = useRoutes(routesConfig);

  const { isAuthorized } = useAuth();

  const hasDisabledPage = disabledPages.includes(location.pathname);

  if (!isAuthorized && !hasDisabledPage) {
    return <Navigate to={routes.authorization} replace />;
  }

  if (!route) {
    return <Navigate to={routes.root} replace />;
  }

  if (hasDisabledPage) return route;

  return <MainLayout>{route}</MainLayout>;
};

export default AppRouter;
