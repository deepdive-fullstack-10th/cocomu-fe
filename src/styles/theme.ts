import { Theme } from '@emotion/react';
import { dark, light } from './color';
import typography from './font';

const mode: 'light' | 'dark' = 'light';

export const theme: Theme = {
  mode,
  color: mode === 'light' ? light : dark,
  font: typography,
};
