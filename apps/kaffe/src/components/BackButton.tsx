import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import TextUI from '../ui/Text'

const BackButton: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate()

  return (
    <Flex alignItems="center">
      <Button
        bgColor="primary"
        color="white"
        rounded="2px"
        w="2.85rem"
        h="2.85rem"
        fontSize="1.2rem"
        onClick={() => navigate(-1)}
      >
        <FaAngleLeft />
      </Button>

      <TextUI ml="0.95rem" fontSize="1.125rem" color="primary">
        {title}
      </TextUI>
    </Flex>
  )
}

export default BackButton