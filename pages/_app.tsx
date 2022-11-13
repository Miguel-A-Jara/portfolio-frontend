import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../src/translations/i18next';
import AppThemeProvider from '../src/context/ApplicationThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
