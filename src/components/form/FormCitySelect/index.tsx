import { FC } from 'react';

import AppCitySelect from '@/components/inputs/AppCitySelect';
import FormInputSelect from '../_FormInputSelect';

import { AppCitySelectProps } from '@/components/inputs/AppCitySelect/types';
import { FormSelectPropsBase } from '@/types';

const FormCitySelect: FC<FormSelectPropsBase> = (props) => {
  return (
    <FormInputSelect
      {...props}
      renderInput={<M extends boolean>(inputProps: AppCitySelectProps<M>) => (
        <AppCitySelect<M> {...inputProps} />
      )}
    />
  );
};
export default FormCitySelect;
