import { defaultInstance } from '.'
import { loadToken } from './index'

const getWalletByUserId = () => {
    loadToken()
    return defaultInstance.get(`/account`)
}

export const accountApi = { getWalletByUserId }
