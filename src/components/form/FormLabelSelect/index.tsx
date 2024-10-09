import AppLabelSelect from '@/components/inputs/AppLabelSelect';
import FormInputSelect from '../_FormInputSelect';

import {
  FormLabelSelectProps,
  LabelSelectInputProps,
} from '@/components/form/FormLabelSelect/types';

const FormLabelSelect = (props: FormLabelSelectProps) => {
  const { options, ...restProps } = props;

  return (
    <FormInputSelect
      {...restProps}
      renderInput={<M extends boolean>(inputProps: LabelSelectInputProps<M>) => (
        <AppLabelSelect<M> {...inputProps} options={options} />
      )}
    />
  );
};
export default FormLabelSelect;
