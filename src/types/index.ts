import { DefaultValues } from 'react-hook-form';

export type FormElementData<T> = Record<string, FieldArrayItem<T>[]>;

export interface FieldArrayItem<T> {
  id: string;
  value?: T;
}

export interface ErrorType {
  data: {
    message: string;
  };
}

export interface IFilterSearch {
  name?: string;
  title?: string;
  suggestion?: string;
  search?: string;
}

export interface AppSelectPropsBase {
  label?: string;
  placeholder?: string;
  error?: string;
  isDisabled?: boolean;
}

export interface FormSelectPropsBase {
  name: string;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  multiple?: boolean;
}

export type TFormatter<TEntity, TFormValues, Dto> = {
  from: (entity: TEntity) => DefaultValues<TFormValues>;
  to: (formValues: TFormValues, initData?: TEntity) => Dto;
};
