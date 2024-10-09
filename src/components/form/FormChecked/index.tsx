import { FC, ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SxProps, Theme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export type FormCheckedProps = {
  name: string;
  label?: string | ReactNode;
  isOrdinary?: boolean;
  sx?: SxProps<Theme>;
};

const FormChecked: FC<FormCheckedProps> = ({ name, label, isOrdinary, sx }) => {
  const control = useFormContext();

  return (
    <Controller
      name={name}
      control={control.control}
      render={({ field, fieldState: { error } }) => {
        const isChecked = isOrdinary ? field.value : !field.value;
        return (
          <>
            <FormControlLabel
              control={
                <Checkbox onChange={() => field.onChange(!field.value)} checked={isChecked} />
              }
              label={label}
              color='text.secondary'
              sx={{
                color: error && 'red',
                '& a': {
                  color: error && 'red',
                },
                ...sx,
              }}
            />
          </>
        );
      }}
    />
  );
};
export default FormChecked;
