import { ThemeOptions } from '@mui/material';

const components: ThemeOptions['components'] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      size: 'small',
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiChip: {
    defaultProps: {
      variant: 'outlined',
      size: 'small',
    },
    styleOverrides: {
      root: {},
    },
  },
  MuiStack: {
    defaultProps: {
      alignItems: 'center',
      spacing: 2,
    },
  },
  MuiGrid: {
    defaultProps: {
      spacing: 2,
    },
  },
};

export default components;
