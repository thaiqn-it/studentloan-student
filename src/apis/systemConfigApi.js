import { defaultInstance } from ".";

const getFee = () => {
  return defaultInstance.get("/config/getOne");
};

const getTransactionFee = () =>{
  return defaultInstance.get("/config//transaction-fee");
}

export const systemConfigApi = { getFee, getTransactionFee };
