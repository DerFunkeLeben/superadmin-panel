import { api } from '@/redux/api';
import { EndpointGenerator } from '@/redux/utils';
import { Tags } from '@/redux/constants';
import { ApiIdRequest } from '@/types/api/common';
import {
  GroupByIdRequest,
  GroupByIdResponse,
  GroupCreateRequest,
  GroupDeleteRequest,
  GroupListRequest,
  GroupListResponse,
  GroupUpdateRequest,
} from '@/types/api/groups';

const BASE_URL = '/group';

const groupsApi = api.injectEndpoints({
  endpoints: (builder) => {
    const generator = new EndpointGenerator(builder, Tags.GROUPS);

    return {
      getGroupsList: generator.list<GroupListRequest, GroupListResponse>(BASE_URL),

      createGroup: generator.create<GroupCreateRequest>(BASE_URL),

      getGroupById: generator.byId<GroupByIdRequest, GroupByIdResponse>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      updateGroup: generator.update<GroupUpdateRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),

      deleteGroup: generator.delete<GroupDeleteRequest>(
        (arg: ApiIdRequest) => `${BASE_URL}/${arg.id}`,
      ),
    };
  },
});

export const {
  useGetGroupsListQuery,
  useCreateGroupMutation,
  useGetGroupByIdQuery,
  useUpdateGroupMutation,
  useDeleteGroupMutation,
} = groupsApi;
