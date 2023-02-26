import React from 'react'
import { Box, Flex, Grid, Text, Button, Image } from '@chakra-ui/react'
import { AuthLogin } from '../helpers/auth'

import FallbackImage from '../assets/fallback-image.png'

type LogoutProps = {
  setShowLogoutModal: (value: boolean) => void
}

const Logout: React.FC<LogoutProps> = ({ setShowLogoutModal }) => {
  const { logout } = AuthLogin()

  return (
    <Flex
      h="100vh"
      overflowY="hidden"
      position="absolute"
      top="0"
      left="0"
      w="full"
      zIndex="100"
    >
      <Image
        h="86vh"
        objectFit="cover"
        w="full"
        fallbackSrc={FallbackImage}
        position="absolute"
        top="0"
        left="0"
        src="https://bit.ly/3YoN1uj"
        alt="Background of modal"
      />
      <Box
        py="2.375rem"
        px="1.25rem"
        position="absolute"
        bottom="0"
        left="0"
        w="full"
        bgColor="white"
        borderTopLeftRadius="2.5rem"
        borderTopRightRadius="2.5rem"
      >
        <Text
          fontWeight="semibold"
          fontSize="2rem"
          color="primary"
          lineHeight="2.5rem"
          mb="1.25rem"
        >
          Deseas cerrar sesión?
        </Text>

        <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
          <Button
            bgColor="primary"
            color="white"
            h="3.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="2px"
            onClick={logout}
          >
            Si, cerrar
          </Button>

          <Button
            color="primary"
            bgColor="gray.200"
            h="3.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="2px"
            onClick={() => setShowLogoutModal(false)}
          >
            No
          </Button>
        </Grid>
      </Box>
    </Flex>
  )
}

export default Logout
