import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { localStorageService } from '@/utils/localStorageService';
import { AuthData, AuthState, AuthStatus } from './auth.types';

const lsAuthKey = localStorageService.getAuthKey();

const initialState: AuthState = {
  authStatus: lsAuthKey ? AuthStatus.AUTHORIZED : AuthStatus.UNAUTHORIZED,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState as AuthState,
  reducers: {
    setAuthDataInStorage: (state, { payload }: PayloadAction<AuthData>) => {
      state.authStatus = AuthStatus.AUTHORIZED;
      localStorageService.setAuthKey(payload.token);
    },

    clearAuthDataInStorage: (state) => {
      state.authStatus = AuthStatus.UNAUTHORIZED;
      localStorageService.clearAuthKey();
    },
  },
});

export const { setAuthDataInStorage, clearAuthDataInStorage } = authSlice.actions;
