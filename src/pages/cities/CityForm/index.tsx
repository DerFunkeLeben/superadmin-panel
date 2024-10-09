import { FC } from 'react';
import Grid from '@mui/material/Grid';

import FormTextInput from '@/components/form/FormTextInput';
import CardWrapper from '@/components/others/CardWrapper';

import { CityKey } from './constants';

const CityFields: FC = () => {
  return (
    <CardWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput name={CityKey.name} label='Название' />
        </Grid>
        <Grid item xs={6}>
          <FormTextInput name={CityKey.district} label='Дистрикт' />
        </Grid>
        <Grid item xs={6}>
          <FormTextInput name={CityKey.externalId} label='External ID' />
        </Grid>
      </Grid>
    </CardWrapper>
  );
};
export default CityFields;
