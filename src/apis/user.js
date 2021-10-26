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

export const userApi = {
  login,
  getUserById,
  signUp,
};
