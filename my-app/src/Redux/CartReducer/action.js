
import * as types from "./actionTypes"
import axios from 'axios'

export const getCdata=(url) => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST});
    return axios
      .get(url)
      .then((res) => {
       
        return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_CART_FAILURE, payload: err });
      });
  };



export const addCdata=(url,payload)=> (dispatch) => {
    return axios
      .post(url,payload)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };

export const updateCdata=(url,payload)=>(dispatch)=>{
  console.log(payload)
    // dispatch({ type: types.PATCH_CART_REQUEST});
    return axios
      .patch(url,payload)
      .then((res) => {
        return dispatch({ type: types.PATCH_CART_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.PATCH_CART_FAILURE});
      });
  };

export const deleteCdata=(url) => (dispatch) => {
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

export const deleteAllCdata=(url,payload)=>(dispatch)=>{
    
      dispatch({ type: types.PUT_CART_REQUEST});
      return axios
        .put(url,payload)
        .then((res) => {
         
          return dispatch({ type: types.PUT_CART_SUCCESS});
        })
        .catch((err) => {
          return dispatch({ type: types.PUT_CART_FAILURE});
        });
    };

  