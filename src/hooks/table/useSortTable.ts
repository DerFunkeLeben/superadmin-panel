import { useCallback, useState } from 'react';
import { GridSortModel } from '@mui/x-data-grid';

export const useSortTable = (sortMode = 'SORTBY') => {
  const [stringSortTable, setStringSortTable] = useState({});

  const onChangeSortTable = useCallback(
    (model: GridSortModel) => {
      if (!model.length) return;

      const stringSort =
        sortMode === 'ORDERBY'
          ? {
              orderBy: `${model[0].field}:${String(model[0].sort).toUpperCase()}`,
            }
          : {
              sortBy: model[0].field,
              sortAt: String(model[0].sort).toUpperCase(),
            };

      setStringSortTable(stringSort);
    },
    [sortMode],
  );

  return {
    stringSortTable,
    onChangeSortTable,
  };
};
