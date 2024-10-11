import { FC } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Grid } from '@mui/material';

import { FormMessageError } from '@/components/form/FormMessage';
import FormTextInput from '@/components/form/FormTextInput';
import { useAuthorizationForm } from './hooks';

const AuthorizationForm: FC = () => {
  const { form, formError, onSubmitHandler } = useAuthorizationForm();

  return (
    <FormProvider {...form}>
      <Grid container>
        <Grid xs={12} item>
          <FormTextInput name='login' label='Логин' autoComplete='username' />
        </Grid>

        <Grid xs={12} item>
          <FormTextInput
            name='password'
            label='Пароль'
            type='password'
            autoComplete='current-password'
          />
        </Grid>

        {formError && (
          <Grid item xs={12}>
            <FormMessageError>{formError}</FormMessageError>
          </Grid>
        )}

        <Grid xs={12} item>
          <Button fullWidth size='large' type='submit' onClick={onSubmitHandler}>
            Войти
          </Button>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default AuthorizationForm;
