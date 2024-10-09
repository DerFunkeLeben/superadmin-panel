import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from './auth.api';

import clearAllCache from '@/utils/clearAllCache';
import { setAuthDataInStorage } from './auth.slice';
import { AuthData } from './auth.types';
import { LoginRequest } from '@/types/api/auth';

export const setAuthData = createAsyncThunk<void, AuthData>(
  'auth/setAuthData',
  (args, { dispatch }) => {
    dispatch(setAuthDataInStorage(args));
  },
);

export const login = createAsyncThunk<void, LoginRequest>(
  'auth/login',
  async (args, { dispatch, rejectWithValue }) => {
    try {
      clearAllCache(dispatch);
      const response = await dispatch(authApi.endpoints.login.initiate(args)).unwrap();

      dispatch(setAuthData({ token: response.access_token }));
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk<void, void>('auth/logout', async (args, { dispatch }) => {
  // await dispatch(authApi.endpoints.logout.initiate(args)).unwrap();
  clearAllCache(dispatch);
});
