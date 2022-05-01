import { defaultInstance } from '.'
import { loadToken } from './index'

const getNotification = (id, type) => {
    loadToken()
    return defaultInstance.get('/notification')
}

const updateNotification = (id, data) => {
    return defaultInstance.put(`/notification/${id}`, data)
}

export const notificationApi = { getNotification, updateNotification }
