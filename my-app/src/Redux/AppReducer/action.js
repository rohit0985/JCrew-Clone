import * as types from "./actionTypes";
import axios from "axios";
import { url as deployedUrl } from "../../url";


export const getData =(order,params)=> (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  let url = "";
  {order? url = `${deployedUrl}products?_sort=price&_order=${order}`:url =`${deployedUrl}products`};
  return axios
    .get(url,params)
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};
