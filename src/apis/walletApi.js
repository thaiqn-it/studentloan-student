import { defaultInstance } from '.'
import { loadToken } from './index'

const getWalletByUserId = () => {
    loadToken()
    return defaultInstance.get(`/wallet`)
}

export const walletApi = { getWalletByUserId }
