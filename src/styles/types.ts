import '@emotion/react';
import { light } from './color';
import typography from './font';

declare module '@emotion/react' {
  export interface Theme {
    mode: 'light' | 'dark';
    color: typeof light;
    font: typeof typography;
  }
}
