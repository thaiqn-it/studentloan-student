import { defaultInstance } from '.'

const createLoanPost = (data) => {
    return defaultInstance.post('/loan', data)
}

const getLoanById = (id, type) => {
    return defaultInstance.get(`/loan/student/${id}/${type}`)
}

const getLoanStudent = (type) => {
    return defaultInstance.get(`/loan/student/${type}`)
}

const updateLoanPost = (id,type, data) => {
    return defaultInstance.put(`/loan/${id}/${type}`, data)
}

export const loanApi = { createLoanPost, getLoanById, getLoanStudent, updateLoanPost }
