import { api } from '@/redux/api';
import { EndpointGenerator } from '@/redux/utils';
import { Tags } from '@/redux/constants';
import { ApiIdRequest } from '@/types/api/common';
import {
  UserByIdRequest,
  UserByIdResponse,
  UserDeleteRequest,
  UserListRequest,
  UserListResponse,
  UserUpdateRequest,
} from '@/types/api/users';

const BASE_URL = '/user';

const usersApi = api.injectEndpoints({
  endpoints: (builder) => {
    const generator = new EndpointGenerator(builder, Tags.USERS);

    return {
      getUsersList: generator.list<UserListRequest, UserListResponse>(BASE_URL),

      getUserById: generator.byId<UserByIdRequest, UserByIdResponse>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      updateUser: generator.update<UserUpdateRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      deleteUser: generator.delete<UserDeleteRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),
    };
  },
});

export const {
  useGetUsersListQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
