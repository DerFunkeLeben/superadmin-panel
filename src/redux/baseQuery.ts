import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { logout, setAuthData } from '@/redux/services/auth/thunks';
import { localStorageService } from '@/utils/localStorageService';
import { paramsSerializer } from '@/utils/paramsSerializer';
import { RefreshResponse } from '@/types/api/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: `/api`,
  credentials: 'include',
  paramsSerializer: paramsSerializer,
  prepareHeaders: (headers) => {
    const token = localStorageService.getAuthKey();
    headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const appBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery('/auth/refresh', api, extraOptions);
    console.log('refreshResult', refreshResult);
    if (refreshResult.data) {
      const { access_token } = refreshResult.data as RefreshResponse;

      api.dispatch(setAuthData({ token: access_token }));
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};
