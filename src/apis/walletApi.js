import { defaultInstance } from '.'
import { loadToken } from './index'

const getWalletByUserId = () => {
    loadToken()
    return defaultInstance.get(`/wallet`)
}

const updateWalletById = (id, money) => {
    loadToken()
    return defaultInstance.put(`/wallet/${id}`, { money: money })
}

export const walletApi = { getWalletByUserId, updateWalletById }
