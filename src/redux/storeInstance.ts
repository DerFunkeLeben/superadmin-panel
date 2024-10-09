import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '@/redux/api';
import { authSlice } from './services/auth/auth.slice';
import { notificationsSlice } from './services/notifications/notifications.slice';
import { userSlice } from './services/user/user.slice';

const reducer = {
  [api.reducerPath]: api.reducer,
  auth: authSlice.reducer,
  user: userSlice.reducer,
  notifications: notificationsSlice.reducer,
};

export const store = configureStore({
  reducer: combineReducers(reducer),

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

setupListeners(store.dispatch);
