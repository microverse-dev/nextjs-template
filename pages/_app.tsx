import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import {breakpoints, styles, textStyles} from '../styles/theme';

const theme = extendTheme({styles, breakpoints, textStyles});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
