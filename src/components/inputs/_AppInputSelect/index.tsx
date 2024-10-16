import { HTMLAttributes, ReactNode, SyntheticEvent, useCallback } from 'react';
import { AutocompleteRenderInputParams, MenuItem } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { getOptionLabelDefault, isOptionEqualToValueDefault } from './utils';
import { AppInputSelectProps, TInputSelectValue } from './types';
import { Entity } from '@/types/api/common';

const AppInputSelect = <T extends Entity | string, M extends boolean>(
  props: AppInputSelectProps<T, M>,
) => {
  const {
    value,
    onChange,
    label,
    placeholder,
    error,
    data,
    inputValue,
    onInputChange,
    isLoading,
    isDisabled = false,
    multiple,
    style,
    getOptionLabel = getOptionLabelDefault,
    isOptionEqualToValue = isOptionEqualToValueDefault,
  } = props;

  const onChangeHandler = useCallback(
    (_: SyntheticEvent<Element, Event>, newValue: TInputSelectValue<T, M>) => {
      onChange?.(newValue);
    },
    [onChange],
  );

  const renderInput: (params: AutocompleteRenderInputParams) => ReactNode = (params) => {
    return (
      <TextField
        {...params}
        label={label}
        error={error !== undefined}
        helperText={error}
        placeholder={placeholder}
      />
    );
  };

  const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: T) => {
    const itemLabel = getOptionLabel(option);

    const key = typeof option === 'string' ? option : option.id;

    return (
      <MenuItem {...props} key={key}>
        {itemLabel}
      </MenuItem>
    );
  };

  return (
    <Autocomplete
      multiple={multiple}
      value={value}
      onChange={onChangeHandler}
      inputValue={inputValue}
      renderOption={renderOption}
      isOptionEqualToValue={isOptionEqualToValue}
      onInputChange={onInputChange}
      options={data ?? []}
      disabled={isLoading || isDisabled}
      renderInput={renderInput}
      loading={isLoading}
      autoHighlight
      getOptionLabel={getOptionLabel}
      style={style}
    />
  );
};

export default AppInputSelect;
