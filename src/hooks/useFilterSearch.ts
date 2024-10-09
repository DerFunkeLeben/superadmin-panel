import { ChangeEvent, useState } from 'react';

import { useDebounceValue } from './useDebounceValue';

import { IFilterSearch } from '@/types';

export function useFilterSearch(field = 'name', initialValue = {}) {
  const [filterSearch, setFilterSearch] = useState<IFilterSearch>(initialValue);

  const debouncedInputValue = useDebounceValue(filterSearch, 300);

  const handleFilterSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFilterSearch((prev) => ({ ...prev, [field]: e.target.value }));
  };
  return {
    filterSearch: debouncedInputValue,
    handleFilterSearch,
  };
}
