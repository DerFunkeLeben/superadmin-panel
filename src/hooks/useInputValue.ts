import { useCallback, useState } from 'react';

import { useDebounceValue } from './useDebounceValue';

import { TOnInputChangeFn } from '@/components/inputs/_AppInputSelect/types';

export function useInputValue() {
  const [inputValue, setInputValue] = useState<string>('');

  const debouncedInputValue = useDebounceValue(inputValue, 300);

  const onInputChange: TOnInputChangeFn = useCallback((_, newInputValue) => {
    setInputValue(newInputValue);
  }, []);

  return {
    inputValue,
    debouncedInputValue,
    onInputChange,
  };
}
