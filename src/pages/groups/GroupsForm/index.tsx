import { FC } from 'react';
import Grid from '@mui/material/Grid';

import FormTextInput from '@/components/form/FormTextInput';
import CardWrapper from '@/components/others/CardWrapper';

import { GroupKey } from '@/types/api/groups';

const GroupFields: FC = () => {
  return (
    <CardWrapper>
      <Grid container>
        <Grid item xs={12}>
          <FormTextInput name={GroupKey.name} label='Название' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={GroupKey.code} label='Код' />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput name={GroupKey.description} label='Описание' />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
export default GroupFields;
