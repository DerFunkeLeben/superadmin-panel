import { CSSProperties, SyntheticEvent } from 'react';
import { AutocompleteInputChangeReason, AutocompleteValue } from '@mui/material';

import { AppSelectPropsBase } from '@/types';

export type TOnInputChangeFn = (
  event: SyntheticEvent<Element, Event>,
  value: string,
  reason: AutocompleteInputChangeReason,
) => void;

export type TInputSelectValue<T, Multiple> = AutocompleteValue<T, Multiple, false, false>;

export interface AppInputSelectValueProps<T, Multiple> extends AppSelectPropsBase {
  value?: TInputSelectValue<T, Multiple>;
  onChange?: (value?: TInputSelectValue<T, Multiple>) => void;
  multiple?: Multiple;
}

export interface AppInputSelectProps<T, Multiple> extends AppInputSelectValueProps<T, Multiple> {
  data: T[] | undefined;
  isLoading: boolean;
  inputValue?: string;
  onInputChange: TOnInputChangeFn;
  getOptionLabel?: (option: T) => string;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  style?: CSSProperties;
}
