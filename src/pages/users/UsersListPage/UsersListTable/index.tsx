import { FC } from 'react';

import ListTable from '@/components/others/ListTable/ListTable';
import { useDeleteUserMutation, useGetUsersListQuery } from '@/redux/services/users/users.api';
import { useListTable } from '@/hooks/table/useListTable';
import { useTableColumnConfig } from '@/hooks/table/useTableColumnConfig';
import { useTableDeleteHandler } from '@/hooks/table/useTableDeleteHandler';

import { columnsConfig } from './tableConfig';
import { routes } from '@/resources/routes';

const UsersListTable: FC = () => {
  const { checkedRows, listTableProps, listQueryParams } = useListTable();
  const { data } = useGetUsersListQuery(listQueryParams);

  const [deleteM] = useDeleteUserMutation();
  const onDeleteHandler = useTableDeleteHandler(checkedRows, deleteM);

  const columns = useTableColumnConfig(columnsConfig, {
    onEdit: (item) => routes.users.edit(item.id),
    onDelete: onDeleteHandler,
  });

  return <ListTable data={data} columns={columns} listTableProps={listTableProps} />;
};
export default UsersListTable;
