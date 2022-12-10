import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import '../styles/globals.css'
import '../src/translations/i18next';

import ModalContextProvider from '../src/context/ModalContext';
import AppThemeProvider     from '../src/context/ApplicationThemeContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <AppThemeProvider>
          <Component {...pageProps} />
        </AppThemeProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}
