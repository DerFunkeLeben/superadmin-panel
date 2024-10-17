import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

import ContentHeader from '@/components/others/ContentHeader';
import GroupsListTable from './GroupsListTable';

import { Voc } from '@/resources/navbar/constants';
import { routes } from '@/resources/routes';

const GroupsListPage: FC = () => {
  const buttonsConfig = [
    {
      textForButton: 'Новая группа ролей',
      link: routes.groups.create,
      startIcon: <AddIcon />,
    },
  ];

  return (
    <>
      <ContentHeader title={Voc.GROUPS} buttonsConfig={buttonsConfig} />
      <GroupsListTable />
    </>
  );
};
export default GroupsListPage;
