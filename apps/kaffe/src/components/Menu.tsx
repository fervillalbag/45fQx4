import React, { useLayoutEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { IoShirtSharp } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'

import BoxColor from '../ui/BoxColor'
import HeadingUI from '../ui/Heading'
import TextUI from '../ui/Text'
import { closeMenu } from '../features/menuSlice'

const Menu: React.FC = () => {
  const dispatch = useDispatch()

  const isSubscribe = !!true
  const show = useSelector(
    (state: { menu: { show: boolean } }) => state.menu.show,
  )

  const handleCloseMenu = () => {
    dispatch(closeMenu())
  }

  // eslint-disable-next-line
  const ref = useRef<any>(null)

  // eslint-disable-next-line
  const [menuHeight, setMenuHeight] = useState(0)

  useLayoutEffect(() => {
    setMenuHeight(ref.current.clientHeight)
  }, [show])

  return (
    <>
      {/* <Box position="fixed" bgColor="red.500" top="0" left="0" zIndex="200">
        <h2 style={{ color: 'white' }}>Height: {menuHeight}</h2>
      </Box> */}

      <Box
        display={show ? 'block' : 'none'}
        onClick={handleCloseMenu}
        position="fixed"
        bgColor="rgba(0,0,0,0.6)"
        w="full"
        h="full"
        top="0"
        left="0"
      />

      <Box
        ref={ref}
        display={show ? 'block' : 'none'}
        bgColor="white"
        borderTopLeftRadius="2rem"
        borderTopRightRadius="2rem"
        p="2rem 1.25rem"
        position="absolute"
        w="full"
        left="0"
        bottom="0"
        h="max-content"
        zIndex="50"
      >
        <Button
          position="absolute"
          top="-4.5rem"
          left="50%"
          transform="translateX(-50%)"
          bgColor="red.500"
          color="white"
          boxShadow="2xl"
          onClick={handleCloseMenu}
          w="3.5rem"
          h="3.5rem"
          rounded="full"
          fontSize="2xl"
        >
          <FaTimes />
        </Button>

        <HeadingUI>Menu</HeadingUI>

        <TextUI textTransform="uppercase" fontSize="1.125rem" my="0.7rem">
          Acciones
        </TextUI>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#023E8A">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Publicar un producto/servicio
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#FF5555">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Realizar entrega de producto
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#FFC300">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Enviar dinero
            </TextUI>
          </Flex>
        </Link>

        <TextUI textTransform="uppercase" fontSize="1.125rem" my="0.7rem">
          LISTA
        </TextUI>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#335C67">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Lista de tickets
            </TextUI>
          </Flex>
        </Link>

        <Link to="/posted-posts">
          <Flex alignItems="center" mb="1rem">
            <BoxColor bgColor="#DC2F02">
              <IoShirtSharp />
            </BoxColor>
            <TextUI ml="0.75rem" color="secondary-gray">
              Historial de pagos
            </TextUI>
          </Flex>
        </Link>

        {/* Subscription */}
        <Box>
          <HeadingUI
            fontSize="1.5rem"
            textTransform="uppercase"
            mb="0.5rem"
            fontWeight="normal"
          >
            Suscripcion{' '}
            <Text
              fontWeight="bold"
              color={isSubscribe ? '#2A9D8F' : '#DC2F02'}
              as="span"
              textTransform="uppercase"
            >
              {isSubscribe ? 'activa' : 'inactiva'}
            </Text>
          </HeadingUI>

          <Box>
            {!isSubscribe ? (
              <Box>
                <TextUI color="primary" fontWeight="bold" fontSize="1.2rem">
                  Gs. 15.000{' '}
                  <Text
                    as="span"
                    fontWeight="normal"
                    color="light-gray"
                    fontSize="0.875rem"
                  >
                    /mes
                  </Text>
                </TextUI>
              </Box>
            ) : (
              <Box>
                <TextUI color="primary" fontWeight="normal" fontSize="1.2rem">
                  Se renueva el 22 de enero
                </TextUI>
                <TextUI
                  color="light-gray"
                  fontWeight="normal"
                  fontSize="0.9rem"
                >
                  3 meses suscrito
                </TextUI>
              </Box>
            )}
          </Box>

          <Button
            mt="0.5rem"
            h="3.125rem"
            border="1px solid"
            borderColor={isSubscribe ? '#DC2F02' : 'primary'}
            rounded="4px"
            w="full"
            bgColor="white"
            textTransform="uppercase"
            color={isSubscribe ? '#DC2F02' : 'primary'}
          >
            {isSubscribe ? 'Cancelar suscripcion' : 'Suscribirse'}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Menu
