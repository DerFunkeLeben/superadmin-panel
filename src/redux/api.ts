import { createApi } from '@reduxjs/toolkit/query/react';

import { appBaseQuery } from '@/redux/baseQuery';
import { Tags } from '@/redux/constants';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: appBaseQuery,
  tagTypes: Object.values(Tags),
  refetchOnFocus: false,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
