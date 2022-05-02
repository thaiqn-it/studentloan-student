import { defaultInstance } from '.'
import { loadToken } from './index'

const getNotification = (id, type) => {
    loadToken()
    return defaultInstance.get('/notification')
}

const updateNotification = (id, data) => {
    return defaultInstance.put(`/notification/${id}`, data)
}

const pushNotifToAdmin = (data) => {
    return defaultInstance.post(`/notification/admin`, data)
}

export const notificationApi = { getNotification, updateNotification, pushNotifToAdmin }
