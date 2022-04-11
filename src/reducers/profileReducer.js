import {
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR,
  SET_REGISTER_SUCCESS,
  SET_REGISTER_ERROR,
  CLEAR_ALL_DATA,
} from "../actions/profileAction";

const initialState = {
  successLogin: {},
  errorLogin: null,
  successRegister: {},
  errorRegister: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_SUCCESS: {
      return { ...state, successLogin: action?.loginSuccess };
    }
    case SET_LOGIN_ERROR: {
      return { ...state, errorLogin: action?.loginError };
    }
    case SET_REGISTER_SUCCESS: {
      return { ...state, successRegister: action?.registerSuccess };
    }
    case SET_REGISTER_ERROR: {
      return { ...state, errorRegister: action?.registerError };
    }
    case CLEAR_ALL_DATA: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default profileReducer;
