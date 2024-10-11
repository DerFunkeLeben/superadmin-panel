import { GridColDef } from '@mui/x-data-grid';

import { ID_CELL } from '@/components/others/TableCells/IdCell';

import { CityKey } from '../../CityForm/constants';
import { CityRecord } from '@/types/api/users';

export const columnsConfig: GridColDef<CityRecord>[] = [
  ID_CELL,
  {
    field: CityKey.name,
    headerName: 'Имя',
    flex: 1,
    filterable: true,
    sortable: true,
    minWidth: 300,
    maxWidth: 500,
  },
];
