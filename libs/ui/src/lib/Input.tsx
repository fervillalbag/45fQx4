import {
  Text,
  InputProps,
  Box,
  Input as InputChakraUI,
  useColorMode,
  Switch,
  Flex,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface IInput extends InputProps {
  story?: boolean;
  label?: string;
}

export default function Input({ label, story, ...rest }: IInput) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (colorMode === 'dark') {
      toggleColorMode();
      return;
    }
  }, []);

  useEffect(() => {
    setIsDarkMode(colorMode === 'dark' ? true : false);
  }, [colorMode]);

  return (
    <>
      <Box mb="20px">
        <Text
          fontSize="14px"
          color="brand.200"
          display={label ? 'block' : 'none'}
          textTransform="lowercase"
          mb="3px"
        >
          {label}
        </Text>
        <InputChakraUI
          color={colorMode === 'dark' ? 'white' : 'brand.900'}
          w="full"
          height="58px"
          rounded="6px"
          borderColor="brand.200"
          _focusVisible={{
            borderColor: 'brand.100',
          }}
          _focus={{
            outlineColor: 'brand.200',
          }}
          {...rest}
        />
      </Box>

      {story && (
        <Flex gap="10px" alignItems="center">
          <Switch
            colorScheme="teal"
            defaultChecked={isDarkMode}
            value={colorMode}
            onChange={toggleColorMode}
          />
          <Text>Dark Mode</Text>
        </Flex>
      )}
    </>
  );
}
