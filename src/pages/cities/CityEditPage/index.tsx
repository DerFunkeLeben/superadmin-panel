import { FC } from 'react';

import Loader from '@/components/others/Loader';
import CityEditForm from './form';
import { useGetCityByIdQuery } from '@/redux/services/cities/cities.api';
import { useIdParam } from '@/hooks/useIdParam';
import { useNotification } from '@/hooks/useNotification';

const CityEditPage: FC = () => {
  const id = useIdParam();

  const { data, isLoading, error } = useGetCityByIdQuery(id);

  const { createNotificationError } = useNotification();

  if (error) createNotificationError({});

  return (
    <>{!isLoading && data ? <CityEditForm initialEntity={data} /> : <Loader isStatic isCenter />}</>
  );
};
export default CityEditPage;
