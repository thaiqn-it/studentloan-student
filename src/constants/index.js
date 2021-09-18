const JWT_TOKEN = "JWT_TOKEN";
const API_SUCCSES = 200;
const API_BAD_REQUEST = 400;
const API_URL = process.env.REACT_APP_DEV_API_URL;

export let JWT_TOKEN_VALUE = "";

export const getJWToken = () => {
  return (JWT_TOKEN_VALUE = localStorage.getItem(JWT_TOKEN));
};

export {
  JWT_TOKEN,
  API_SUCCSES,
  API_BAD_REQUEST,
  API_URL,
};
