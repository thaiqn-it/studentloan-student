const JWT_TOKEN = 'JWT_TOKEN'
const API_SUCCSES = 200
const USER_ID = 'USER_ID'
const STUDENT_ID = 'STUDENT_ID'
const API_BAD_REQUEST = 400
// const API_URL = 'https://studentloanfpt.ddns.net/api'

const API_URL = 'http://localhost:3000/api'

export let JWT_TOKEN_VALUE = ''

export const getJWToken = () => {
    return (JWT_TOKEN_VALUE = localStorage.getItem(JWT_TOKEN))
}

export { JWT_TOKEN, USER_ID, STUDENT_ID, API_SUCCSES, API_BAD_REQUEST, API_URL }
