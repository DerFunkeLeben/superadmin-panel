import { FC } from 'react';

import ContentHeader from '@/components/others/ContentHeader';
import UsersListTable from './UsersListTable';

import { Voc } from '@/resources/navbar/constants';

const UsersListPage: FC = () => {
  return (
    <>
      <ContentHeader title={Voc.USERS} />
      <UsersListTable />
    </>
  );
};
export default UsersListPage;
