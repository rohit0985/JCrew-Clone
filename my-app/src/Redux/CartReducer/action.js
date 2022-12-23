
import * as types from "./actionTypes"
import axios from 'axios'

export const getCdata=() => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST});
    return axios
      .get(`https://nice-tan-elk-tutu.cyclic.app/cart`)
      .then((res) => {
        return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_CART_FAILURE, payload: err });
      });
  };



export const addCdata=(payload)=> (dispatch) => {
  dispatch({type: types.POST_CART_REQUEST})
    return axios
      .post(`https://nice-tan-elk-tutu.cyclic.app/cart`,payload)
      .then((res) => {
        console.log(res)
        return   dispatch({type: types.POST_CART_SUCCESS})
      })
      .then(()=> dispatch(getCdata()))
      .catch((err) => {
        console.log(err)
      });
  };

export const updateCdata=(id,payload)=>(dispatch)=>{
    dispatch({ type: types.PATCH_CART_REQUEST});
    return axios
      .patch(`https://nice-tan-elk-tutu.cyclic.app/cart/${id}`,payload)
      .then((res) => {
        return dispatch({ type: types.PATCH_CART_SUCCESS});
      })
      .then(()=> dispatch(getCdata()))
      .catch((err) => {
        return dispatch({ type: types.PATCH_CART_FAILURE});
      });
  };

export const deleteCdata=(id) => (dispatch) => {
    dispatch({ type: types.DELETE_CART_REQUEST});
    return axios
      .delete(`https://nice-tan-elk-tutu.cyclic.app/cart/${id}`)
      .then((res) => {
        return dispatch({ type: types.DELETE_CART_SUCCESS});
      })
      .then(()=> dispatch(getCdata()))
      .catch((err) => {
        return dispatch({ type: types.DELETE_CART_FAILURE});
      });
  };

export const deleteAllCdata=(url,payload)=>(dispatch)=>{
      dispatch({ type: types.PUT_CART_REQUEST});
      return axios
        .put(`https://nice-tan-elk-tutu.cyclic.app/cart`)
        .then((res) => {
          return dispatch({ type: types.PUT_CART_SUCCESS});
        })
        .then(()=> dispatch(getCdata()))
        .catch((err) => {
          return dispatch({ type: types.PUT_CART_FAILURE});
        });
    };

  