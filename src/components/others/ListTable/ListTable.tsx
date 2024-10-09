import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import CustomNoRowsOverlay from './NoRowsOverlay';
import useTableLoading from '@/hooks/table/useTableLoading';

import { OPTIONS_PAGE_SIZE_CONST } from '@/pages/constants';
import { IListTable } from './types';

const ListTable: FC<IListTable> = ({
  data,
  columns,
  listTableProps,
  rowHeight,
  checkboxSelection = true,
}) => {
  const isLoading = useTableLoading();

  return (
    <DataGrid
      {...listTableProps}
      rows={data?.list ?? []}
      columns={columns}
      pagination
      checkboxSelection={checkboxSelection}
      loading={isLoading}
      filterMode={'server'}
      sortingMode={'server'}
      paginationMode={'server'}
      pageSizeOptions={OPTIONS_PAGE_SIZE_CONST}
      rowCount={data?.meta.itemCount || 0}
      rowHeight={rowHeight}
      keepNonExistentRowsSelected
      slots={{
        noRowsOverlay: CustomNoRowsOverlay,
      }}
      slotProps={{
        loadingOverlay: {
          variant: 'linear-progress',
          noRowsVariant: 'skeleton',
        },
      }}
    />
  );
};

export default ListTable;
