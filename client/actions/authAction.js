import axios from 'axios';
import toastr from "toastr";
import { AUTH, LOGOUT } from "./actionTypes";

import { hostUrl } from "../helpers/utils";

const baseUrl = '/api/v1/users/';

const authenticateUser = token => ({
  type: AUTH,
  token,
});

export const authUser = (type, userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${hostUrl}${baseUrl}/${type}`, userData);
    const { data: { data: { token }, message } } = response;
    localStorage.setItem('token', token);
    dispatch(authenticateUser(token));
    toastr.success(message);
  } catch (e) {
    throw (e);
  }
};

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
};
