import { FC } from 'react';

import Loader from '@/components/others/Loader';
import GroupsEditForm from './form';
import { useGetGroupByIdQuery } from '@/redux/services/groups/groups.api';
import { useIdParam } from '@/hooks/useIdParam';

const GroupsEditPage: FC = () => {
  const id = useIdParam();

  const { data, isLoading } = useGetGroupByIdQuery({ id });

  if (isLoading || !data) return <Loader isStatic isCenter />;

  return <GroupsEditForm initialEntity={data} />;
};
export default GroupsEditPage;
