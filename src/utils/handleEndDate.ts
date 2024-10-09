import { millisecondsInDay } from '@/pages/constants';

export const handleEndDate = (endDate: Date) => {
  return new Date(endDate.getTime() + millisecondsInDay);
};
