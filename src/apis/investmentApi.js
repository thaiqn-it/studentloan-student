import { defaultInstance } from '.'

const getInvestmentByLoanId = (id) => {
    return defaultInstance.get(`/investment/loanId/${id}`)
}

const updateInvestmentByLoanId = (id, data) =>{
    return defaultInstance.put(`/investment/all/loan/${id}`, data)
}
export const investmentApi = { getInvestmentByLoanId, updateInvestmentByLoanId }
