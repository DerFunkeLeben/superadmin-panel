import { FC } from 'react';

import ListTable from '@/components/others/ListTable/ListTable';
import { useDeleteRoleMutation, useGetRolesListQuery } from '@/redux/services/roles/roles.api';
import { useListTable } from '@/hooks/table/useListTable';
import { useTableColumnConfig } from '@/hooks/table/useTableColumnConfig';
import { useTableDeleteHandler } from '@/hooks/table/useTableDeleteHandler';

import { columnsConfig } from './tableConfig';
import { routes } from '@/resources/routes';

const RolesListTable: FC = () => {
  const { checkedRows, listTableProps, listQueryParams } = useListTable();
  const { data } = useGetRolesListQuery(listQueryParams);

  const [deleteM] = useDeleteRoleMutation();
  const onDeleteHandler = useTableDeleteHandler(checkedRows, deleteM);

  const columns = useTableColumnConfig(columnsConfig, {
    onEdit: (item) => routes.roles.edit(item.id),
    onDelete: onDeleteHandler,
  });

  return <ListTable data={data} columns={columns} listTableProps={listTableProps} />;
};
export default RolesListTable;
