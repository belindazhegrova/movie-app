export const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const SET_REGISTER_SUCCESS = "SET_LOGIN_SUCCESS";
export const SET_REGISTER_ERROR = "SET_LOGIN_ERROR";
export const CLEAR_ALL_DATA = "CLEAR_ALL_DATA";

export const loginSuccess = (response) => {
  return {
    type: SET_LOGIN_SUCCESS,
    loginSuccess: response,
  };
};

export const loginError = (error) => {
  return {
    type: SET_LOGIN_ERROR,
    loginError: error,
  };
};
export const registerSuccess = (response) => {
  return {
    type: SET_REGISTER_SUCCESS,
    registerSuccess: response,
  };
};
export const registerError = (error) => {
  return {
    type: SET_REGISTER_ERROR,
    registerError: error,
  };
};
export const clearAlldata = () => {
  return {
    type: CLEAR_ALL_DATA,
  };
};
