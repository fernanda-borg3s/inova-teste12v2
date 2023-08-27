import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import PageAcesso from './_acesso';
// import Layout  from './components/Layout';

export default function Login() {
  
  return (
    <>
      <Head>
        <title>Inova IF | Acesso</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
     
      >
        <PageAcesso/>
      </MantineProvider>
    </>
  );
}