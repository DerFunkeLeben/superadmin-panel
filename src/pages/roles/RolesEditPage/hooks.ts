import { useUpdateRoleMutation } from '@/redux/services/roles/roles.api';
import { useEditForm } from '@/hooks/useEditForm';

import { formSchema } from '../RolesForm/formSchema';
import { routes } from '@/resources/routes';
import { RolesFormValues } from '../RolesForm/types';
import { RoleEntity, RoleUpdateDto } from '@/types/api/roles';

export const useRolesEditForm = (initialEntity: RoleEntity) => {
  const editForm = useEditForm<RoleEntity, RolesFormValues, RoleUpdateDto>({
    initialEntity,
    formSchema,
    updateMutationHook: useUpdateRoleMutation,
    routeOnSuccess: routes.roles.list,
    alertSuccess: 'Роль изменена',
    alertError: 'Произошла ошибка при изменении роли',
  });

  return editForm;
};
