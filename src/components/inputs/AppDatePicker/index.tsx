import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AppDatePickerProps } from '@/components/inputs/AppDatePicker/types';

const AppDatePicker = ({
  label,
  value,
  onChange,
  isDisabled = false,
  isReadOnly = false,
  ...restProps
}: AppDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...restProps}
        label={label}
        views={['day', 'month', 'year']}
        format='dd/MM/yyyy'
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        readOnly={isReadOnly}
        slots={{
          textField: TextField,
        }}
        slotProps={{ textField: { fullWidth: true, disabled: true } }}
      />
    </LocalizationProvider>
  );
};

export default AppDatePicker;
