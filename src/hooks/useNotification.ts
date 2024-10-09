import { useMemo } from 'react';

import { useAppDispatch } from '@/redux/hooks/useAppDispatch';

import { notificationsSlice } from '@/redux/services/notifications/notifications.slice';
import { NotificationType } from '@/redux/services/notifications/notifications.types';

export type CreateNotificationType = {
  message?: string;
  autoHideDuration?: number;
  type?: NotificationType;
};

export const useNotification = () => {
  const dispatch = useAppDispatch();

  const createNotificationMethods = useMemo(() => {
    return {
      createNotificationSuccess: (params: CreateNotificationType) => {
        dispatch(
          notificationsSlice.actions.createNotification({
            ...params,
            type: 'success',
          }),
        );
      },

      createNotificationError: (params: CreateNotificationType) => {
        dispatch(
          notificationsSlice.actions.createNotification({
            message: 'Произошла ошибка при запросе',
            ...params,
            type: 'error',
          }),
        );
      },

      createNotificationWarning: (params: CreateNotificationType) => {
        dispatch(notificationsSlice.actions.createNotification({ ...params, type: 'warning' }));
      },

      createNotificationInfo: (params: CreateNotificationType) => {
        dispatch(notificationsSlice.actions.createNotification({ ...params, type: 'info' }));
      },

      createNotification: ({ type = 'success', ...restProps }: CreateNotificationType) => {
        dispatch(
          notificationsSlice.actions.createNotification({
            ...restProps,
            type,
          }),
        );
      },
    };
  }, [dispatch]);

  return createNotificationMethods;
};
