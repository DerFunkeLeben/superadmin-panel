import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import EmptyLayout from '@/components/layouts/EmptyLayout';
import AuthorizationForm from './AuthorizationForm';

import { authPageTitle, authPageWrapper } from './styles';

const AuthorizationPage: FC = () => {
  return (
    <EmptyLayout>
      <Card sx={authPageWrapper}>
        <CardContent>
          <Typography sx={authPageTitle}>Superadmin panel</Typography>

          <AuthorizationForm />
        </CardContent>
      </Card>
    </EmptyLayout>
  );
};
export default AuthorizationPage;
