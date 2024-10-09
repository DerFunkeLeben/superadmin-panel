import { Dispatch } from '@reduxjs/toolkit';

import { api } from '@/redux/api';
import { authSlice } from '@/redux/services/auth/auth.slice';
import { notificationsSlice } from '@/redux/services/notifications/notifications.slice';
import { userSlice } from '@/redux/services/user/user.slice';

const { resetAll } = userSlice.actions;
const { clearAuthDataInStorage } = authSlice.actions;
const { clearNotifications } = notificationsSlice.actions;

const ApiActions = [resetAll, clearAuthDataInStorage, clearNotifications];

const clearAllCache = (dispatch: Dispatch<any>) => {
  localStorage.clear();
  ApiActions.forEach((action) => dispatch(action()));
  dispatch(api.util.resetApiState());
};

export default clearAllCache;
