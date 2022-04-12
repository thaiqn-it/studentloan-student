import { defaultInstance } from '.'

const getTransactionsByUserId = (userId) => {
    return defaultInstance.post('/wallet', userId)
}

const getTransactionByWalletId = (walletId) => {
    return defaultInstance.get(`/transaction/wallet/${walletId}`)
}

const createTransaction = (data) => {
    return defaultInstance.post('/transaction', data)
}

const updateTransaction = (data) => {
    const { id, ...transaction } = data
    return defaultInstance.put(`transaction/${id}`, transaction)
}
export const transactionApi = {
    getTransactionsByUserId,
    getTransactionByWalletId,
    createTransaction,
    updateTransaction,
}
