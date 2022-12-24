import axios from "axios"
import * as types from "./actionTypes"
import { url } from "../../url"

const getSingleProductRequest = () =>{
  return {type : types.POST_SINGLE_PRODUCTS_REQUEST}
}


const getSingleProduct =(id) => (dispatch) =>{  
dispatch(getSingleProductRequest())
return axios
.get(`${url}products/${id}`)
.then((res)=> {
  return  dispatch({type: types.GET_SINGLE_PRODUCTS_SUCCESS, payload:res.data})
})
.catch((err)=>{
    console.log(err)
})
}

const deleteSingleProduct =(id) => (dispatch) =>{  
  dispatch({type: types.DELETE_SINGLE_PRODUCTS_REQUEST})
return axios
.delete(`${url}products/${id}`)
.then((res)=> {
  return  dispatch({type: types.DELETE_SINGLE_PRODUCTS_SUCCESS, payload:res.data})
})
.catch((err)=>{
    console.log(err)
})
}

export {getSingleProduct, deleteSingleProduct}