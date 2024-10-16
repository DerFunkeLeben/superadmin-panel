import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import RolesFields from '../RolesForm';
import { useRolesEditForm } from './hooks';

import { RoleEntity } from '@/types/api/roles';

export type RolesEditFormProps = {
  initialEntity: RoleEntity;
};

const RolesEditForm: FC<RolesEditFormProps> = ({ initialEntity }) => {
  const { form, onSubmitHandler, isLoadingSubmit } = useRolesEditForm(initialEntity);

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
      <RolesFields />
    </FormProvider>
  );
};
export default RolesEditForm;
