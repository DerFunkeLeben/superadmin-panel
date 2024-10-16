import { FC } from 'react';
import Grid from '@mui/material/Grid';

import FormTextInput from '@/components/form/FormTextInput';
import CardWrapper from '@/components/others/CardWrapper';

import { RoleKey } from '@/types/api/roles';

const RoleFields: FC = () => {
  return (
    <CardWrapper>
      <Grid container>
        <Grid item xs={12}>
          <FormTextInput name={RoleKey.name} label='Название' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={RoleKey.description} label='Описание' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={RoleKey.code} label='Код' />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
export default RoleFields;
