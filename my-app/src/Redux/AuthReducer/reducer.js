// import React from "react";
// import * as types from "./actionTypes"

// const initialState = {
//   isAuth: false,
//   token : "",
//   isLoading: false,
//   isError: false,
//   user: [],
//   country : "",
  
//   //products: [],
// };

// const reducer = (state = initialState, action) => {
//   const{type,payload} = action;

//   switch(type){
//     case types.SIGNIN_REQUEST : 
//     return{
//       ...state,
//       isLoading : true,
//       isError : false,
//     };


//     case types.SIGNIN_SUCCESS : 
//     return{
//       ...state,
//       isAuth : true,
//       token : payload,
//       isLoading : false,
//       isError : false,
//     };

//     case types.SIGNIN_FAILURE :
//       return{
//         ...state,
//         isAuth :false,
//         token :"",
//         isLoading :false,
//         isError :true
//       }
//       default : 
//       return state;
//   }
// };

// export {reducer};




// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import React from 'react'

// const initialState = {
//     email : '',
//     password : '',
//     country : '',
// }

// const signUpUser = createAsyncThunk('signUpUser', () => {}

// const authSlice = createSlice({
//     name : 'user',
//     initialState,
//     reducers:{

//     },

//     extraReducers:{

//     },
// })
// export default authSlice.reducer;

import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
  //user: [],
  country: "",
  email: "",
  password: "",
  //products: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };

    case types.SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case types.SIGNIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export { reducer };
