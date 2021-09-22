import {defaultInstance} from '.'

const login = (email,password) => {
    return defaultInstance.post('/user', {
        email : email,
        password : password,
    })
}

const getUserById = (id) => {
    return defaultInstance.get(`/user/${id}`)
}

export const userApi = {
    login,
    getUserById,
}