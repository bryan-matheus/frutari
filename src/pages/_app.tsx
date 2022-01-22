import React from 'react';
import {AppProps} from 'next/app';
import {GeistProvider, CssBaseline} from '@geist-ui/core';
import 'inter-ui/inter.css';

/**
 * App class.
 *
 * @param {AppProps} props Component properties.
 * @return {React.ReactElement} App.
 */
function MyApp({Component, pageProps}: AppProps): React.ReactElement {
  return (
    <GeistProvider themeType="dark">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default MyApp;
