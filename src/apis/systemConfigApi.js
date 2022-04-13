import { defaultInstance } from ".";

const getFee = () => {
  return defaultInstance.get("/config/getOne");
};

export const systemConfigApi = { getFee };
