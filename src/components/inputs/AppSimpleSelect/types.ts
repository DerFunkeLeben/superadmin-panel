import { ReactNode } from 'react';
import { SelectProps } from '@mui/material';

export type AppSimpleSelectOption<ValueType extends string | number> =
  | {
      value: ValueType;
      label: ReactNode;
    }
  | string;

export type AppSimpleSelectProps<ValueType extends string | number = string | number> = Omit<
  SelectProps<ValueType>,
  'children'
> & {
  options: AppSimpleSelectOption<ValueType>[];
  disabledOptions?: Array<ValueType | string>;
  multiple?: boolean;
};
