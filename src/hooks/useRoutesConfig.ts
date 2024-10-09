import { RouteObject } from 'react-router-dom';

import { pagesCities } from '@/resources/routes/cities';
import { pagesCommon } from '@/resources/routes/common';

const commonRoutes = [
  pagesCommon.root,
  pagesCommon.authorization,
  pagesCommon.profile,
  pagesCities,
];

const useRoutesConfig = (): RouteObject[] => {
  return commonRoutes;
};

export default useRoutesConfig;
