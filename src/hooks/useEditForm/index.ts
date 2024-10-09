import { useMemo } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNotification } from '@/hooks/useNotification';

import { clearObject, getOnlyDirtyValues, OptionsFlags } from '@/utils/getOnlyDirtyValues';
import { EditFormProps } from './types';
import { Entity } from '@/redux/types';

export const useEditForm = <
  TEntity extends Entity,
  TFormValues extends FieldValues,
  TUpdateDto extends Record<string, any>,
>(
  props: EditFormProps<TEntity, TFormValues, TUpdateDto>,
) => {
  const {
    initialEntity,
    formSchema,
    formatter,
    routeOnSuccess,
    alertSuccess,
    alertError,
    updateMutationHook,
  } = props;

  const navigate = useNavigate();

  const [updateEntity, { isLoading: isLoadingSubmit }] = updateMutationHook();

  const form = useForm<TFormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    defaultValues: formatter.from(initialEntity),
  });

  const { createNotificationSuccess, createNotificationError } = useNotification();

  const isCanEdit = form.formState.isDirty;

  const onSubmitHandler = useMemo(() => {
    return form.handleSubmit(async (data) => {
      const dirtyFields = form.formState.dirtyFields as OptionsFlags<TFormValues>;
      const dirtyValues = getOnlyDirtyValues<TFormValues>(dirtyFields, data);

      const formatedData = formatter.to(dirtyValues as TFormValues, initialEntity);
      const clearedData = clearObject(formatedData) as TUpdateDto;

      try {
        await updateEntity({
          id: initialEntity.id,
          patch: clearedData,
        }).unwrap();
        createNotificationSuccess({ message: alertSuccess });
        navigate(routeOnSuccess);
      } catch {
        createNotificationError({ message: alertError });
      }
    });
  }, [
    createNotificationError,
    createNotificationSuccess,
    form,
    initialEntity,
    navigate,
    updateEntity,
    routeOnSuccess,
    alertSuccess,
    alertError,
    formatter,
  ]);

  return {
    form,
    onSubmitHandler,
    isCanEdit,
    isLoadingSubmit,
  };
};
