import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import '../styles/globals.css'
import '../src/translations/i18next';
import AppThemeProvider from '../src/context/ApplicationThemeContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}
