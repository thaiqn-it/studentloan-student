import { defaultInstance } from ".";

const getInterest = () => {
  return defaultInstance.get("/config/interest");
};

export const systemConfigApi = { getInterest };
