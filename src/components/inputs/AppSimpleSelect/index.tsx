import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { AppSimpleSelectProps } from './types';

const AppSimpleSelect = <T extends string | number>(props: AppSimpleSelectProps<T>) => {
  const { options, disabledOptions = [], size, ...restProps } = props;

  const labelSize = size === 'small' ? 'small' : 'normal';

  return (
    <FormControl fullWidth>
      {restProps.label && <InputLabel size={labelSize}>{restProps.label}</InputLabel>}

      <Select fullWidth size={size} {...restProps}>
        {options.map((opt) => {
          const value = typeof opt === 'string' ? opt : opt.value;
          const label = typeof opt === 'string' ? opt : opt.label;

          const isDisabled = disabledOptions?.includes(value);

          return (
            <MenuItem key={value} value={value} disabled={isDisabled}>
              {label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default AppSimpleSelect;
