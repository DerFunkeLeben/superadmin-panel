import { useCallback, useState } from 'react';
import { GridSortModel } from '@mui/x-data-grid';

export const useSortTable = () => {
  const [stringSortTable, setStringSortTable] = useState({});

  const onChangeSortTable = useCallback((model: GridSortModel) => {
    if (!model.length) return;

    const stringSort = {
      sort: `${model[0].field}:${String(model[0].sort)}`,
    };

    setStringSortTable(stringSort);
  }, []);

  return {
    stringSortTable,
    onChangeSortTable,
  };
};
