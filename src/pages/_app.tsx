import React from 'react';
import {AppProps} from 'next/app';
import 'inter-ui/inter.css';
import {RecoilRoot} from 'recoil';
import ThemeProvider from 'providers/ThemeProvider';
import {Layout} from 'components/layout';

/**
 * App class.
 *
 * @param {AppProps} props Component properties.
 * @return {React.ReactElement} App.
 */
function MyApp({Component, pageProps}: AppProps): React.ReactElement {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
