import { FC } from 'react';

import Loader from '@/components/others/Loader';
import RolesEditForm from './form';
import { useGetRoleByIdQuery } from '@/redux/services/roles/roles.api';
import { useIdParam } from '@/hooks/useIdParam';

const RolesEditPage: FC = () => {
  const id = useIdParam();

  const { data, isLoading } = useGetRoleByIdQuery({ id });

  if (isLoading || !data) return <Loader isStatic isCenter />;

  return <RolesEditForm initialEntity={data} />;
};
export default RolesEditPage;
