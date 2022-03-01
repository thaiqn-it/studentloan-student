import { defaultInstance } from ".";

const getTransactionsByUserId = (userId) => {
  return defaultInstance.post("/wallet", userId);
};

export const transaction = {};
