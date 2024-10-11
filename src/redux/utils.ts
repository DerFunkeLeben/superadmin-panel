import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';

import { Tags } from '@/redux/constants';
import { AppEndpointBuilder, UrlWithId } from './types';
import {
  ApiIdRequest,
  ApiResponseWithPagination,
  ApiUpdateRequest,
  Entity,
  QueryParams,
} from '@/types/api/common';

export const providesList =
  (tag: Tags) => (result: ApiResponseWithPagination<Entity> | undefined) => {
    if (!result) {
      return [{ type: tag, id: 'LIST' }];
    }

    return [{ type: tag, id: 'LIST' }, ...result.items.map(({ id }) => ({ type: tag, id }))];
  };

export const providesListItem = (tag: Tags) => (result: Entity | undefined) => {
  if (!result) {
    return [];
  }

  return [{ type: tag, id: result.id }];
};

export const invalidatesList =
  (tag: Tags | Tags[]) => (result: ApiResponseWithPagination<Entity> | void) => {
    const tags = typeof tag === 'string' ? [tag] : tag;
    const tagsList = tags.map((t) => ({ type: t, id: 'LIST' }));
    return result ? tagsList : [];
  };

export const invalidatesListItem =
  <P extends Entity>(type: Tags, additional: Tags[] = []) =>
  (_result: any, error: FetchBaseQueryError | undefined, arg: P) => {
    if (error) {
      return [];
    }

    const id = typeof arg === 'object' ? arg.id : arg;

    return [...additional.map((type) => ({ type })), { type, id }];
  };

export class EndpointGenerator {
  builder: AppEndpointBuilder;
  tag: Tags;

  constructor(builder: AppEndpointBuilder, tag: Tags) {
    this.builder = builder;
    this.tag = tag;
  }

  list<ListRequest extends QueryParams, ListResponse extends ApiResponseWithPagination<Entity>>(
    URL: string,
  ) {
    return this.builder.query<ListResponse, ListRequest>({
      query: (arg) => ({
        url: URL,
        method: 'GET',
        params: arg,
      }),
      providesTags: providesList(this.tag),
    });
  }

  byId<ByIdRequest extends ApiIdRequest, ByIdResponse extends Entity>(URL: UrlWithId) {
    return this.builder.query<ByIdResponse, ByIdRequest>({
      query: (arg) => ({
        url: URL(arg),
        method: 'GET',
      }),
      providesTags: providesListItem(this.tag),
    });
  }

  create<CreateRequest extends Record<string, any>>(URL: string) {
    return this.builder.mutation<void, CreateRequest>({
      query: (body) => ({
        url: URL,
        method: 'POST',
        body,
      }),
      invalidatesTags: invalidatesList(this.tag),
    });
  }

  update<UpdateRequest extends ApiUpdateRequest<Record<string, any>>>(URL: UrlWithId) {
    return this.builder.mutation<void, UpdateRequest>({
      query: (arg) => ({
        url: URL({ id: arg.id }),
        method: 'PATCH',
        body: arg.patch,
      }),
      invalidatesTags: invalidatesListItem(this.tag),
    });
  }

  delete<DeleteRequest extends ApiIdRequest>(URL: UrlWithId) {
    return this.builder.mutation<void, DeleteRequest>({
      query: (arg) => ({
        url: URL({ id: arg.id }),
        method: 'DELETE',
      }),
      invalidatesTags: invalidatesListItem(this.tag),
    });
  }
}
