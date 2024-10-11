import { FC, useCallback } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useAppDispatch } from '@/redux/hooks/useAppDispatch';

import { notificationsSlice } from '@/redux/services/notifications/notifications.slice';
import { anchorOrigin } from './constants';
import { NotificationStateItem } from '@/redux/services/notifications/notifications.types';

export const AppNotificationsItem: FC<NotificationStateItem> = ({
  id,
  message,
  type,
  autoHideDuration,
}) => {
  const dispatch = useAppDispatch();

  const onCloseHandler = useCallback(() => {
    dispatch(notificationsSlice.actions.deleteNotification({ id }));
  }, [dispatch, id]);

  return (
    <Snackbar
      open={true}
      onClose={onCloseHandler}
      autoHideDuration={autoHideDuration ?? 5000}
      anchorOrigin={anchorOrigin}
    >
      <Alert severity={type} variant='filled' onClose={onCloseHandler}>
        {message}
      </Alert>
    </Snackbar>
  );
};
