import { CSSProperties } from 'react';

import { AppInputSelectValueProps } from '../_AppInputSelect/types';
import { CityRecord } from '@/types/api/users';

export interface AppCitySelectProps<Multiple>
  extends AppInputSelectValueProps<CityRecord, Multiple> {
  style?: CSSProperties;
}
