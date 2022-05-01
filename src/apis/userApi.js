import { USER_TYPE } from 'utils/enum'
import { defaultInstance, loadToken } from '.'

const login = (email, password) => {
    return defaultInstance.post('/user/login', {
        email: email,
        password: password,
        type: USER_TYPE.STUDENT,
    })
}

const signUp = (data) => {
    return defaultInstance.post('/user', data)
}

const getUserById = (id) => {
    return defaultInstance.get(`/user/${id}`)
}

const checkEmail = (email) => {
    return defaultInstance.post(`user/checkEmail`, email)
}

const sendOTP = (phoneNumber) => {
    return defaultInstance.post('user/sendOTP', { phoneNumber })
}

const verifyOTP = (token, secret) => {
    return defaultInstance.post('user/verifyOTP', { token, secret })
}

const getWalletInfo = () => {
    return defaultInstance.post('user/me/wallet')
}

const getTransactions = () => {
    return defaultInstance.post('user/me/transactions')
}

const getStudentProfile = () => {
    loadToken()
    return defaultInstance.get('user/student/me')
}

const updateUser = (data) => {
    return defaultInstance.put('/user/', data)
}

const verifyPassword = (data) => {
    return defaultInstance.post('/user/verifyPassword', data)
}

const chagnePassword = (data) =>{
    return defaultInstance.put('/user/change-password', data)
}

export const userApi = {
    login,
    getUserById,
    signUp,
    checkEmail,
    sendOTP,
    verifyOTP,
    getWalletInfo,
    getTransactions,
    getStudentProfile,
    updateUser,
    verifyPassword,
    chagnePassword,
}
