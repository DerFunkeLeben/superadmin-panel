import { FC } from 'react';

import ListTable from '@/components/others/ListTable/ListTable';
import { useDeleteCityMutation, useGetCityListQuery } from '@/redux/services/cities/cities.api';
import { useListTable } from '@/hooks/table/useListTable';
import { useTableColumnConfig } from '@/hooks/table/useTableColumnConfig';
import { useTableDeleteHandler } from '@/hooks/table/useTableDeleteHandler';

import { columnsConfig } from './tableConfig';
import { routesCities } from '@/resources/routes/users';
import { IFilterSearch } from '@/types';

export type CityListProps = {
  filterSearch?: IFilterSearch;
};

const CityListTable: FC<CityListProps> = ({ filterSearch }) => {
  const { checkedRows, listTableProps, listQueryParams } = useListTable();
  const { data } = useGetCityListQuery({ ...listQueryParams, ...filterSearch });

  const [deleteCity] = useDeleteCityMutation();
  const onDeleteCityHandler = useTableDeleteHandler(checkedRows, deleteCity);

  const columns = useTableColumnConfig(columnsConfig, {
    onEdit: (item) => routesCities.edit(item.id),
    onDelete: onDeleteCityHandler,
  });

  return <ListTable data={data} columns={columns} listTableProps={listTableProps} />;
};
export default CityListTable;
