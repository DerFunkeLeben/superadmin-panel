import { FC } from 'react';
import Grid from '@mui/material/Grid';

import FormTextInput from '@/components/form/FormTextInput';
import CardWrapper from '@/components/others/CardWrapper';

import { UserKey } from './types';

const UserFields: FC = () => {
  return (
    <CardWrapper>
      <Grid container>
        <Grid item xs={12}>
          <FormTextInput name={UserKey.name} label='Имя' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={UserKey.email} label='E-mail' type='email' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={UserKey.login} label='Логин' />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
export default UserFields;
