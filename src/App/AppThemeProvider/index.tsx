import { Fragment, ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import components from './components';
import { colorSchemes, shadows, shape, typography } from './themePrimitives';

interface AppThemeProps {
  children: ReactNode;
  disableCustomTheme?: boolean;
}

export default function AppTheme({ children, disableCustomTheme }: AppThemeProps) {
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          palette: colorSchemes.light.palette,
          typography,
          shadows,
          shape,
          components,
        });
  }, [disableCustomTheme]);

  if (disableCustomTheme) {
    return <Fragment>{children}</Fragment>;
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
