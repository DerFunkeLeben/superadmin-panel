import { FC } from 'react';

import ListTable from '@/components/others/ListTable/ListTable';
import { useDeleteGroupMutation, useGetGroupsListQuery } from '@/redux/services/groups/groups.api';
import { useListTable } from '@/hooks/table/useListTable';
import { useTableColumnConfig } from '@/hooks/table/useTableColumnConfig';
import { useTableDeleteHandler } from '@/hooks/table/useTableDeleteHandler';

import { columnsConfig } from './tableConfig';
import { routes } from '@/resources/routes';

const GroupsListTable: FC = () => {
  const { checkedRows, listTableProps, listQueryParams } = useListTable();
  const { data } = useGetGroupsListQuery(listQueryParams);

  const [deleteM] = useDeleteGroupMutation();
  const onDeleteHandler = useTableDeleteHandler(checkedRows, deleteM);

  const columns = useTableColumnConfig(columnsConfig, {
    onEdit: (item) => routes.groups.edit(item.id),
    onDelete: onDeleteHandler,
  });

  return <ListTable data={data} columns={columns} listTableProps={listTableProps} />;
};
export default GroupsListTable;
