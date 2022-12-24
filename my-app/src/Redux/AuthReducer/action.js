
import * as types from "./actionTypes";
import axios from "axios";
import { url } from "../../url";

const signUp = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_SUCCESS });

  return axios({
    method: "POST",
    url: "user",
    baseURL: url,
    data: payload,
  })
    .then((res) => dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.SIGNUP_FAILURE, payload: e }));
};




const signIn = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNIN_SUCCESS });

  return axios({
    method: "POST",
    url: "user",
    baseURL: url,
    data: payload,
  })
    .then((res) => dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.SIGNIN_FAILURE, payload: e }));
};



export { signUp, signIn };
