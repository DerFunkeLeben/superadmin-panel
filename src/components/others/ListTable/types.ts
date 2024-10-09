import { GridColDef } from '@mui/x-data-grid';

import { ApiResponseWithPagination } from '@/redux/types';
import { IListTableProps } from '@/types/table.types';

type ListData = ApiResponseWithPagination<any>;

export interface IListTable {
  columns: GridColDef[];
  data: ListData | undefined;
  listTableProps: IListTableProps;
  rowHeight?: number;
  checkboxSelection?: boolean;
}

export interface ISimpleListTable {
  columns: GridColDef[];
  data: any[] | undefined;
  isLoading?: boolean;
  rowHeight?: number;
}
