import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import ToastList from '@components/_common/molecules/ToastList';
import { worker } from '@mocks/browser';
import BaseModal from '@components/Modal/BaseModal';
import AppRouter from '@router/AppRouter';

import globalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

if (import.meta.env.MODE === 'development') {
  await worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
}

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles()} />
    <ToastList />
    <BaseModal />
    <AppRouter />
  </ThemeProvider>,
);
