import React from 'react'
import { Box, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { HeadingUI, TextUI, InputUI, ButtonUI } from '../ui'
import { AuthLogin } from '../helpers/auth'
import { ValidationUserRegister } from '../validations/register'
import { ResponseValidation } from '../interfaces/validation'

const Register: React.FC = () => {
  const { register } = AuthLogin()

  const [userInfo, setUserInfo] = React.useState<{
    fullname: string
    username: string
    email: string
    password: string
    confirmPassword?: string
  }>({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleRegisterUser = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()

    const responseValidation = ValidationUserRegister(
      userInfo,
    ) as ResponseValidation

    // TODO: refactor to delete this line
    if (!responseValidation.success) return

    const dataUserInfo = { ...userInfo }
    delete dataUserInfo.confirmPassword

    try {
      await register(dataUserInfo)
    } catch (error) {
      console.log(error)
      toast.error('Ha ocurrido al crear la cuenta. Intentelo de nuevo')
    }
  }

  return (
    <Box p="20px" position="relative" minH="100vh">
      <Grid pt="2rem" pb="0.5rem">
        <HeadingUI textAlign="center">Bienvenido!</HeadingUI>
        <TextUI textAlign="center" mt="10px">
          Si aun no tienes una cuenta debes registrarte
        </TextUI>

        <Grid as="form" mt="1rem" onSubmit={handleRegisterUser}>
          <InputUI
            value={userInfo.fullname}
            onChange={(e) =>
              setUserInfo({ ...userInfo, fullname: e.target.value })
            }
            title="Name"
          />
          <InputUI
            value={userInfo.username}
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
            title="username"
          />
          <InputUI
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            title="email"
          />
          <InputUI
            type="password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
            title="contrasena"
          />
          <InputUI
            type="password"
            value={userInfo.confirmPassword}
            onChange={(e) =>
              setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            }
            title="confirmar contrasena"
          />

          <ButtonUI type="submit">Crear cuenta</ButtonUI>
        </Grid>
      </Grid>

      <Box position="static" w="full" right="0" py="0.5rem">
        <TextUI textAlign="center">
          Ya tienes una cuenta?{' '}
          <Link to="/login">
            <TextUI color="primary" as="span" textDecor="underline">
              Inicia sesion
            </TextUI>
          </Link>
        </TextUI>
      </Box>
    </Box>
  )
}

export default Register
