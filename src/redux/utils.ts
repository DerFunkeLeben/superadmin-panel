import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

import { Tags } from '@/redux/constants';
import { ApiResponse, ApiResponseWithEntitiesWithId, Entity } from '@/redux/types';

export const providesList = (tag: Tags) => (result: ApiResponseWithEntitiesWithId | undefined) => {
  if (!result) {
    return [{ type: tag, id: 'LIST' }];
  }

  return [{ type: tag, id: 'LIST' }, ...result.list.map(({ id }) => ({ type: tag, id }))];
};

export const providesListItem = (tag: Tags) => (result: ApiResponse<Entity> | undefined) => {
  if (!result) {
    return [];
  }

  return [{ type: tag, id: result.id }];
};

export const invalidatesList = (tag: Tags | Tags[]) => (result: ApiResponse<any> | undefined) => {
  const tags = typeof tag === 'string' ? [tag] : tag;
  const tagsList = tags.map((t) => ({ type: t, id: 'LIST' }));
  return result ? tagsList : [];
};

export const invalidatesListItem =
  <P extends Entity>(type: Tags, additional: Tags[] = []) =>
  (_result: any, error: FetchBaseQueryError | undefined, arg: P | Entity['id']) => {
    if (error) {
      return [];
    }

    const id = typeof arg === 'object' ? arg.id : arg;

    return [...additional.map((type) => ({ type })), { type, id }];
  };
