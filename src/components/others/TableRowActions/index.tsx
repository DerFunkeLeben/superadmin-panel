import { Link } from 'react-router-dom';
import { CurrencyRuble, Edit as EditIcon } from '@mui/icons-material';
import ArchiveIcon from '@mui/icons-material/Archive';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { IconButton, Stack, Tooltip } from '@mui/material';

import ConfirmButton from '@/components/others/ConfirmButton';

import { TableRowActionsProps } from '@/components/others/TableRowActions/types';

const TableRowActions = ({
  editLink,
  onDelete,
  onArchive,
  onUnarchive,
  onDownload,
  onSend,
  onCopy,
  spreadLink,
  prescribeLink,
}: TableRowActionsProps) => {
  return (
    <Stack direction='row' spacing={1}>
      {editLink && (
        <Link to={editLink}>
          <IconButton size='small'>
            <EditIcon />
          </IconButton>
        </Link>
      )}

      {onDownload && (
        <Tooltip title='Скачать файлы'>
          <IconButton size='small' onClick={onDownload}>
            <FileDownloadIcon />
          </IconButton>
        </Tooltip>
      )}

      {onArchive && (
        <Tooltip title='Архивировать'>
          <IconButton size='small' onClick={onArchive} color='warning'>
            <ArchiveIcon />
          </IconButton>
        </Tooltip>
      )}

      {onUnarchive && (
        <Tooltip title='Разархивировать'>
          <IconButton size='small' onClick={onUnarchive} color='primary'>
            <UnarchiveIcon />
          </IconButton>
        </Tooltip>
      )}

      {onSend && (
        <Tooltip title='Оправить тестово'>
          <IconButton size='small' onClick={onSend} color='primary'>
            <EmailIcon />
          </IconButton>
        </Tooltip>
      )}

      {onCopy && (
        <Tooltip title='Копировать'>
          <IconButton size='small' onClick={onCopy}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      )}

      {onDelete && <ConfirmButton onSubmit={onDelete} />}

      {spreadLink && (
        <Tooltip title='Выделить'>
          <Link to={spreadLink}>
            <IconButton size='small'>
              <CurrencyRuble />
            </IconButton>
          </Link>
        </Tooltip>
      )}

      {prescribeLink && (
        <Tooltip title='Выписать'>
          <Link to={prescribeLink}>
            <IconButton size='small'>
              <VolunteerActivismIcon />
            </IconButton>
          </Link>
        </Tooltip>
      )}
    </Stack>
  );
};

export default TableRowActions;
