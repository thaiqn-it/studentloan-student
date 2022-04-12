import { defaultInstance } from '.'
import { loadToken } from './index'

const getNotification = (id, type) => {
    loadToken()
    return defaultInstance.get('/notification')
}

export const notificationApi = { getNotification }
