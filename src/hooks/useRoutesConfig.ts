import { RouteObject } from 'react-router-dom';

import { pages } from '@/resources/routes';

const useRoutesConfig = (): RouteObject[] => {
  return pages;
};

export default useRoutesConfig;
