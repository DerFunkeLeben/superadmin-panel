import { FC } from 'react';

import CustomNoRowsOverlay from './NoRowsOverlay';
import useTableLoading from '@/hooks/table/useTableLoading';

import { OPTIONS_PAGE_SIZE_CONST } from '@/pages/constants';
import { IListTable } from './types';
import { StyledDataGrid } from './styles';

const ListTable: FC<IListTable> = ({
  data,
  columns,
  listTableProps,
  rowHeight,
  checkboxSelection = true,
}) => {
  const isLoading = useTableLoading();

  return (
    <StyledDataGrid
      {...listTableProps}
      rows={data?.items ?? []}
      columns={columns}
      pagination
      disableColumnMenu
      checkboxSelection={checkboxSelection}
      loading={isLoading}
      sortingMode={'server'}
      paginationMode={'server'}
      pageSizeOptions={OPTIONS_PAGE_SIZE_CONST}
      rowCount={data?.meta?.total || 0}
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
