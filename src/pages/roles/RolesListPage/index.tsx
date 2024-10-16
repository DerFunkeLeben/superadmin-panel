import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';

import ContentHeader from '@/components/others/ContentHeader';
import RolesListTable from './RolesListTable';

import { Voc } from '@/resources/navbar/constants';
import { routes } from '@/resources/routes';

const RolesListPage: FC = () => {
  const buttonsConfig = [
    {
      textForButton: 'Новая роль',
      link: routes.roles.create,
      startIcon: <AddIcon />,
    },
  ];

  return (
    <>
      <ContentHeader title={Voc.ROLES} buttonsConfig={buttonsConfig} />
      <RolesListTable />
    </>
  );
};
export default RolesListPage;
