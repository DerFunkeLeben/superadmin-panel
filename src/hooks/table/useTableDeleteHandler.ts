import { useCallback } from 'react';
import { GridRowId, GridRowSelectionModel, GridValidRowModel } from '@mui/x-data-grid';
import { MutationDefinition } from '@reduxjs/toolkit/query';
import { MutationTrigger } from '@reduxjs/toolkit/src/query/react/buildHooks';

import { useNotification } from '@/hooks/useNotification';

export function useTableDeleteHandler<TableItemData extends GridValidRowModel>(
  checkedRows: GridRowSelectionModel | undefined,
  deleteM: MutationTrigger<MutationDefinition<any, any, any, any, any>>,
  message = 'Произошла ошибка при удалении',
) {
  const { createNotificationError } = useNotification();

  const onDeleteHandler = useCallback(
    async (row: TableItemData) => {
      const throwError = () => createNotificationError({ message });

      const handleDelete = async (id: GridRowId) => {
        try {
          const response = await deleteM(id);
          if ('error' in response) return throwError();
        } catch (e) {
          console.log('catch');
          throwError();
        }
      };

      if (!checkedRows?.length) {
        await handleDelete(row.id);
        return;
      }

      await Promise.all(checkedRows.map(async (id) => await handleDelete(id)));
    },
    [deleteM, checkedRows, createNotificationError, message],
  );

  return onDeleteHandler;
}
