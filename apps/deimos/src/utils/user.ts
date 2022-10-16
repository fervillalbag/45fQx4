import axios from '../config/axios'
import { UpdateUserType } from '../interfaces/User'

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await axios({
      method: 'POST',
      url: '/user/login',
      data: JSON.stringify(data),
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getUser = async (id: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/user/${id}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/user/username/${username}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getUserByName = async (name: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/user/name/${name}`,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const updateUser = async (id: string, data: UpdateUserType) => {
  const response = await axios({
    method: 'PATCH',
    url: `/user/${id}`,
    data: JSON.stringify(data),
  })

  return response.data
}