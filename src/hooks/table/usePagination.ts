import { useState } from 'react';
import { GridPaginationModel } from '@mui/x-data-grid';

import { OPTIONS_PAGE_SIZE_CONST } from '@/pages/constants';

export const usePagination = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: OPTIONS_PAGE_SIZE_CONST[0],
    page: 0,
  });

  const paginationQuery = {
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
  };

  const onPaginationModelChange = (model: GridPaginationModel) => setPaginationModel(model);

  return { paginationQuery, paginationModel, onPaginationModelChange };
};
