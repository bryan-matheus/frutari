import React from 'react';
import Head from 'next/head';
import { Page } from '@geist-ui/core';

function Home() {
  return (
    <div>
      <Head>
        <title>Frutari - Buy your daily fruit!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page dotBackdrop padding={0} />
    </div>
  );
}

export default Home;
