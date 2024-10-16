import { api } from '@/redux/api';
import { EndpointGenerator } from '@/redux/utils';
import { Tags } from '@/redux/constants';
import { ApiIdRequest } from '@/types/api/common';
import {
  RoleByIdRequest,
  RoleByIdResponse,
  RoleCreateRequest,
  RoleDeleteRequest,
  RoleListRequest,
  RoleListResponse,
  RoleUpdateRequest,
} from '@/types/api/roles';

const BASE_URL = '/role';

const rolesApi = api.injectEndpoints({
  endpoints: (builder) => {
    const generator = new EndpointGenerator(builder, Tags.ROLES);

    return {
      getRolesList: generator.list<RoleListRequest, RoleListResponse>(BASE_URL),

      createRole: generator.create<RoleCreateRequest>(BASE_URL),

      getRoleById: generator.byId<RoleByIdRequest, RoleByIdResponse>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      updateRole: generator.update<RoleUpdateRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      deleteRole: generator.delete<RoleDeleteRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),
    };
  },
});

export const {
  useGetRolesListQuery,
  useCreateRoleMutation,
  useGetRoleByIdQuery,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
} = rolesApi;
