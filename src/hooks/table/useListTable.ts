import { useState } from 'react';
import { GridRowSelectionModel } from '@mui/x-data-grid';

import { useFilter } from '@/hooks/table/useFilter';
import { usePagination } from '@/hooks/table/usePagination';
import { useSortTable } from '@/hooks/table/useSortTable';

import { IListTableProps } from '@/types/table.types';

export const useListTable = (sortMode = 'SORTBY') => {
  const [checkedRows, setCheckedRows] = useState<GridRowSelectionModel>();
  const { paginationQuery, paginationModel, onPaginationModelChange } = usePagination();
  const { filterState, onChangeFilter } = useFilter();
  const { stringSortTable, onChangeSortTable } = useSortTable(sortMode);

  const onRowSelectionModelChange = (selectionModel: GridRowSelectionModel) => {
    if (selectionModel) setCheckedRows(selectionModel);
  };

  const listQueryParams = {
    ...paginationQuery,
    ...filterState,
    ...stringSortTable,
  };

  const listTableProps: IListTableProps = {
    paginationModel,
    onPaginationModelChange,
    onRowSelectionModelChange,
    onSortModelChange: onChangeSortTable,
    onFilterModelChange: onChangeFilter,
  };

  return { checkedRows, listTableProps, listQueryParams };
};
