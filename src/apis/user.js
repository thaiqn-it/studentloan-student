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

const verifiOTP = (token, secret) => {
  return defaultInstance.post("user/verifyOTP", { token, secret });
};

export const userApi = {
  login,
  getUserById,
  signUp,
  checkEmail,
  sendOTP,
  verifiOTP,
};
