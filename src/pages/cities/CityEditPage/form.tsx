import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import CityFields from '../CityForm';
import { useCityEditForm } from './hooks';

import { BC } from '@/resources/breadcrumbs';
import { CityRecord } from '@/types/api/cities';

export type CityEditFormProps = {
  initialEntity: CityRecord;
};

const CityEditForm: FC<CityEditFormProps> = ({ initialEntity }) => {
  const { form, onSubmitHandler, isLoadingSubmit } = useCityEditForm(initialEntity);

  const buttonsConfig = [
    {
      textForButton: 'Изменить',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader
        title={'Редактировать город'}
        breadcrumbs={BC.CITIES}
        buttonsConfig={buttonsConfig}
      />
      <CityFields />
    </FormProvider>
  );
};
export default CityEditForm;
