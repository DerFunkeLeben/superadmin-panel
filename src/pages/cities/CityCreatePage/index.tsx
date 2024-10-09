import { FC } from 'react';
import { FormProvider } from 'react-hook-form';

import ContentHeader from '@/components/others/ContentHeader';
import CityFields from '../CityForm';
import { useCityCreateForm } from './hooks';

import { BC } from '@/resources/breadcrumbs';

const CityCreatePage: FC = () => {
  const { form, onSubmitHandler, isLoadingSubmit } = useCityCreateForm();

  const buttonsConfig = [
    {
      textForButton: 'Создать',
      onClick: onSubmitHandler,
      loading: isLoadingSubmit,
    },
  ];

  return (
    <FormProvider {...form}>
      <ContentHeader
        title={'Создать город'}
        breadcrumbs={BC.CITIES}
        buttonsConfig={buttonsConfig}
      />
      <CityFields />
    </FormProvider>
  );
};
export default CityCreatePage;
