import { Action, ThunkAction } from '@reduxjs/toolkit';

import { store } from '@/redux/storeInstance';
import { PageMetaDto } from '@/types/api/common';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ApiResponse<T> = T;

export interface ApiResponseWithPagination<T> {
  list: T[];
  meta: ApiPagination;
}

export type ApiPagination = PageMetaDto;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootState,
  unknown,
  Action<string>
>;

export type Entity = { id: string | number };
export type ApiResponseWithEntitiesWithId = ApiResponseWithPagination<Entity>;
export type AnyEntity = Entity & Record<string, any>;
