import { useCreateGroupMutation } from '@/redux/services/groups/groups.api';
import { useCreateForm } from '@/hooks/useCreateForm';

import { formSchema } from '../GroupsForm/formSchema';
import { routes } from '@/resources/routes';
import { GroupsFormValues } from '../GroupsForm/types';
import { GroupCreateRequest, GroupEntity } from '@/types/api/groups';

export const useGroupsCreateForm = () => {
  const createForm = useCreateForm<GroupEntity, GroupsFormValues, GroupCreateRequest>({
    formSchema,
    createMutationHook: useCreateGroupMutation,
    routeOnSuccess: routes.groups.list,
    alertSuccess: 'Группа ролей создана',
    alertError: 'Произошла ошибка при создании группы ролей',
  });

  return createForm;
};
