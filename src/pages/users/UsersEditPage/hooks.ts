import { useUpdateUserMutation } from '@/redux/services/users/users.api';
import { useEditForm } from '@/hooks/useEditForm';

import { formSchema } from '../UsersForm/formSchema';
import { routes } from '@/resources/routes';
import { UsersFormValues } from '../UsersForm/types';
import { UserEntity, UserUpdateDto } from '@/types/api/users';

export const useUsersEditForm = (initialEntity: UserEntity) => {
  const editForm = useEditForm<UserEntity, UsersFormValues, UserUpdateDto>({
    initialEntity,
    formSchema,
    updateMutationHook: useUpdateUserMutation,
    routeOnSuccess: routes.users.list,
    alertSuccess: 'Юзер изменен',
    alertError: 'Произошла ошибка при изменении юзера',
  });

  return editForm;
};
