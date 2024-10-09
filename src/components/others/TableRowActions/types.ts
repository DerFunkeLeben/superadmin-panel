export type TableRowActionsHandler = (() => void) | false;

interface TableRowActions {
  onDelete: TableRowActionsHandler;
  onArchive: TableRowActionsHandler;
  onDownload: TableRowActionsHandler;
  onUnarchive: TableRowActionsHandler;
  onSend: TableRowActionsHandler;
  onCopy: TableRowActionsHandler;
  spreadLink: string | false;
  prescribeLink: string | false;
  editLink: string | false;
}

export type TableRowActionsProps = Partial<TableRowActions>;
