import {
  LOGIN_FAIL,
  LOGIN_SUCCES,
  REGISTER_FAIL,
  REGISTER_SUCCES,
  GET_USER_FAIL,
  GET_USER_SUCCES,
  GET_USER_REQUEST,
  LOG_OUT,
} from "./Type";

import SetToken from "../header/SetToken";
import { instance } from "../axios";

export const userLogin = (form) => async (dispatch) => {
  try {
    const { data } = await instance.post(
      "http://localhost:8000/api/user/auth",
      form
    );

    dispatch({
      type: LOGIN_SUCCES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const userRegister = (form) => async (dispatch) => {
  try {
    const { data } = await instance.post(
      "http://localhost:8000/api/user",
      form
    );

    dispatch({
      type: REGISTER_SUCCES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data,
    });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });

  try {
    const { data } = await instance.get("http://localhost:8000/api/user/auth");

    dispatch({
      type: GET_USER_SUCCES,
      payload: data.user,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAIL,
    });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
};
