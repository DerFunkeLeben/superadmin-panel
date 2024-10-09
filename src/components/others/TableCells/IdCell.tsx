import { FC } from 'react';
import { Chip, Tooltip } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { Entity } from '@/redux/types';

interface IdCellProps {
  value: string | number;
}

const IdCell: FC<IdCellProps> = ({ value }) => {
  return (
    <Tooltip title={value}>
      <Chip label={String(value).slice(0, 7)} />
    </Tooltip>
  );
};

export const UUID_CELL: GridColDef = {
  field: 'id',
  headerName: 'ID',
  sortable: false,
  minWidth: 100,
  maxWidth: 100,
  width: 100,
  renderCell: <T extends Entity>({ row }: { row: T }) => <IdCell value={row.id} />,
};

export const ID_CELL: GridColDef = {
  field: 'id',
  headerName: 'ID',
  sortable: true,
  minWidth: 80,
  maxWidth: 120,
  width: 80,
};
