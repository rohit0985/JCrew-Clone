import axios from "axios"
import * as types from "./actionTypes"

const getSingleProductRequest = () =>{
  return {type : types.POST_SINGLE_PRODUCTS_REQUEST}
}


const getSingleProduct =(id) => (dispatch) =>{  
dispatch(getSingleProductRequest())
return axios
.get(`https://nice-tan-elk-tutu.cyclic.app/products/${id}`)
.then((res)=> {
  return  dispatch({type: types.GET_SINGLE_PRODUCTS_SUCCESS, payload:res.data})
})
.catch((err)=>{
    console.log(err)
})
}

export {getSingleProduct}