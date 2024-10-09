import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import useAuth from '@/redux/services/auth/useAuth';

import { formSchema } from './formSchema';
import { routes } from '@/resources/routes/common';
import { AuthorizationFormValues } from './types';

export const useAuthorizationForm = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<AuthorizationFormValues>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmitHandler = useMemo(() => {
    return form.handleSubmit(async (data) => {
      setFormError(null);

      try {
        await handleLogin(data);
        navigate(routes.profile);
      } catch (error) {
        const errorCode = (error as FetchBaseQueryError).status;
        if (errorCode === 401) {
          setFormError('Неверный login или пароль');
        }
      }
    });
  }, [form, navigate, handleLogin]);

  return {
    form,
    onSubmitHandler,
    formError,
  };
};
