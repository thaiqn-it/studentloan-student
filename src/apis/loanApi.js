import { defaultInstance } from ".";

const createLoanPost = (data) => {
  return defaultInstance.post("/loan", data);
};

export const loanApi = { createLoanPost };
