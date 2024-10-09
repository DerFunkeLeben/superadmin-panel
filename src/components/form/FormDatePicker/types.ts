import { AppDatePickerProps } from '@/components/inputs/AppDatePicker/types';

export interface FormDatePickerProps extends Omit<AppDatePickerProps, 'value' | 'onChange'> {
  name: string;
  onClose?: () => void;
  minDate?: string;
  maxDate?: string;
}
