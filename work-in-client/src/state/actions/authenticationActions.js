import axios from "axios";
import axiosWithAuth from "../../axios/index";
import { Types } from "mongoose";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";
export const SIGN_UP_SUCCESSFUL = "SIGN_UP_SUCCESSFUL";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_SUCESSFULLY = "FETCH_USER_SUCESSFULLY";

const url = "http://localhost:3000/api/";

export const register = (props, values) => (dispatch) => {
  dispatch({ type: types.SIGN_UP });
  dispatch({ type: types.LOGIN_START });
  axios.post(`${url}auth/register`, values)
  .then(res => {
    dispatch({ type: types.SIGN_UP_SUCCESSFUL });
    dispatch({ 
      type: types.LOGIN_SUCCESSFUL,
      payload: res.data.user,
      message: res.data.messsage
    });
    localStorage.setItem('token', res.data.token);
    window.location.reload();
  })
  .catch(err => {
    dispatch({
      type: types.SIGN_UP_ERROR,
      payload: err.response.data.message,
    });
  });
};

export const login = (props, values) => dispatch => {
  dispatch({ type: types.LOGIN_START});
  axios.post(`${url}auth/login`, values)
  .then(res => {
    dispatch({
      type: types.LOGIN_SUCCESSFUL,
      payload: res.data.user,
      message: res.data.message,
    });
    localStorage.setItem('token', res.data.token);
    window.location.reload();
  })
  .catch(err => {
    dispatch({
      type: types.LOGIN_ERROR,
      payload: err.data,
    });
  });
};

export const logout = props => {
  localStorage.clear();
  window.location.reload();
  return { type: types.LOGOUT};
};