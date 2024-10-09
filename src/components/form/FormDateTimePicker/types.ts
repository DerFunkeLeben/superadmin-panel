import { AppDateTimePickerProps } from '@/components/inputs/AppDateTimePicker/types';

export interface FormDatePickerProps extends Omit<AppDateTimePickerProps, 'value' | 'onChange'> {
  name: string;
}
