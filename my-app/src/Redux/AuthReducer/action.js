// import * as types from "./actionTypes";
// import axios from "axios";

// const signIn = (payload) => (dispatch) => {
//   dispatch({ type: types.SIGNIN_SUCCESS });

//   return axios({
//     method: "POST",
//     url: "/user",
//     baseURL: "http://localhost:8080",
//     data: payload,
//   })
//     .then((res) => dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data }))
//     .catch((e) => dispatch({ type: types.SIGNIN_FAILURE, payload: e }));
// };

// export { signIn };


import * as types from "./actionTypes";
import axios from "axios";

const signUp = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNUP_SUCCESS });

  return axios({
    method: "POST",
    url: "/user",
    baseURL: "https://nice-tan-elk-tutu.cyclic.app/",
    data: payload,
  })
    .then((res) => dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.SIGNUP_FAILURE, payload: e }));
};




const signIn = (payload) => (dispatch) => {
  dispatch({ type: types.SIGNIN_SUCCESS });

  return axios({
    method: "POST",
    url: "/user",
    baseURL: "https://nice-tan-elk-tutu.cyclic.app/",
    data: payload,
  })
    .then((res) => dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data }))
    .catch((e) => dispatch({ type: types.SIGNIN_FAILURE, payload: e }));
};



export { signUp, signIn };
