import { ComponentProps, FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IMaskMixin } from 'react-imask';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';

export interface IInputMasked {
  name: string;
  isDisable?: boolean;
  mask?: string;
  label?: string;
  sx?: any;
  lazy?: boolean; //маска на фокусе, если true
}

const InternalMaskTextField = IMaskMixin((props) => {
  return <TextField {...(props as any)} />;
});

type MaskProps = ComponentProps<typeof InternalMaskTextField>;

const MaskTextField = (props: TextFieldProps & MaskProps) => {
  return <InternalMaskTextField {...props} />;
};

const InputMasked: FC<IInputMasked> = ({ name, mask = '', lazy, label, sx, isDisable = false }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const handlerKey = mask ? 'onAccept' : 'onChange';
        const handler = {
          [handlerKey]: onChange,
        };

        return (
          <MaskTextField
            value={value}
            {...handler}
            name={name}
            disabled={isDisable}
            helperText={error?.message}
            label={label}
            mask={mask}
            lazy={lazy}
            overwrite
            sx={sx}
            fullWidth
          />
        );
      }}
    />
  );
};
export default InputMasked;
