import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
        isError: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    default:
      return state;
  }
};