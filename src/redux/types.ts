import { Action, ThunkAction } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  EndpointBuilder,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';

import { store } from '@/redux/storeInstance';
import { Tags } from '@/redux/constants';
import { ApiIdRequest } from '@/types/api/common';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;

export type AppEndpointBuilder = EndpointBuilder<
  BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  Tags,
  'api'
>;

export type UrlWithId = (arg: ApiIdRequest) => string;
