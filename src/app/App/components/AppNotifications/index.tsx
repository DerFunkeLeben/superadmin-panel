import { FC } from 'react';

import { AppNotificationsItem } from './AppNotificationsItem';
import { useAppSelector } from '@/redux/hooks/useAppSelector';

import { NotificationsState } from '@/redux/services/notifications/notifications.types';

const AppNotifications: FC = () => {
  const notifications = useAppSelector((state) => state.notifications as NotificationsState);

  return (
    <>
      {notifications.map((notification) => {
        return <AppNotificationsItem key={notification.id} {...notification} />;
      })}
    </>
  );
};
export default AppNotifications;
