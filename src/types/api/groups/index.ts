import { RoleEntity } from '../roles';
import {
  ApiIdRequest,
  ApiResponseWithPagination,
  ApiUpdateRequest,
  QueryParams,
} from '@/types/api/common';

export enum GroupKey {
  code = 'code',
  name = 'name',
  description = 'description',
  roles = 'roles',
}

export type GroupEntity = {
  id: string;
  [GroupKey.code]: string;
  [GroupKey.name]: string;
  [GroupKey.description]: string;
  [GroupKey.roles]: RoleEntity[];
};

export type GroupListRequest = QueryParams;
export type GroupListResponse = ApiResponseWithPagination<GroupEntity>;

export type GroupByIdRequest = ApiIdRequest;
export type GroupByIdResponse = GroupEntity;

export type GroupCreateRequest = Omit<GroupEntity, 'id' | 'roles'>;

export type GroupUpdateDto = Partial<GroupCreateRequest>;
export type GroupUpdateRequest = ApiUpdateRequest<GroupUpdateDto>;

export type GroupDeleteRequest = ApiIdRequest;
