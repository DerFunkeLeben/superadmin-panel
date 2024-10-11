import {
  ApiIdRequest,
  ApiResponseWithPagination,
  ApiUpdateDto,
  ApiUpdateRequest,
  QueryParams,
} from '@/types/api/common';

export type UserEntity = {
  id: string;
  login: string;
  email: string;
  name: string;
};

export type UserListRequest = QueryParams;
export type UserListResponse = ApiResponseWithPagination<UserEntity>;

export type UserByIdRequest = ApiIdRequest;
export type UserByIdResponse = UserEntity;

export type UserUpdateDto = ApiUpdateDto<UserEntity>;

export type UserUpdateRequest = ApiUpdateRequest<UserUpdateDto>;

export type UserDeleteRequest = ApiIdRequest;
