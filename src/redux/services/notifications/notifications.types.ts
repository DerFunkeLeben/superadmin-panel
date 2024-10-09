export type NotificationType = 'error' | 'warning' | 'info' | 'success';

export type NotificationStateItem = {
  id: string;
  message?: string;
  type: NotificationType;
  autoHideDuration?: number;
};

export type CreateNotificationPayload = {
  message?: string;
  type: NotificationType;
  autoHideDuration?: number;
};

export type NotificationsState = NotificationStateItem[];
