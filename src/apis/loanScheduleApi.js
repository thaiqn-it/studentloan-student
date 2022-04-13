import { defaultInstance } from '.'

const getLoanScheduleByLoanId = (id, type) => {
    return defaultInstance.get(`/loanschedule/loan/${id}`)
}

const getLoanScheduleById = (id, type) => {
    return defaultInstance.get(`/loanschedule/${id}`)
}


export const loanScheduleApi = { getLoanScheduleByLoanId, getLoanScheduleById}