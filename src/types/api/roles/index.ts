import {
  ApiCreateDto,
  ApiIdRequest,
  ApiResponseWithPagination,
  ApiUpdateDto,
  ApiUpdateRequest,
  QueryParams,
} from '@/types/api/common';

export enum RoleKey {
  code = 'code',
  name = 'name',
  description = 'description',
}

export type RoleEntity = {
  id: string;
  [RoleKey.code]: string;
  [RoleKey.name]: string;
  [RoleKey.description]: string;
};

export type RoleListRequest = QueryParams;
export type RoleListResponse = ApiResponseWithPagination<RoleEntity>;

export type RoleByIdRequest = ApiIdRequest;
export type RoleByIdResponse = RoleEntity;

export type RoleCreateRequest = ApiCreateDto<RoleEntity>;

export type RoleUpdateDto = ApiUpdateDto<RoleEntity>;
export type RoleUpdateRequest = ApiUpdateRequest<RoleUpdateDto>;

export type RoleDeleteRequest = ApiIdRequest;
