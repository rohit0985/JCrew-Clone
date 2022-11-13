import * as types from "./actionTypes"
import axios from 'axios'


const getData = (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST});
    return axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
       
        return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
      });
  };

  export  {getData}