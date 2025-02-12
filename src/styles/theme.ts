import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { dark, light } from '@styles/color';
import typography from '@styles/font';
import { muiTypography } from './muiTypography';

const mode: 'light' | 'dark' = 'light';

const muiTheme = createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? light.primary[100] : dark.primary[100],
    },
    background: {
      default: mode === 'light' ? light.gray[50] : dark.gray[950],
      paper: mode === 'light' ? light.gray[200] : dark.gray[900],
    },
  },
  typography: muiTypography,
});

export const theme: Theme = {
  ...muiTheme,
  mode,
  color: mode === 'light' ? light : dark,
  font: typography,
};
