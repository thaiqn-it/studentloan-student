import { defaultInstance } from ".";

const login = (email, password) => {
  return defaultInstance.post("/user/login", {
    email: email,
    password: password,
  });
};

const signUp = (data) => {
  return defaultInstance.post("user", data);
};

const getUserById = (id) => {
  return defaultInstance.get(`/user/${id}`);
};

const checkEmail = (email) => {
  return defaultInstance.post(`user/checkEmail`, email);
};

const sendOTP = (phoneNumber) => {
  return defaultInstance.post("user/sendOTP", { phoneNumber });
};

const verifyOTP = (token, secret) => {
  return defaultInstance.post("user/verifyOTP", { token, secret });
};

const getUserProfile = () => {
  return defaultInstance.post("user/student/me");
};

const getWalletInfo = () => {
  return defaultInstance.post("user/me/wallet");
};

const getTransactions = () => {
  return defaultInstance.post("user/me/transactions");
};

export const userApi = {
  login,
  getUserById,
  signUp,
  checkEmail,
  sendOTP,
  verifyOTP,
  getUserProfile,
  getWalletInfo,
  getTransactions,
};
