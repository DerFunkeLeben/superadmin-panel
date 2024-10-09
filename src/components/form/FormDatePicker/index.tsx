import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { parseISO } from 'date-fns';

import AppDatePicker from '@/components/inputs/AppDatePicker';

import { FormDatePickerProps } from './types';

const FormDatePicker: FC<FormDatePickerProps> = (props) => {
  const { name, ...restProps } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;
        const parsedValue = value && typeof value === 'string' ? parseISO(value) : value;

        return <AppDatePicker value={parsedValue || null} onChange={onChange} {...restProps} />;
      }}
    />
  );
};
export default FormDatePicker;
