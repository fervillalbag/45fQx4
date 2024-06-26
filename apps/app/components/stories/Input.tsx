import { Input as InputUI } from '@sura/ui';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@sura/chakra';

export function Input({ ...rest }) {
  return (
    <ChakraProvider theme={theme}>
      <InputUI label="Hello" {...rest} />
    </ChakraProvider>
  );
}
