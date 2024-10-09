import format from 'date-fns/format';

import { millisecondsInSecond, timeToMillennium } from '@/pages/constants';

const timeOffset = new Date().getTimezoneOffset() * millisecondsInSecond;

export const formatTimestampFully = (timestamp: string) => {
  return format(new Date(timestamp).getTime(), 'd.MM.yyyy');
};

export const formatTimeStampTime = (timestamp: string) => {
  return format(new Date(timestamp).getTime(), 'HH:mm:ss');
};

export const formatTimestamp = (timestamp: string) => {
  return format(new Date(timestamp).getTime(), 'd.MM.yyyy HH:mm');
};

export const getDateWithoutTime = (date: string) => new Date(new Date(date).toDateString());

export const calculateDuration = (startDateValue: string, endDateValue: string) =>
  new Date(Date.parse(endDateValue) - Date.parse(startDateValue) + timeToMillennium + timeOffset);

export const calculateEndDate = (startDateValue: string, durationValue: string) =>
  new Date(Date.parse(durationValue) + Date.parse(startDateValue) - timeToMillennium - timeOffset);

export const calculateNewTime = (dateValue: string, oldTimeValue: string) => {
  const oldDate = getDateWithoutTime(oldTimeValue).toISOString();

  return new Date(Date.parse(dateValue) + Date.parse(oldTimeValue) - Date.parse(oldDate));
};

export const getTomorrowDate = () =>
  new Date(getDateWithoutTime(new Date().toISOString()).getTime() + 24 * 60 * 60 * 1000);

export const get2DaysLaterDate = () =>
  new Date(getDateWithoutTime(new Date().toISOString()).getTime() + 2 * 24 * 60 * 60 * 1000);
