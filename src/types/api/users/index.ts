import {
  ApiIdRequest,
  ApiResponseWithPagination,
  ApiUpdateDto,
  ApiUpdateRequest,
  QueryParams,
} from '@/types/api/common';

export enum UserKey {
  name = 'name',
  login = 'login',
  email = 'email',
}

export type UserEntity = {
  id: string;
  [UserKey.login]: string;
  [UserKey.email]: string;
  [UserKey.name]: string;
};

export type UserListRequest = QueryParams;
export type UserListResponse = ApiResponseWithPagination<UserEntity>;

export type UserByIdRequest = ApiIdRequest;
export type UserByIdResponse = UserEntity;

export type UserUpdateDto = ApiUpdateDto<UserEntity>;

export type UserUpdateRequest = ApiUpdateRequest<UserUpdateDto>;

export type UserDeleteRequest = ApiIdRequest;
