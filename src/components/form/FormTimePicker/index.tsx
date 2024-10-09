import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField/index';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

export type FormTimePickerProps = {
  name: string;
  label?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  dependant?: boolean;
  onCloseHandler?: () => void;
};

const FormTimePicker: FC<FormTimePickerProps> = (props) => {
  const { name, label, isDisabled = false, onCloseHandler } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        field.value = new Date(Date.parse(field.value));
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              {...field}
              disabled={isDisabled}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
              label={label}
              orientation='landscape'
              format='HH:mm'
              slots={{
                textField: TextField,
              }}
              slotProps={{ textField: { fullWidth: true } }}
              onClose={onCloseHandler}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
export default FormTimePicker;
