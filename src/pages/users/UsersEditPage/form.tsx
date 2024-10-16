import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import UserFields from '../UsersForm';
import { useUsersEditForm } from './hooks';

import { UserEntity } from '@/types/api/users';

export type UsersEditFormProps = {
  initialEntity: UserEntity;
};

const UsersEditForm: FC<UsersEditFormProps> = ({ initialEntity }) => {
  const { form, onSubmitHandler, isLoadingSubmit } = useUsersEditForm(initialEntity);

  const buttonsConfig = [
    {
      textForButton: 'Сохранить',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader title={'Редактировать юзера'} buttonsConfig={buttonsConfig} />
      <UserFields />
    </FormProvider>
  );
};
export default UsersEditForm;
