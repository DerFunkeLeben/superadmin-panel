import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { CreateNotificationPayload, NotificationsState } from './notifications.types';

const initialState: NotificationsState = [];

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialState as NotificationsState,
  reducers: {
    clearNotifications: (state: NotificationsState) => {
      state.length = 0;
    },

    createNotification: (
      state: NotificationsState,
      action: PayloadAction<CreateNotificationPayload>,
    ) => {
      const newNotificationItem = { ...action.payload, id: v4() };
      state.push(newNotificationItem);
    },

    deleteNotification: (state: NotificationsState, action: PayloadAction<{ id: string }>) => {
      return state.filter((x) => x.id !== action.payload.id);
    },
  },
});
