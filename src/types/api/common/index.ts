export type PageMetaDto = {
  total: number;
  limit: number;
  offset: number;
};

export type QueryParams = {
  limit?: number;
  offset?: number;
  sort?: string;
};

export type Entity = { id: string } & Record<string, any>;

export interface ApiResponseWithPagination<T extends Entity> {
  items: T[];
  meta: PageMetaDto;
}

export type ApiUpdateDto<E extends Entity> = Partial<Omit<E, 'id'>>;

export interface ApiUpdateRequest<T> {
  id: string;
  patch: T;
}

export interface ApiIdRequest {
  id: string;
}
