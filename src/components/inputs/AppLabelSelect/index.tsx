import AppInputSelect from '@/components/inputs/_AppInputSelect';
import { useInputValue } from '@/hooks/useInputValue';

import { AppLabelSelectProps, SelectOption } from './types';

const AppLabelSelect = <Multiple extends boolean>(props: AppLabelSelectProps<Multiple>) => {
  const { options, ...restProps } = props;

  const { inputValue, onInputChange } = useInputValue();

  return (
    <AppInputSelect<SelectOption, Multiple>
      data={options}
      isLoading={false}
      inputValue={inputValue}
      onInputChange={onInputChange}
      {...restProps}
    />
  );
};
export default AppLabelSelect;
