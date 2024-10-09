import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { parseISO } from 'date-fns';

import AppDateTimePicker from '@/components/inputs/AppDateTimePicker';

import { FormDatePickerProps } from './types';

const FormDateTimePicker: FC<FormDatePickerProps> = (props) => {
  const { name, ...restProps } = props;

  const control = useFormContext();

  return (
    <Controller
      name={name}
      control={control.control}
      render={({ field, fieldState: { error } }) => {
        if (typeof field.value !== 'string') field.value = field.value.toISOString();
        return (
          <AppDateTimePicker
            value={parseISO(field.value)}
            onChange={field.onChange}
            error={error?.message}
            {...restProps}
          />
        );
      }}
    />
  );
};
export default FormDateTimePicker;
