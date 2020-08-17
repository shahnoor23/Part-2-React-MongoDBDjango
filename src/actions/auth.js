import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "./types";

//CHECK TOKEN AND LOAD USER

export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// //LOGIN USER

export const login = (username, password) => (dispatch) => {
  // if token add to headers config
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });
  axios
    .post("/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export function logout() {
  return (dispatch) => {
    const token = token;
    localStorage.removeItem("token", token);
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
}

export const tokenConfig = (getState) => {
  //gt token from state

  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //if token add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
