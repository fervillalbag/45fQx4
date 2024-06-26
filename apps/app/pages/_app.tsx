import { Box, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';

import { theme } from '@sura/chakra';
import '../styles/globals.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box className={roboto.className}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
