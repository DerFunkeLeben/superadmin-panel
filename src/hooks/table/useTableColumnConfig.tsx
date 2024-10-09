import { useMemo } from 'react';
import { GridColDef, GridValidRowModel } from '@mui/x-data-grid';

import TableRowActions from '@/components/others/TableRowActions';

import { TableActionsParams, TableConditionsParams } from '@/types/table.types';

export function useTableColumnConfig<TableItemData extends GridValidRowModel>(
  config: GridColDef<TableItemData>[],
  actions: TableActionsParams<TableItemData> = {},
  conditions: TableConditionsParams<TableItemData> = {},
) {
  const resultColumns = useMemo(() => {
    const {
      onDelete,
      onEdit,
      onSpread,
      onPrescribe,
      onArchive,
      onUnarchive,
      onDownload,
      onSend,
      onCopy,
    } = actions;
    const {
      showEditAction,
      showDeleteAction,
      showArchiveAction,
      showUnarchiveAction,
      showSpreadAction,
      showPrescribeAction,
      showDownloadAction,
      showSendAction,
      showCopyAction,
    } = conditions;

    const actionsCount = Object.keys(actions).length;
    const noActions = actionsCount === 0;

    const modifiedColumnConfig = config.map((col) => ({
      ...col,
      filterable: col.filterable ?? false,
      sortable: col.sortable ?? false,
    }));

    if (noActions) return modifiedColumnConfig;

    const actionColumn: GridColDef<TableItemData> = {
      field: 'actions',
      minWidth: 70 + 20 * actionsCount,
      maxWidth: 70 + 20 * actionsCount,
      align: 'left',
      headerName: 'Опции',
      sortable: false,
      filterable: false,

      renderCell: ({ row }) => {
        const onDeleteHandler = onDelete ? async () => await onDelete(row) : undefined;

        const hasEditIcon = showEditAction ? showEditAction(row) : true;
        const hasDeleteIcon = showDeleteAction ? showDeleteAction(row) : true;
        const hasArchiveIcon = showArchiveAction ? showArchiveAction(row) : true;
        const hasUnarchiveIcon = showUnarchiveAction ? showUnarchiveAction(row) : true;
        const hasSpreadIcon = showSpreadAction ? showSpreadAction(row) : true;
        const hasPrescribeIcon = showPrescribeAction ? showPrescribeAction(row) : true;
        const hasDownloadIcon = showDownloadAction ? showDownloadAction(row) : true;
        const hasSendIcon = showSendAction ? showSendAction(row) : true;
        const hasCopyIcon = showCopyAction ? showCopyAction(row) : true;

        return (
          <TableRowActions
            editLink={hasEditIcon && onEdit?.(row)}
            onDelete={hasDeleteIcon && onDeleteHandler}
            onDownload={hasDownloadIcon && onDownload?.(row)}
            onArchive={hasArchiveIcon && onArchive?.(row)}
            onUnarchive={hasUnarchiveIcon && onUnarchive?.(row)}
            onSend={hasSendIcon && onSend?.(row)}
            spreadLink={hasSpreadIcon && onSpread?.(row)}
            prescribeLink={hasPrescribeIcon && onPrescribe?.(row)}
            onCopy={hasCopyIcon && onCopy?.(row)}
          />
        );
      },
    };

    return [actionColumn, ...modifiedColumnConfig];
  }, [actions, conditions, config]);

  return resultColumns;
}
