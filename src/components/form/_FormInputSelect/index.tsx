import { Controller, useFormContext } from 'react-hook-form';

import { FormInputSelectProps } from './types';

const FormInputSelect = (props: FormInputSelectProps) => {
  const { name, multiple = false, renderInput, ...restProps } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const { value, onChange } = field;

        const inputProps = {
          value,
          onChange,
          error: error?.message,
          multiple,
          ...restProps,
        };

        const input = renderInput<typeof multiple>(inputProps);

        return <>{input}</>;
      }}
    />
  );
};
export default FormInputSelect;
