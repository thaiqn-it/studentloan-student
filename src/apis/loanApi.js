import { defaultInstance } from '.'

const createLoanPost = (data) => {
    return defaultInstance.post('/loan', data)
}

const getLoanById = (id, type) => {
    return defaultInstance.get(`/loan/student/${id}`, {
        params: {
            type,
        },
    })
}

const getLoanStudent = () => {
    return defaultInstance.get(`/loan/student`)
}

export const loanApi = { createLoanPost, getLoanById, getLoanStudent }
