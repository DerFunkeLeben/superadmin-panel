import { useCreateRoleMutation } from '@/redux/services/roles/roles.api';
import { useCreateForm } from '@/hooks/useCreateForm';

import { formSchema } from '../RolesForm/formSchema';
import { routes } from '@/resources/routes';
import { RolesFormValues } from '../RolesForm/types';
import { RoleCreateRequest, RoleEntity } from '@/types/api/roles';

export const useRolesCreateForm = () => {
  const createForm = useCreateForm<RoleEntity, RolesFormValues, RoleCreateRequest>({
    formSchema,
    createMutationHook: useCreateRoleMutation,
    routeOnSuccess: routes.roles.list,
    alertSuccess: 'Роль создана',
    alertError: 'Произошла ошибка при создании роли',
  });

  return createForm;
};
