import { defaultInstance } from '.'

const getTransactionsByUserId = (userId) => {
    return defaultInstance.post('/wallet', userId)
}

const getTransactionByWalletId = (walletId) => {
    return defaultInstance.get(`/wallet/account/${walletId}`)
}

export const transactionApi = {
    getTransactionsByUserId,
    getTransactionByWalletId,
}
