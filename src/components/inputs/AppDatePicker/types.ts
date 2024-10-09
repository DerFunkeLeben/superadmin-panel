import { CalendarPickerView } from '@mui/lab';

export interface AppDatePickerProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
  label: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isReadOnly?: boolean;
  views?: CalendarPickerView[];
  onCloseHandler?: () => void;
}
