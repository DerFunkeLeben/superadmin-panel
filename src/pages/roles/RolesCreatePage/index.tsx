import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import RoleFields from '../RolesForm';
import { useRolesCreateForm } from './hooks';

const RolesCreatePage: FC = () => {
  const { form, onSubmitHandler, isLoadingSubmit } = useRolesCreateForm();

  const buttonsConfig = [
    {
      textForButton: 'Создать',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader title='Создать роль' buttonsConfig={buttonsConfig} />

      <RoleFields />
    </FormProvider>
  );
};
export default RolesCreatePage;
