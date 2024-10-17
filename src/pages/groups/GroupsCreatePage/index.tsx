import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import GroupFields from '../GroupsForm';
import { useGroupsCreateForm } from './hooks';

const GroupsCreatePage: FC = () => {
  const { form, onSubmitHandler, isLoadingSubmit } = useGroupsCreateForm();

  const buttonsConfig = [
    {
      textForButton: 'Создать',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader title='Создать группу ролей' buttonsConfig={buttonsConfig} />

      <GroupFields />
    </FormProvider>
  );
};
export default GroupsCreatePage;
