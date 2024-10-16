import { AppInputSelectValueProps } from '../_AppInputSelect/types';
import { Entity } from '@/types/api/common';

export type SelectOption = string | Entity;

export interface AppLabelSelectProps<Multiple>
  extends AppInputSelectValueProps<SelectOption, Multiple> {
  options: SelectOption[];
}
