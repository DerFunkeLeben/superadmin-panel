import { FC } from 'react';

import Loader from '@/components/others/Loader';
import UsersEditForm from './form';
import { useGetUserByIdQuery } from '@/redux/services/users/users.api';
import { useIdParam } from '@/hooks/useIdParam';

const UsersEditPage: FC = () => {
  const id = useIdParam();

  const { data, isLoading } = useGetUserByIdQuery({ id });

  if (isLoading || !data) return <Loader isStatic isCenter />;

  return <UsersEditForm initialEntity={data} />;
};
export default UsersEditPage;
