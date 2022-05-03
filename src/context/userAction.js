import { loadToken } from 'apis/index'
import { USER_ID, JWT_TOKEN } from 'constants/index'

const { userApi } = require('apis/userApi')
const { USER_REDUCER_ACTION } = require('./authContext')

export const loginUser = async (dispatch, email, password, pushToken) => {
    try {
        dispatch({ type: USER_REDUCER_ACTION.REQUEST_LOGIN })
        const tokenRes = await userApi.login(email, password)
        if (tokenRes.status !== 200 || !tokenRes.data.token)
            throw new Error(tokenRes.data.msg)
        const token = tokenRes.data.token

        localStorage.setItem(JWT_TOKEN, token)
        loadToken()
      
        const user = await userApi.getStudentProfile()

        if (user.status !== 200 || !user.data) throw new Error(user.data.msg)
        const data = user.data
        const student = data.Student

        if(data.pushToken === null || data.pushToken !== pushToken){
            await userApi.updateUser({pushToken})
        }

        dispatch({
            type: USER_REDUCER_ACTION.LOGIN_SUCCESS,
            payload: {
                userId: data.id,
                user: user,
                student: student,
                studentId: student.id,
                token: token,
                error: null,
            },
        })
        return user
    } catch (err) {
        dispatch({
            type: USER_REDUCER_ACTION.LOGIN_FAILED,
            payload: { error: err },
        })
    }
}

export const logOut = function (dispatch) {
    localStorage.removeItem(USER_ID)
    localStorage.removeItem(JWT_TOKEN)
    dispatch({ type: USER_REDUCER_ACTION.LOG_OUT })
}

export const reloadData = async (dispatch) => {
    console.log('reload Data 2')
    try {
        const token = localStorage.getItem(JWT_TOKEN)
        loadToken(token)
        const user = await userApi.getStudentProfile()
        if (user.status !== 200 || !user.data) throw new Error(user.data.msg)
        const data = user.data
        const student = data.Student
        dispatch({
            type: USER_REDUCER_ACTION.LOGIN_SUCCESS,
            payload: {
                userId: data.id,
                user: user,
                student: student,
                studentId: student.id,
                token: token,
                error: null,
            },
        })
        return user
    } catch (err) {
        console.log(err)
        dispatch({
            type: USER_REDUCER_ACTION.LOGIN_FAILED,
            payload: { error: err },
        })
    }
}
