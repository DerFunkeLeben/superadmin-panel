import { GridColDef } from '@mui/x-data-grid';

import { UUID_CELL } from '@/components/others/TableCells/IdCell';

import { UserEntity } from '@/types/api/users';

export const columnsConfig: GridColDef<UserEntity>[] = [
  UUID_CELL,
  {
    field: 'name',
    headerName: 'Имя',
    flex: 1,
    sortable: true,
  },
  {
    field: 'login',
    headerName: 'Логин',
    sortable: true,
    minWidth: 200,
  },
  {
    field: 'email',
    headerName: 'Email',
    sortable: true,
    minWidth: 300,
  },
];
