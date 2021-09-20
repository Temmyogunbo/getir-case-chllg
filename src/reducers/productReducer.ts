import { GET_PRODUCTS, PRODUCTS_RECEIVED, PRODUCTS_FAILED } from '../constants';

export const productReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true, hasError: false, };
    case PRODUCTS_RECEIVED:
      return {
        ...state,
        products: action.products,
        count: action.count,
        loading: false,
        hasError: false,
      };
    case PRODUCTS_FAILED:
      return { ...state, errorMessage: action.message, loading: false, hasError: true };
    default:
      return state;
  }
};
