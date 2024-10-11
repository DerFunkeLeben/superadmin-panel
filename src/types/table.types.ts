import { GridPaginationModel, GridRowSelectionModel, GridSortModel } from '@mui/x-data-grid';

type Condition<T> = (tableItemData: T) => boolean;

export type TableActionsParams<T> = {
  onDelete?: (tableItemData: T) => Promise<void>;
  onEdit?: (tableItemData: T) => string;
  onSpread?: (tableItemData: T) => string;
  onPrescribe?: (tableItemData: T) => string;
  onDownload?: (tableItemData: T) => () => void;
  onArchive?: (tableItemData: T) => () => void;
  onUnarchive?: (tableItemData: T) => () => Promise<void>;
  onSend?: (tableItemData: T) => () => void;
  onCopy?: (tableItemData: T) => () => void;
};

export type TableConditionsParams<T> = {
  showEditAction?: Condition<T>;
  showDeleteAction?: Condition<T>;
  showSpreadAction?: Condition<T>;
  showPrescribeAction?: Condition<T>;
  showArchiveAction?: Condition<T>;
  showUnarchiveAction?: Condition<T>;
  showDownloadAction?: Condition<T>;
  showSendAction?: Condition<T>;
  showCopyAction?: Condition<T>;
};

export interface IListTableProps {
  paginationModel: GridPaginationModel;
  onRowSelectionModelChange: (selectionModel: GridRowSelectionModel) => void;
  onPaginationModelChange: (paginationModel: GridPaginationModel) => void;
  onSortModelChange: (sortModel: GridSortModel) => void;
}
