import { Theme } from '@emotion/react';
import { dark, light } from '@styles/color';
import typography from '@styles/font';

const mode: 'light' | 'dark' = 'light';

export const theme: Theme = {
  mode,
  color: mode === 'light' ? light : dark,
  font: typography,
};
