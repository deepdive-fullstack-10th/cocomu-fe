import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useToastStore } from '@stores/useToastStore';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ToastList from '@components/_common/molecules/ToastList';
import BaseModal from '@components/Modal/BaseModal';
import App from './App';
import globalStyles from './styles/globalStyles';
import { theme } from './styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
    },
    mutations: {
      onError: (error) => {
        const { error: alertError } = useToastStore.getState();
        alertError(error.message);
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
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
