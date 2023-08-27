import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import Layout  from './components/Layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Inova IF</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
     
      >
        
        <Component {...pageProps} />

        
      </MantineProvider>
    </>
  );
}