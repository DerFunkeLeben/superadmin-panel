import { FC } from 'react';
import { Grid } from '@mui/material';

import AppDatePicker from '@/components/inputs/AppDatePicker';

import { Period } from '@/pages/events/EventsListPage/types';

interface IDateFilter {
  dateFilter: Period;
  handleDateFilter: (field: keyof Period) => (date: Date | null) => void;
  size?: 2 | 4 | 6;
}

const DateFilter: FC<IDateFilter> = ({ dateFilter, handleDateFilter, size = 4 }) => {
  return (
    <>
      <Grid item xs={size}>
        <AppDatePicker
          value={dateFilter.startDate}
          onChange={handleDateFilter('startDate')}
          label='От'
        />
      </Grid>
      <Grid item xs={size}>
        <AppDatePicker
          value={dateFilter.endDate}
          onChange={handleDateFilter('endDate')}
          label='До'
        />
      </Grid>
    </>
  );
};

export default DateFilter;
