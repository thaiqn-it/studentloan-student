import { defaultInstance } from '.'

const createLoanMedia = (data) => {
    return defaultInstance.post('/loanMedia', data)
}

const updateLoanMedia = (id, data) => {
    return defaultInstance.put(`/loanMedia/${id}`, data)
}

export const loanMediaApi = { createLoanMedia, updateLoanMedia, }
