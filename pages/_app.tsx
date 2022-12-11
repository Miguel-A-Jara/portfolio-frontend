import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';

import '../styles/globals.css'
import '../src/translations/i18next';

import ModalContextProvider from '../src/context/ModalContext';
import AppThemeProvider     from '../src/context/ApplicationThemeContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <ThemeProvider>
          <AppThemeProvider>
            <Component {...pageProps} />
          </AppThemeProvider>
        </ThemeProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}
