import AppInputSelect from '@/components/inputs/_AppInputSelect';
import { useGetCityListQuery } from '@/redux/services/cities/cities.api';
import { useInputValue } from '@/hooks/useInputValue';

import { DEFAULT_SEARCH_LIMIT } from '../constants';
import { AppCitySelectProps } from './types';
import { CityRecord } from '@/types/api/cities';

const AppCitySelect = <Multiple extends boolean>(props: AppCitySelectProps<Multiple>) => {
  const { style, ...restProps } = props;

  const { debouncedInputValue, ...inputProps } = useInputValue();

  const { data, isLoading } = useGetCityListQuery({
    name: debouncedInputValue,
    limit: DEFAULT_SEARCH_LIMIT,
  });

  return (
    <AppInputSelect<CityRecord, Multiple>
      data={data?.list}
      isLoading={isLoading}
      style={style}
      {...inputProps}
      {...restProps}
    />
  );
};
export default AppCitySelect;
