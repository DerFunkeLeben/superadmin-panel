import { GridColDef } from '@mui/x-data-grid';

import { UUID_CELL } from '@/components/others/TableCells/IdCell';

import { RoleEntity, RoleKey } from '@/types/api/roles';

export const columnsConfig: GridColDef<RoleEntity>[] = [
  UUID_CELL,
  {
    field: RoleKey.name,
    headerName: 'Название',
    sortable: true,
    minWidth: 400,
  },
  {
    field: RoleKey.code,
    headerName: 'Код',
    sortable: true,
    minWidth: 300,
  },
  {
    field: RoleKey.description,
    headerName: 'Описание',
    sortable: true,
    minWidth: 400,
    flex: 1,
  },
];
