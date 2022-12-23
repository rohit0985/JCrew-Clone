import * as types from "./actionTypes";
import axios from "axios";

export const getData =(order,params)=> (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  let url = "";
  {order? url = `https://nice-tan-elk-tutu.cyclic.app/products?_sort=price&_order=${order}`:url ="https://nice-tan-elk-tutu.cyclic.app/products"};
  return axios
    .get(url,params)
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};
