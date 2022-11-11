import React from "react";
import * as types from "./actionTypes"

const initialState = {
  isAuth: false,
  token : "",
  isLoading: false,
  isError: false,
  products: [],
};

const reducer = (state = initialState, action) => {
  const{type,payload} = action;

  switch(type){
    case types.SIGNUP_REQUEST : 
    return{
      ...state,
      isLoading : true,
      isError : false,
    };


    case types.SIGNIN_SUCCESS : 
    return{
      ...state,
      isAuth : true,
      token : payload,
      isLoading : false,
      isError : false,
    };

    case types.SIGNIN_FAILURE :
      return{
        ...state,
        isAuth :false,
        token :"",
        isLoading :false,
        isError :true
      }
      default : 
      return state;
  }
};

export {reducer};


