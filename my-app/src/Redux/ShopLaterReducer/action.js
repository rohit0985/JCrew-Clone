
import * as types from "./actionTypes"
import axios from 'axios'

export const getLSdata=() => (dispatch) => {
    dispatch({ type: types.GET_SHOPLATER_REQUEST});
    return axios
      .get(`https://nice-tan-elk-tutu.cyclic.app/shopLater`)
      .then((res) => {
        return dispatch({ type: types.GET_SHOPLATER_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_SHOPLATER_FAILURE, payload: err });
      });
  };


export const addLSdata=(payload)=> (dispatch) => {
     dispatch({ type: types.POST_SHOPLATER_REQUEST});
    return axios
      .post(`https://nice-tan-elk-tutu.cyclic.app/shopLater`,payload)
      .then((res) => {
        return dispatch({ type: types.POST_SHOPLATER_SUCCESS});
      })
      .then(()=> dispatch(getLSdata()))
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

export const deleteLSdata=(id) => (dispatch) => {
    dispatch({ type: types.DELETE_SHOPLATER_REQUEST});
    return axios
      .delete(`https://nice-tan-elk-tutu.cyclic.app/shopLater/${id}`)
      .then((res) => {
        return dispatch({ type: types.DELETE_SHOPLATER_SUCCESS});
      })
      .then(()=> dispatch(getLSdata()))
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

  