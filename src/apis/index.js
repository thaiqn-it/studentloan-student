import axios from 'axios'
import { API_URL, getJWToken } from '../constants'

const defaultInstance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
    },
})

export const loadToken = () => {
    const token = getJWToken()
    defaultInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { defaultInstance }
