import {
  LOGIN_FAIL,
  LOGIN_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCES,
  GET_USER_SUCCES,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  LOG_OUT,
} from "../actions/Type";

const initialState = {
  token: localStorage.getItem("token"),
  isLoading: true,
  user: null,
  error: false,
  auth: false,
  registerError: [],
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case LOGIN_SUCCES:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        auth: true,
        error: false,
      };

    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        auth: false,
        error: true,
      };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        auth: false,
        error: false,
      };
    case REGISTER_SUCCES:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        user: payload.user,
        auth: true,
        registerError: [],
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isLoading: false,
        user: null,
        auth: false,
        registerError: payload,
      };
    case GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_SUCCES:
      return {
        ...state,
        isLoading: false,
        user: payload,
        auth: true,
        registerError: [],
      };
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        user: null,
        auth: false,
        registerError: [],
      };
    default:
      return state;
  }
};

export default reducer;
