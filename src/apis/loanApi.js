import { defaultInstance } from ".";

const createLoanPost = (data) => {
  return defaultInstance.post("/loan", data);
};

const getLoanById = (id) => {
  return defaultInstance.get(`/loan/${id}`);
};

export const loanApi = { createLoanPost, getLoanById };
