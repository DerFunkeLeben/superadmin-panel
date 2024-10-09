import { ChangeEvent, FC, HTMLInputTypeAttribute, KeyboardEventHandler, useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export type FormTextInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  isCapitalize?: boolean;
  isMultiline?: boolean;
  isDisabled?: boolean;
  isNumber?: boolean;
  isRightAlign?: boolean;
  isFractionalNumber?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  fieldValue?: string | number;
  isFullName?: boolean;
  size?: 'small' | 'medium';
  variant?: 'outlined' | 'standard';
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

const FormTextInput: FC<FormTextInputProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    type,
    autoComplete,
    isCapitalize,
    isMultiline = false,
    isDisabled = false,
    isNumber = false,
    isFractionalNumber = false,
    isRightAlign = false,
    defaultValue,
    fieldValue,
    isFullName,
    size = 'medium',
    variant = 'outlined',
    onKeyDown,
  } = props;

  const control = useFormContext();

  const numberProps = useMemo(() => {
    if (isNumber) {
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/[^\d]/gm, '');
        },
      };
    }

    if (isFractionalNumber) {
      return {
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          e.target.value = e.target.value.replace(/^\.|[^\d+\\.]/gm, '');

          e.target.value = e.target.value.replace(/\.{2,}/gm, '.');
          e.target.value = e.target.value.replace(/(\..*)\./gm, '$1');
          e.target.value = e.target.value.replace(/(\d+\.\d{0,2}).*/gm, '$1');
        },
      };
    }

    return {};
  }, [isNumber, isFractionalNumber]);

  return (
    <Controller
      name={name}
      control={control.control}
      render={({ field: { ref, ...field }, fieldState: { error } }) => {
        if (fieldValue) {
          field.value = field.value?.[fieldValue] || '';
        }
        if (isFullName)
          field.value = [field.value.lastName, field.value.firstName, field.value.middleName]
            .filter((item) => item)
            .join(' ');
        return (
          <TextField
            {...field}
            multiline={isMultiline}
            inputRef={ref}
            error={Boolean(error)}
            type={type}
            disabled={isDisabled}
            placeholder={placeholder}
            label={label}
            fullWidth
            variant={variant}
            helperText={error?.message}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            size={size}
            onKeyDown={onKeyDown}
            inputProps={{
              style: {
                textTransform: isCapitalize ? 'capitalize' : 'unset',
                textAlign: isRightAlign ? 'right' : 'unset',
              },
              ...numberProps,
            }}
          />
        );
      }}
    />
  );
};
export default FormTextInput;
