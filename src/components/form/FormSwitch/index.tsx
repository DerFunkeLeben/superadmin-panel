import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

export type FormSwitchProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

const FormSwitch: FC<FormSwitchProps> = (props) => {
  const { name, label, disabled } = props;

  const control = useFormContext();

  return (
    <Controller
      name={name}
      control={control.control}
      render={({ field }) => {
        return (
          <FormControlLabel
            control={
              <Switch
                disabled={disabled}
                onChange={() => field.onChange(!field.value)}
                checked={field.value}
              />
            }
            label={label}
          />
        );
      }}
    />
  );
};
export default FormSwitch;
