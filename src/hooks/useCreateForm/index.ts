import { useMemo } from 'react';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { useNotification } from '@/hooks/useNotification';

import { CreateFormProps } from './types';
import { Entity } from '@/redux/types';

export const useCreateForm = <TEntity extends Entity, TFormValues extends FieldValues, TCreateDto>(
  props: CreateFormProps<TEntity, TFormValues, TCreateDto>,
) => {
  const {
    initData = {} as DefaultValues<TFormValues>,
    formSchema,
    formatter,
    routeOnSuccess,
    alertSuccess,
    alertError,
    createMutationHook,
  } = props;

  const navigate = useNavigate();

  const [createEntity, { isLoading: isLoadingSubmit }] = createMutationHook();

  const form = useForm<TFormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    defaultValues: initData,
  });

  const { createNotificationSuccess, createNotificationError } = useNotification();

  const onSubmitHandler = useMemo(() => {
    return form.handleSubmit(async (data) => {
      const formatedData = formatter.to(data);

      try {
        await createEntity(formatedData).unwrap();
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
    navigate,
    createEntity,
    routeOnSuccess,
    alertSuccess,
    alertError,
    formatter,
  ]);

  return {
    form,
    onSubmitHandler,
    isLoadingSubmit,
  };
};
