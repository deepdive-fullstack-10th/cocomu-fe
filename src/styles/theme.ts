import { Theme } from '@emotion/react';
import { dark, light } from './color.ts';
import typography from './font.ts';

const mode: 'light' | 'dark' = 'light';

export const theme: Theme = {
  mode,
  color: mode === 'light' ? light : dark,
  font: typography,
};
