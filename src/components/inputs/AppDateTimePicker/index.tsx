import TextField from '@mui/material/TextField';
import { MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AppDateTimePickerProps } from './types';

const AppDateTimePicker = ({
  label,
  value,
  onChange,
  isDisabled = false,
  error,
  ...restProps
}: AppDateTimePickerProps) => {
  const color = error ? 'error' : 'primary';
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDateTimePicker
        {...restProps}
        label={label}
        format='dd/MM/yyyy HH:mm'
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        slots={{
          textField: TextField,
        }}
        slotProps={{
          textField: {
            fullWidth: true,
            helperText: error,
            color,
            FormHelperTextProps: { color },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default AppDateTimePicker;
