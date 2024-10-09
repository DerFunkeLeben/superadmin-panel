import { AnyEntity } from '@/redux/types';

export const getOptionLabelDefault = <T extends AnyEntity | string>(option: T) =>
  typeof option === 'string' ? option : option.name;

export const isOptionEqualToValueDefault = <T extends AnyEntity | string>(option: T, value: T) => {
  const isString = typeof option === 'string' || typeof value === 'string';
  if (isString) return option === value;

  return option.id === value.id;
};
