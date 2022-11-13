
import * as types from "./actionTypes"
import axios from 'axios'

export const getLSdata=(url) => (dispatch) => {
    dispatch({ type: types.GET_SHOPLATER_REQUEST});
    return axios
      .get(url)
      .then((res) => {
       
        return dispatch({ type: types.GET_SHOPLATER_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_SHOPLATER_FAILURE, payload: err });
      });
  };



export const addLSdata=(url,payload)=> (dispatch) => {
    
    dispatch({ type: types.POST_SHOPLATER_REQUEST});
    return axios
      .post(url,payload)
      .then((res) => {
       
        return dispatch({ type: types.POST_SHOPLATER_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.POST_SHOPLATER_FAILURE });
      });
  };

export const updateLSdata=(url,payload)=>(dispatch)=>{
  console.log('hello')
    dispatch({ type: types.PATCH_SHOPLATER_REQUEST});
    return axios
      .patch(url,payload)
      .then((res) => {
       
        return dispatch({ type: types.PATCH_SHOPLATER_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.PATCH_SHOPLATER_FAILURE});
      });
  };

export const deleteLSdata=(url) => (dispatch) => {
   console.log('deleted')
    dispatch({ type: types.DELETE_SHOPLATER_REQUEST});
    return axios
      .delete(url)
      .then((res) => {
       
        return dispatch({ type: types.DELETE_SHOPLATER_SUCCESS});
      })
      .catch((err) => {
        return dispatch({ type: types.DELETE_SHOPLATER_FAILURE});
      });
  };

export const deleteAllLSdata=(url,payload)=>(dispatch)=>{
    
      dispatch({ type: types.PUT_SHOPLATER_REQUEST});
      return axios
        .put(url,payload)
        .then((res) => {
         
          return dispatch({ type: types.PUT_SHOPLATER_SUCCESS});
        })
        .catch((err) => {
          return dispatch({ type: types.PUT_SHOPLATER_FAILURE});
        });
    };

  