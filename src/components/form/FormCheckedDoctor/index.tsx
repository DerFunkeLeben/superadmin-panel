import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export type FormCheckedDoctorProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

const FormCheckedDoctor: FC<FormCheckedDoctorProps> = (props) => {
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
              <Checkbox
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
export default FormCheckedDoctor;
