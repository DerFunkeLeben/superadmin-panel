import { Entity } from '@/types/api/common';

export const getOptionLabelDefault = <T extends Entity | string>(option: T) =>
  typeof option === 'string' ? option : option.name;

export const isOptionEqualToValueDefault = <T extends Entity | string>(option: T, value: T) => {
  const isString = typeof option === 'string' || typeof value === 'string';
  if (isString) return option === value;

  return option.id === value.id;
};
