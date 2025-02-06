import '@emotion/react';
import typography from './font.ts';
import { light } from './color.ts';

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark';
    color: typeof light;
    font: typeof typography;
  }
}
