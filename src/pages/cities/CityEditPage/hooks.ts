import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUpdateCityMutation } from '@/redux/services/cities/cities.api';
import { useNotification } from '@/hooks/useNotification';

import { getOnlyDirtyValues } from '@/utils/getOnlyDirtyValues';
import { formSchema } from '../CityForm/formSchema';
import { routesCities } from '@/resources/routes/cities';
import { CityFormValues } from '../CityForm/types';
import { CityRecord } from '@/types/api/cities';

export const useCityEditForm = (initialEntity: CityRecord) => {
  const navigate = useNavigate();

  const [updateCity, { isLoading: isLoadingSubmit }] = useUpdateCityMutation();

  const form = useForm<CityFormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    defaultValues: initialEntity,
  });

  const { createNotificationSuccess, createNotificationError } = useNotification();

  const isCanEdit = form.formState.isDirty;

  const dirtyFields = form.formState.dirtyFields;

  const onSubmitHandler = useMemo(() => {
    return form.handleSubmit(async (data) => {
      const dirtyValues = getOnlyDirtyValues(dirtyFields, data);

      try {
        await updateCity({
          id: initialEntity.id,
          patch: dirtyValues,
        }).unwrap();
        createNotificationSuccess({ message: 'Город изменён' });
        navigate(routesCities.list);
      } catch {
        createNotificationError({ message: 'Произошла ошибка при изменении города' });
      }
    });
  }, [
    createNotificationError,
    createNotificationSuccess,
    dirtyFields,
    form,
    initialEntity.id,
    navigate,
    updateCity,
  ]);

  return {
    form,
    onSubmitHandler,
    isLoadingSubmit,
    isCanEdit,
  };
};
