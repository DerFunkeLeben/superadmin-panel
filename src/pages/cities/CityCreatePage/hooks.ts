import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCreateCityMutation } from '@/redux/services/cities/cities.api';
import { useNotification } from '@/hooks/useNotification';

import { formSchema } from '../CityForm/formSchema';
import { routesCities } from '@/resources/routes/cities';
import { CITY_FORM } from '../CityForm/constants';
import { CityFormValues } from '../CityForm/types';

export const useCityCreateForm = () => {
  const navigate = useNavigate();
  const [createCity, { isLoading: isLoadingSubmit }] = useCreateCityMutation();

  const form = useForm<CityFormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    defaultValues: CITY_FORM,
  });

  const { createNotificationSuccess, createNotificationError } = useNotification();

  const onSubmitHandler = useMemo(() => {
    return form.handleSubmit(async (data) => {
      try {
        await createCity(data).unwrap();
        createNotificationSuccess({ message: 'Город создан' });
        navigate(routesCities.list);
      } catch {
        createNotificationError({ message: 'Произошла ошибка при создании города' });
      }
    });
  }, [createNotificationError, createNotificationSuccess, createCity, form, navigate]);

  return {
    form,
    onSubmitHandler,
    isLoadingSubmit,
  };
};
