import { defaultInstance } from ".";

const createLoanPost = (data) => {
  return defaultInstance.post("/loan", data);
};

const getLoanById = (id) => {
  return defaultInstance.get(`/loan/${id}`);
};

const getLoanStudent = ()=>{
  return defaultInstance.get(`/loan/student`);
}

export const loanApi = { createLoanPost, getLoanById, getLoanStudent };
