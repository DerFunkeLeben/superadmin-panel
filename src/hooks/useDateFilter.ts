import { useEffect, useState } from 'react';

import { Period } from '@/pages/events/EventsListPage/types';

const useDateFilter = () => {
  const [dateFilter, setDateFilter] = useState<Period>({ startDate: null, endDate: null });

  const { startDate, endDate } = dateFilter;

  const handleDateFilter = (field: keyof Period) => (date: Date | null) => {
    setDateFilter((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      setDateFilter({
        startDate: endDate,
        endDate: startDate,
      });
    }
  }, [endDate, startDate]);

  return {
    dateFilter,
    handleDateFilter,
  };
};

export default useDateFilter;
