import { AppInputSelectValueProps } from '../_AppInputSelect/types';
import { AnyEntity } from '@/redux/types';

export type SelectOption = string | AnyEntity;

export interface AppLabelSelectProps<Multiple>
  extends AppInputSelectValueProps<SelectOption, Multiple> {
  options: SelectOption[];
}
