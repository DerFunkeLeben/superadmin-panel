import { AppLabelSelectProps, SelectOption } from '@/components/inputs/AppLabelSelect/types';
import { FormSelectPropsBase } from '@/types';

export interface FormLabelSelectProps extends FormSelectPropsBase {
  options: SelectOption[];
}

export type LabelSelectInputProps<M> = Omit<AppLabelSelectProps<M>, 'options'>;
