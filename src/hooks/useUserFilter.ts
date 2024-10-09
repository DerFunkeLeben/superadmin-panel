import { useState } from 'react';

import { TInputSelectValue } from '@/components/inputs/_AppInputSelect/types';
import { AnyEntity } from '@/redux/types';
import { UserDto } from '@/types/api/users';

const useUserFilter = <T extends AnyEntity = UserDto>() => {
  const [userFilter, setUserFilter] = useState<T | null | undefined>();

  const handleUserFilter = (value?: TInputSelectValue<T, false>) => {
    setUserFilter(value);
  };

  return {
    userFilter,
    handleUserFilter,
  };
};

export default useUserFilter;
