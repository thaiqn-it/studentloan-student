import { loadToken } from 'apis'
import { USER_ID, JWT_TOKEN } from 'constants/index'

const { userApi } = require('apis/userApi')
const { USER_REDUCER_ACTION } = require('./authContext')

export const loginUser = async (dispatch, email, password) => {
    try {
        dispatch({ type: USER_REDUCER_ACTION.REQUEST_LOGIN })
        const tokenRes = await userApi.login(email, password)
        if (tokenRes.status !== 200 || !tokenRes.data.token)
            throw new Error(tokenRes.data.msg)
        const token = tokenRes.data.token

        localStorage.setItem(JWT_TOKEN, token)
        loadToken()
        const user = await userApi.getStudentProfile()
        console.log(user)
        if (user.status !== 200 || !user.data) throw new Error(user.data.msg)
        dispatch({
            type: USER_REDUCER_ACTION.LOGIN_SUCCESS,
            payload: { user: user, token: token },
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
