import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { ISimpleListTable } from './types';

const SimpleListTable: FC<ISimpleListTable> = ({
  data,
  columns,
  isLoading = false,
  rowHeight = 130,
}) => {
  return (
    <DataGrid
      rows={data ?? []}
      columns={columns}
      loading={isLoading}
      rowHeight={rowHeight}
      hideFooter
    />
  );
};

export default SimpleListTable;
