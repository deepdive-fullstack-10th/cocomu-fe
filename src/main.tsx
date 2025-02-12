import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ToastList from '@components/_common/molecules/ToastList';
import App from './App';
import globalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles()} />
      <ToastList />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
