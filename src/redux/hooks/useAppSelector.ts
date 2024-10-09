import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppRootState } from '@/redux/types';

export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
