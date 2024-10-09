import { api } from '@/redux/api';
import { LoginRequest, LoginResponse, ProfileResponse, RefreshResponse } from '@/types/api/auth';

const authApi = api.injectEndpoints({
  endpoints: (builder) => {
    return {
      login: builder.mutation<LoginResponse, LoginRequest>({
        query: (body) => ({
          url: '/auth/login',
          method: 'POST',
          body,
        }),
      }),

      logout: builder.mutation<void, void>({
        query: () => ({
          url: '/auth/logout',
          method: 'GET',
        }),
      }),

      refresh: builder.mutation<RefreshResponse, void>({
        query: () => ({
          url: '/auth/refresh',
          method: 'POST',
        }),
      }),

      getProfile: builder.query<ProfileResponse, void>({
        query: () => ({
          url: '/auth/profile',
          method: 'GET',
        }),
      }),
    };
  },
});

export const { useRefreshMutation, useGetProfileQuery } = authApi;

export default authApi;
