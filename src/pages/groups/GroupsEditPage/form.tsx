import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import GroupsFields from '../GroupsForm';
import { useGroupsEditForm } from './hooks';

import { GroupEntity } from '@/types/api/groups';

export type GroupsEditFormProps = {
  initialEntity: GroupEntity;
};

const GroupsEditForm: FC<GroupsEditFormProps> = ({ initialEntity }) => {
  const { form, onSubmitHandler, isLoadingSubmit } = useGroupsEditForm(initialEntity);

  const buttonsConfig = [
    {
      textForButton: 'Сохранить',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader title={'Редактировать роль'} buttonsConfig={buttonsConfig} />
      <GroupsFields />
    </FormProvider>
  );
};
export default GroupsEditForm;
