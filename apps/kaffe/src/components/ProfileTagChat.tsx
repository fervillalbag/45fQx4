import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import TextUI from '../ui/Text'

const ProfileTagChat: React.FC = () => {
  return (
    <Grid
      gap="0 0.75rem"
      alignItems="center"
      gridTemplateColumns="3.75rem 1fr"
      mb="1.25rem"
    >
      <Box>
        <Image
          w="3.75rem"
          h="3.75rem"
          rounded="full"
          src="https://bit.ly/3VVAR9Z"
          objectFit="cover"
          alt=""
        />
      </Box>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <TextUI color="primary" fontWeight="semibold">
            Liv Rashford
          </TextUI>
          <TextUI fontSize={{ base: '0.8rem' }}>06:20</TextUI>
        </Flex>
        <TextUI fontSize={{ base: '0.8rem' }}>
          que precio tiene el vestido?
        </TextUI>
      </Box>
    </Grid>
  )
}

export default ProfileTagChat