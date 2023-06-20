'use client';

import React from 'react';
import { Box, Button, Grid, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import { Input } from '@sura/ui';

export default function Login() {
  return (
    <Box>
      <Grid
        height="200px"
        bgSize="cover"
        bgPos="center"
        width="100%"
        bgImage="url('/images/bg-login.png')"
        p="20px"
        alignContent="flex-end"
        gridTemplateRows="repeat(2, min-content)"
      >
        <Heading variant="base">Hola de nuevo!</Heading>
        <Text>
          Si ya tienes
          <br /> una cuenta ahora ingresa
        </Text>
      </Grid>

      <Box p="20px">
        <Box>
          <Input label="email" value="Hello" />
          <Input label="contraseña" value="Hello" />

          <Button marginTop="10px" variant="base">
            Inicia sesion
          </Button>

          <Text color="brand.700" marginTop="10px" textAlign="center">
            Ya tienes una cuenta?{' '}
            <Link href="/login" as={NextLink} textDecor="underline">
              Inicia sesion
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
