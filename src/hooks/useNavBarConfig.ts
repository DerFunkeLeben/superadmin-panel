import { useMemo } from 'react';

import useUserInfo from '@/hooks/useUserInfo';

import filterBoolean from '@/utils/filterBoolean';
import navBar from '@/resources/navbar';
import { NavBarItem } from '@/resources/navbar/types';

const useNavBarConfig = () => {
  const { userInfo } = useUserInfo();

  return useMemo(() => {
    const config = [].filter(filterBoolean);

    return config as NavBarItem[];
  }, [userInfo?.role]);
};

export default useNavBarConfig;
