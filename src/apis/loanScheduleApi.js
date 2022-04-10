import { defaultInstance } from '.'

const getLoanScheduleByLoanId = (id, type) => {
    return defaultInstance.get(`/loanSchedule/${id}`, {
        params: {
            type,
        },
    })
}


export const loanApi = { createLoanPost, getLoanById, getLoanStudent }