import { FC } from 'react';
import { Chip, Grid, Stack, Typography } from '@mui/material';

import CardWrapper from '@/components/others/CardWrapper';
import Loader from '@/components/others/Loader';
import { useGetProfileQuery } from '@/redux/services/auth/auth.api';

import { Caption } from './styles';

const ProfileInformation: FC = () => {
  const { data: dataMe, isLoading } = useGetProfileQuery();
  const { id, login, roles } = dataMe || {};

  if (isLoading) return <Loader isStatic isCenter />;

  return (
    <CardWrapper>
      <Grid container>
        <Grid item xs={12}>
          <Caption>ID: </Caption> <span>{id}</span>
        </Grid>
        <Grid item xs={12}>
          <Caption>Логин: </Caption> <span>{login}</span>
        </Grid>
        <Grid item xs={12}>
          <Caption>Роли: </Caption>
          <Stack direction='row' display='inline-flex'>
            {roles?.map((role) => (
              <Chip key={role} label={role} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default ProfileInformation;
