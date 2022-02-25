import { defaultInstance } from ".";

const getWalletByUserId = (userId) => {
  return defaultInstance.post("/account", userId);
};

export const accountApi = { getWalletByUserId };
