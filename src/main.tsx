import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useToastStore } from '@stores/useToastStore';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ToastList from '@components/_common/molecules/ToastList';
import BaseModal from '@components/Modal/BaseModal';
import { worker } from '@mocks/browser';
import App from './App';
import globalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

const main = async () => {
  const { error: alertError } = useToastStore.getState();

  if (import.meta.env.MODE === 'development') {
    await worker.start({
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
      onUnhandledRequest: 'bypass',
    });
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        retry: 0,
      },
      mutations: {
        onError: (error) => {
          alertError(error.message);
        },
      },
    },
  });

  const root = createRoot(document.getElementById('root') as Element);

  root.render(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles()} />
          <ToastList />
          <BaseModal />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>,
  );
};

main();
