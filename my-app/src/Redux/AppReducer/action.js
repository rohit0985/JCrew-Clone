import * as types from "./actionTypes"
import axios from 'axios'


const getData =(url)=> (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST});
    return axios
      .get(url)
      .then((res) => {
       console.log(res.data)
        return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
      });
  };

  export  {getData}