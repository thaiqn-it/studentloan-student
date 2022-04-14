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

const repayment = (data) =>{
    return defaultInstance.post(`/wallet/repayment/`, data)
}

const repaymentAll = (data) =>{
    return defaultInstance.post(`/wallet/repaymentAll/`, data)
}

const getWallet = () =>{
    return defaultInstance.get(`/wallet/`)
}

export const walletApi = { getWalletByUserId, updateWalletById, repayment, getWallet, repaymentAll }
