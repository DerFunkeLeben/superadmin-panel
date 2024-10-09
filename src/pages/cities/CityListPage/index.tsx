import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Grid, TextField } from '@mui/material';

import ContentHeader from '@/components/others/ContentHeader';
import CityListTable from './CityListTable';
import { useFilterSearch } from '@/hooks/useFilterSearch';

import { BC } from '@/resources/breadcrumbs';
import { Voc } from '@/resources/navbar/constants';
import { routesCities } from '@/resources/routes/cities';

const CityListPage: FC = () => {
  const { filterSearch, handleFilterSearch } = useFilterSearch();

  const buttonsConfig = [
    {
      textForButton: 'Добавить город',
      link: routesCities.create,
      startIcon: <AddIcon />,
    },
  ];

  return (
    <>
      <ContentHeader title={Voc.CITIES} breadcrumbs={BC.HANDBOOKS} buttonsConfig={buttonsConfig} />
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12}>
          <TextField
            placeholder='Поиск по названию'
            fullWidth
            variant='outlined'
            onChange={handleFilterSearch}
          />
        </Grid>
      </Grid>
      <CityListTable filterSearch={filterSearch} />
    </>
  );
};
export default CityListPage;
