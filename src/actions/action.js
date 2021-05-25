import {
  FETCH_DETAILS_LOADING,
  FETCH_DETAILS_SUCCESS,
  UPDATE_DETAILS_LOADING,
  UPDATE_DETAILS_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
} from "./types";

export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const userLoginError = (data) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: data,
  };
};

export const userLoginLoading = (data) => {
  console.log(data);
  return {
    type: USER_LOGIN_LOADING,
    payload: data,
  };
};

export const fetchDetailsLoading = (data) => {
  return {
    type: FETCH_DETAILS_LOADING,
    payload: data,
  };
};

export const fetchDetailsSucess = (data) => {
  return {
    type: FETCH_DETAILS_SUCCESS,
    payload: data,
  };
};

export const updateDetailsLoading = (data) => {
  return {
    type: UPDATE_DETAILS_LOADING,
    payload: data,
  };
};

export const updateDetailsSuccess = (data) => {
  return {
    type: UPDATE_DETAILS_SUCCESS,
    payload: data,
  };
};
