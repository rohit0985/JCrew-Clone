
import * as types from "./actionTypes"
import axios from 'axios'

// let url = `http://localhost:8080/users/1`

export const getCart=(url) => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST});
    return axios
      .get(url)
      .then((res) => {
       
        return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data.cart});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_CART_FAILURE, payload: err });
      });
  };



export const addCart=(url,payload)=> (dispatch) => {
    console.log('hello')
    dispatch({ type: types.POST_CART_REQUEST});
    return axios
      .post(url,payload)
      .then((res) => {
       
        return dispatch({ type: types.POST_CART_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.POST_CART_FAILURE });
      });
  };

export const updateCart=(url,payload)=>(dispatch)=>{
  console.log('hello')
    dispatch({ type: types.PATCH_CART_REQUEST});
    return axios
      .patch(url,payload)
      .then((res) => {
       
        return dispatch({ type: types.PATCH_CART_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.PATCH_CART_FAILURE});
      });
  };

export const deleteCart=(url) => (dispatch) => {
   console.log('deleted')
    dispatch({ type: types.DELETE_CART_REQUEST});
    return axios
      .delete(url)
      .then((res) => {
       
        return dispatch({ type: types.DELETE_CART_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.DELETE_CART_FAILURE});
      });
  };

  