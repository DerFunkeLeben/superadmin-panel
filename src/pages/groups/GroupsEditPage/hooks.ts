import { useUpdateGroupMutation } from '@/redux/services/groups/groups.api';
import { useEditForm } from '@/hooks/useEditForm';

import { formSchema } from '../GroupsForm/formSchema';
import { routes } from '@/resources/routes';
import { GroupsFormValues } from '../GroupsForm/types';
import { GroupEntity, GroupUpdateDto } from '@/types/api/groups';

export const useGroupsEditForm = (initialEntity: GroupEntity) => {
  const editForm = useEditForm<GroupEntity, GroupsFormValues, GroupUpdateDto>({
    initialEntity,
    formSchema,
    updateMutationHook: useUpdateGroupMutation,
    routeOnSuccess: routes.groups.list,
    alertSuccess: 'Группа ролей изменена',
    alertError: 'Произошла ошибка при изменении группы ролей',
  });

  return editForm;
};
