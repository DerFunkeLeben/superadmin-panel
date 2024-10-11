import { useState } from 'react';
import { GridRowSelectionModel } from '@mui/x-data-grid';

import { usePagination } from '@/hooks/table/usePagination';
import { useSortTable } from '@/hooks/table/useSortTable';

import { IListTableProps } from '@/types/table.types';

export const useListTable = () => {
  const [checkedRows, setCheckedRows] = useState<GridRowSelectionModel>();
  const { paginationQuery, paginationModel, onPaginationModelChange } = usePagination();
  const { stringSortTable, onChangeSortTable } = useSortTable();

  const onRowSelectionModelChange = (selectionModel: GridRowSelectionModel) => {
    if (selectionModel) setCheckedRows(selectionModel);
  };

  const listQueryParams = {
    ...paginationQuery,
    ...stringSortTable,
  };

  const listTableProps: IListTableProps = {
    paginationModel,
    onPaginationModelChange,
    onRowSelectionModelChange,
    onSortModelChange: onChangeSortTable,
  };

  return { checkedRows, listTableProps, listQueryParams };
};
