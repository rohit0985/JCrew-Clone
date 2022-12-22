import * as types from "./actionTypes"

const init = {
    isLoading : false,
    product: "",
    isError : false
}

const reducer = (state = init, action)=>{
    const {type, payload} = action
    switch(type) {
        case types.GET_SINGLE_PRODUCTS_REQUEST : 
        return {
            ...state,
            isLoading : true
        }
        
        case types.GET_SINGLE_PRODUCTS_SUCCESS : 
        return {
            ...state,
            product : payload,
            isLoading : false
        }

        case types.GET_SINGLE_PRODUCTS_FAILURE : 
        return {
            ...state,
            isLoading : false,
            product : "",
            isError : true
        }

         default : return {
            ...state
         }
    }
}

export  {reducer} 