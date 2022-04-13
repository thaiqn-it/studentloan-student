import { defaultInstance } from '.'

const getInvestmentByLoanId = (id) => {
    return defaultInstance.get(`/investment/loanId/${id}`)
}
export const investmentApi = { getInvestmentByLoanId }
