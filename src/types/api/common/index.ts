export type WrapSuccessResponse<T> = {
  data: T;
};

export type PageMetaDto = {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  showAll: boolean;
};

export type MetricEntity = {
  id: number;
  data: { [x: string]: {} | undefined };
  createdAt: string;
  updatedAt: string;
};

export type QueryParams<T> = {
  name?: string;
  orderBy?: T;
  sortBy?: T;
  sortAt?: 'ASC' | 'DESC';
  page?: number;
  limit?: number;
};
