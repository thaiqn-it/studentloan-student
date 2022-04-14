import { defaultInstance } from '.'

const getLoanScheduleByLoanId = (id, optionNot) => {
    return defaultInstance.get(`/loanschedule/loan/${id}/${optionNot}`)
}

const getLoanScheduleById = (id, type) => {
    return defaultInstance.get(`/loanschedule/${id}`)
}

export const loanScheduleApi = {
    getLoanScheduleByLoanId,
    getLoanScheduleById,
}
