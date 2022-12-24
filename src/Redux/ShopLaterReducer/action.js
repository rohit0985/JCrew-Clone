
import * as types from "./actionTypes"
import axios from 'axios'
import { url } from "../../url";

export const getLSdata=() => (dispatch) => {
    dispatch({ type: types.GET_SHOPLATER_REQUEST});
    return axios
      .get(`${url}shopLater`)
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
      .post(`${url}shopLater`,payload)
      .then((res) => {
        return dispatch({ type: types.POST_SHOPLATER_SUCCESS});
      })
      .then(()=> dispatch(getLSdata()))
      .catch((err) => {
        return dispatch({ type: types.POST_SHOPLATER_FAILURE });
      });
  };



export const deleteLSdata=(id) => (dispatch) => {
    dispatch({ type: types.DELETE_SHOPLATER_REQUEST});
    return axios
      .delete(`${url}shopLater/${id}`)
      .then((res) => {
        return dispatch({ type: types.DELETE_SHOPLATER_SUCCESS});
      })
      .then(()=> dispatch(getLSdata()))
      .catch((err) => {
        return dispatch({ type: types.DELETE_SHOPLATER_FAILURE});
      });
  };




  