import { useCallback, useState } from 'react';
import { GridFilterModel } from '@mui/x-data-grid';

const EmptyFilter = {};

export const useFilter = <FilterType extends Record<string, string | undefined>>() => {
  const [dataFilter, setDataFilter] = useState<FilterType | typeof EmptyFilter>(EmptyFilter);

  const onChangeFilter = useCallback(
    (model: GridFilterModel) => {
      const newFilterValue: any = { ...dataFilter };

      const field = model.items[0].field;
      const value = model.items[0].value;

      if (value && (field === 'city' || field === 'brikIds')) {
        newFilterValue[field] = value?.map((x: any) => x.id);
      } else if (value) {
        newFilterValue[field] = value;
      } else {
        delete newFilterValue[field];
      }
      setDataFilter(newFilterValue);
    },
    [dataFilter],
  );

  const onClearFilter = useCallback(() => {
    setDataFilter(EmptyFilter);
  }, []);

  return {
    filterState: dataFilter,
    onChangeFilter,
    onClearFilter,
  };
};
