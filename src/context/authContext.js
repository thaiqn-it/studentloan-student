import { JWT_TOKEN } from 'constants/index.js'
import { USER_ID, STUDENT_ID } from 'constants/index.js'
import { createContext, useContext, useReducer } from 'react'

const AuthStateContext = createContext()
const AuthDispatchContext = createContext()

export const useAuthState = () => {
    const context = useContext(AuthStateContext)
    if (context === undefined)
        throw new Error('useAuthState must use within a AuthProvider')
    return context
}

export const useAuthDispatch = () => {
    const context = useContext(AuthDispatchContext)
    if (context === undefined)
        throw new Error('useAuthDispatch must use within a AuthProvider')
    return context
}

export function AuthProvider({ children }) {
    const [userId, dispatch] = useReducer(authReducer, initialState)

    return (
        <AuthStateContext.Provider value={userId}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
}

export function isAuthenticated() {
    const authState = useAuthState()
    if (!authState.userId) return true

    return false
}
const userId = localStorage.getItem(USER_ID)
const studentId = localStorage.getItem(STUDENT_ID)
const token = localStorage.getItem(JWT_TOKEN)
const user = null
const student = null

const initialState = {
    userId: userId,
    user: user,
    student: student,
    studentId: studentId,
    token: token,
    loading: false,
    error: null,
    pushToken: null,
}

export const authReducer = (initialState, action) => {
    switch (action.type) {
        case USER_REDUCER_ACTION.REQUEST_LOGIN:
            return { ...initialState, loading: true }
        case USER_REDUCER_ACTION.LOGIN_SUCCESS:
            return {
                ...initialState,
                user: action.payload.user,
                student: action.payload.student,
                loading: false,
                userId: action.payload.userId,
                studentId: action.payload.studentId,
                token: action.payload.token,
            }
        case USER_REDUCER_ACTION.LOG_OUT:
            return {
                ...initialState,
                user: null,
                token: null,
                studentId: null,
                student: null,
                userId: null,
            }
        case USER_REDUCER_ACTION.LOGIN_FAILED:
            return {
                ...initialState,
                loading: false,
                error: action.payload.error,
            }
        default:
            throw new Error(`Unhandled Action type ${action.type}`)
    }
}

export const USER_REDUCER_ACTION = {
    REQUEST_LOGIN: 'REQUEST_LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOG_OUT: 'LOG_OUT',
}
